import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Counter, createInitialState } from './counter.state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends EntityStore<Counter> {
  constructor() {
    super(createInitialState());
  }
}
