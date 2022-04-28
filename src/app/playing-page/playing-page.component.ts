import { Component, OnDestroy, OnInit } from '@angular/core';
import { Song } from 'src/models/song.model';
import { Surah } from 'src/models/surah.model';
import { QuranService } from '../quran.service';

@Component({
  selector: 'app-playing-page',
  templateUrl: './playing-page.component.html',
  styleUrls: ['./playing-page.component.scss']
})
export class PlayingPageComponent implements OnInit, OnDestroy {

  constructor(private quranServ: QuranService) { }

  surahs: Surah[];

  progressState = 0;
  playing = false;

  path = "../../assets";
  btnPlayerUrl;
  btnPlayUrl = "img/btn_play.png";
  btnPauseUrl = "img/btn_pause.png";

  player;
  audio;
  currentTime = 0;

  // Dummy player
  songs: Song[] = [
                    new Song('Sourate An-Nahl', 'http://localhost:5000/surah/16/kalbani'),
                    new Song('Craig David - I Know You', '../../../assets/music/Craig David - I Know You.mp3'),
                    new Song('Cardi B - WAP feat. Megan Thee Stallion', '../../../assets/music/Cardi B - WAP feat. Megan Thee Stallion.mp3'),
                    new Song("Darina Victry Laisse Moi T'aimer", "../../../assets/music/Darina Victry Laisse Moi T'aimer.mp3"),
                    new Song("Hakeem Tiana Starlight", "../../../assets/music/Hakeem Tiana Starlight.mp3"),
                    new Song("Iggy Azalea - Fancy ft. Charli XCX", "../../../assets/music/Iggy Azalea - Fancy ft. Charli XCX.mp3"),
  ];
  currentId = 0;

  ngOnInit() {
    this.btnPlayerUrl = `${this.path}/${this.btnPlayUrl}`;
    this.audio = new Audio();
    this.audio.src = this.songs[this.currentId].srcURL;
    this.audio.load();
    // this.fetchSurahs();
  }

  ngOnDestroy() {
    this.audio.src = "";
    this.audio.currentTime = 0;
    this.audio = null;
    clearInterval(this.player);
  }

  fetchSurahs() {
    this.quranServ.getSurahs()
        .subscribe((data: Surah[]) => this.surahs = data );
  }


  play() {
    if (this.playing) {
      // we're playing, so we pause
      this.pauseAudio();
      clearInterval(this.player)
      this.playing = false;
      this.btnPlayerUrl = `${this.path}/${this.btnPlayUrl}`;
    } else {
      this.playing = true;
      this.btnPlayerUrl = `${this.path}/${this.btnPauseUrl}`;
      this.playAudio();

      const p = this.updateProgressBar.bind(this);
      this.player = setInterval(p, 1000);
    }

  }

  playAudio() {
    this.audio.currentTime = this.currentTime;
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  updateProgressBar() {
    this.currentTime = Math.floor(this.audio.currentTime);
    this.progressState = (this.audio.currentTime / this.audio.duration) * 100;
    if (this.progressState === 100) {
        clearInterval(this.player);
        this.btnPlayerUrl = `${this.path}/${this.btnPlayUrl}`;
        this.currentTime = 0;
        this.playing = false;
      }
  }


  next() {
    this.currentId++;
    if (this.currentId >= this.songs.length) {
      this.currentId = 0;
    }
    this.audio.src = this.songs[this.currentId].srcURL;
    this.audio.play();
  }

  prev() {
    this.currentId--;
    if (this.currentId <= 0) {
      this.currentId = 0;
    }
    this.audio.src = this.songs[this.currentId].srcURL;
    this.audio.play();
  }

}
