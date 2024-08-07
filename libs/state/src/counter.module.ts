import { NgModule, ModuleWithProviders } from '@angular/core';
import { CounterStore } from './lib/store/counter.store';
import { CounterQuery } from './lib/store/counter.query';

@NgModule({
  providers: [
    CounterStore,
    CounterQuery
  ]
})
export class CounterModule {
  static forRoot(): ModuleWithProviders<CounterModule> {
    return {
      ngModule: CounterModule,
      providers: [
        CounterStore,
        CounterQuery
      ]
    };
  }
}
