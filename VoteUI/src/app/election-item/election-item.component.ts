import { Component, OnInit, Input } from '@angular/core';
import { Election } from '../classes/election';

@Component({
  selector: 'app-election-item',
  templateUrl: './election-item.component.html',
  styleUrls: ['./election-item.component.scss']
})
export class ElectionItemComponent implements OnInit {

  @Input() index: number;
  @Input() election: Election;

  constructor() { }

  ngOnInit(): void {
  }

}
