import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';
import { Election } from '../classes/election';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.scss']
})
export class ElectionListComponent implements OnInit {

  notification = new Notification();
  electionContent: Election[];

  pageEvent: PageEvent = { previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: 100 };
  pageLength = 100;

  constructor() {
    this.notification.type = 'error';
    this.notification.message = 'An error has occured. Please alter request and try again.';
  }

  ngOnInit(): void {
    // mock data
    this.electionContent = [
      {
        id: 1,
        name: 'pet names',
        startDateUtc: '2020-01-01 00:00:00',
        duration: 30,
        type: 'single'
      },
      {
        id: 2,
        name: 'Biden vs Trump',
        startDateUtc: '2020-01-02 00:00:00',
        duration: 60,
        type: 'ranked'
      },
      {
        id: 3,
        name: 'cookie bakeoff',
        startDateUtc: '2020-04-01 00:00:00',
        duration: 60,
        type: 'ranked'
      },
      {
        id: 4,
        name: 'star trek vs star wars',
        startDateUtc: '2020-02-12 00:00:00',
        duration: 120,
        type: 'single'
      },
      {
        id: 5,
        name: 'ketchup vs katchup',
        startDateUtc: '2020-03-05 00:00:00',
        duration: 90,
        type: 'single'
      }
    ];
  }

  updatePage($event) {
    this.pageEvent = $event;
  }

}
