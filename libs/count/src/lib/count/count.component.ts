import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { CounterQuery } from '../store/counter.query';
import { CounterService } from '../store/counter.service';

@Component({
  selector: 'counter-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private countQuery: CounterQuery,
    private countService: CounterService
  ) {
    this.count$ = this.countQuery.selectCount$;
  }

  ngOnInit() {
    this.countService.init().subscribe();
  }

  increment() {
    this.countService.increment().subscribe();
  }
}