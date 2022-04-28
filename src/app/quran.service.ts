import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Surah } from 'src/models/surah.model';

@Injectable({
  providedIn: 'root'
})
export class QuranService {
  configUrl = 'http://localhost:5000/surahs';

  constructor(private http: HttpClient) { }

  getSurahs() {
    return this.http.get<Surah[]>(this.configUrl);
  }
}
