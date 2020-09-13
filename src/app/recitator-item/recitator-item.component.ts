import { Component, OnInit, Input } from '@angular/core';
import { Recitator } from 'src/models/recitator.model';

@Component({
  selector: 'app-recitator-item',
  templateUrl: './recitator-item.component.html',
  styleUrls: ['./recitator-item.component.scss']
})
export class RecitatorItemComponent implements OnInit {

  @Input() recitator: Recitator;

  constructor() { }

  ngOnInit() {
  }

}
