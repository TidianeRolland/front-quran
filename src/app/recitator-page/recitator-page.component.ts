import { Component, OnInit } from '@angular/core';
import { Recitator } from 'src/models/recitator.model';

@Component({
  selector: 'app-recitator-page',
  templateUrl: './recitator-page.component.html',
  styleUrls: ['./recitator-page.component.scss']
})
export class RecitatorPageComponent implements OnInit {

  recitators: Recitator[] = [
    new Recitator('KALB', 'Adil al-Kalbani', '../../assets/img/recitators/kalbani.png'),
    new Recitator('KALB', 'Adil al-Kalbani', '../../assets/img/recitators/kalbani.png'),
    new Recitator('KALB', 'Adil al-Kalbani', '../../assets/img/recitators/kalbani.png'),
    new Recitator('KALB', 'Adil al-Kalbani', '../../assets/img/recitators/kalbani.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
