import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Recitator } from "src/models/recitator.model";
import { Surah } from "src/models/surah.model";

@Injectable({
  providedIn: "root",
})
export class QuranService {
  configUrl = `${environment.API_URL}/surahs`;

  constructor(private http: HttpClient) {}

  getRecitators() {
    return this.http.get<Recitator[]>(`${environment.API_URL}/recitators`);
  }

  getSurahs() {
    return this.http.get<Surah[]>(this.configUrl);
  }

  getSurahURL(surahNo: number, recitator: string) {
    return `${environment.API_URL}/surah/${surahNo}/${recitator}`;
  }
}
