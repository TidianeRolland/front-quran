import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Recitator } from "src/models/recitator.model";
import { QuranService } from "../quran.service";

@Component({
  selector: "app-recitator-page",
  templateUrl: "./recitator-page.component.html",
  styleUrls: ["./recitator-page.component.scss"],
})
export class RecitatorPageComponent implements OnInit {
  recitators$: Observable<Recitator[]>;

  constructor(private quranServ: QuranService) {}

  ngOnInit() {
    this.recitators$ = this.quranServ.getRecitators();
  }
}
