import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { CounterQuery, CounterService } from '@angular-monorepo/state';


@Component({
  selector: 'counter-app',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  // Observable --> holds counter value
  count: Observable<number>;

  constructor(
    private countQuery: CounterQuery,
    private countService: CounterService
  ) {
    this.count = this.countQuery.selectCount$;
  }

  ngOnInit() {
    this.countService.init().subscribe();
  }

  // Method to add
  add() {
    this.countService.add().subscribe();
  }

  // Method to subtract
  subtract() {
    this.countService.subtract().subscribe();
  }
}
