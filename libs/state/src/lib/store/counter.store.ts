import { Injectable } from '@angular/core';

import { Store, StoreConfig } from '@datorama/akita';

export interface Counter {
  value: number;
}

export function createInitialState(): Counter {
  return {
    value: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<Counter> {
  constructor() {
    super(createInitialState());
  }
}