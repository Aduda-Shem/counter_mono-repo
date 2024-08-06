import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CounterStore } from './counter.store';
import { Counter } from './counter.state';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<Counter> {
  constructor(protected override store: CounterStore) {
    super(store);
  }

  selectCount$ = this.select('value');
}


