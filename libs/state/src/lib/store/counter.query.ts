import { Injectable } from '@angular/core';

import { Query } from '@datorama/akita';

import { CounterStore, Counter } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<Counter> {
  constructor(protected override store: CounterStore) {
    super(store);
  }

  selectCount$ = this.select(state => state.value);
}