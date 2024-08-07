import { Injectable } from '@angular/core';

import { Query } from '@datorama/akita';

import { CounterStore, Counter } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<Counter> {
  selectCount$: any;

  constructor(protected override store: CounterStore) {
    super(store);
    this.selectCount$ = this.select(state => state.value);
  }
}