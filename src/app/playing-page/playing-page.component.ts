import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { combineLatest, Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  share,
  startWith,
} from "rxjs/operators";
import { Recitator } from "src/models/recitator.model";
import { Surah } from "src/models/surah.model";
import { QuranService } from "../quran.service";

@Component({
  selector: "app-playing-page",
  templateUrl: "./playing-page.component.html",
  styleUrls: ["./playing-page.component.scss"],
})
export class PlayingPageComponent implements OnInit, OnDestroy {
  constructor(
    private quranServ: QuranService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  surahs$: Observable<Surah[]>;
  allSurahs$: Observable<Surah[]>;
  progressState = 0;
  playing = false;
  player;
  audio;
  currentTime = 0;
  surahNo = 1;
  recitator: Recitator;

  searchForm = this.fb.group({
    searchText: [""],
    selectTime: [0],
  });

  searchText$ = this.searchForm
    .get("searchText")
    .valueChanges.pipe(
      startWith(""),
      distinctUntilChanged(),
      debounceTime(500)
    );

  ngOnInit() {
    this.recitator = JSON.parse(localStorage.getItem("recitator"));
    if (!this.recitator) this.router.navigate(["/home"]);

    this.audio = new Audio();
    this.audio.load();
    this.fetchSurahs();
  }

  ngOnDestroy() {
    this.audio.src = "";
    this.audio.currentTime = 0;
    this.audio = null;
    clearInterval(this.player);
  }

  fetchSurahs() {
    this.allSurahs$ = this.quranServ.getSurahs().pipe(share());
    this.surahs$ = combineLatest([this.allSurahs$, this.searchText$]).pipe(
      map(([surahs, search]) =>
        surahs.filter((surah) =>
          `${surah.number} ${surah.transliteration_en.toLowerCase()}`.includes(
            search.toLowerCase()
          )
        )
      )
    );
  }

  onSelectingSurah(id: number) {
    this.surahNo = id;
    this.audio.src = this.quranServ.getSurahURL(
      this.surahNo,
      this.recitator.id
    );

    this.currentTime = 0;
    this.playAudio();
  }

  play() {
    if (!this.audio.src) return;

    if (!this.playing) {
      this.playAudio();
    } else {
      this.pauseAudio();
      this.currentTime = this.audio.currentTime;
      clearInterval(this.player);
    }
  }

  playAudio() {
    this.playing = true;
    this.audio.currentTime = this.currentTime;
    this.audio.play();

    const p = this.updateProgressBar.bind(this);
    this.player = setInterval(p, 1000);
  }

  pauseAudio() {
    this.playing = false;
    this.audio.pause();
  }

  updateProgressBar() {
    this.currentTime = Math.floor(this.audio.currentTime);

    this.progressState = (this.audio.currentTime / this.audio.duration) * 100;
    if (this.progressState === 100) {
      clearInterval(this.player);
      this.next();
    }
    this.searchForm.get("selectTime").patchValue(Math.ceil(this.progressState));
  }

  onSelectTime() {
    const momentSelected = this.searchForm.get("selectTime").value;
    this.audio.currentTime = (momentSelected * this.audio.duration) / 100;
  }

  next() {
    this.surahNo = this.surahNo + 1 <= 114 ? this.surahNo + 1 : 1;

    if (this.surahNo >= 1 && this.surahNo <= 114) {
      this.currentTime = 0;
      this.audio.src = this.quranServ.getSurahURL(
        this.surahNo,
        this.recitator.id
      );
      this.playAudio();
    }
  }

  prev() {
    this.surahNo--;
    if (this.surahNo <= 0) {
      this.surahNo = 1;
    }
    if (this.surahNo >= 1 && this.surahNo <= 114) {
      this.currentTime = 0;
      this.audio.src = this.quranServ.getSurahURL(
        this.surahNo,
        this.recitator.id
      );
      this.playAudio();
    }
  }
}
