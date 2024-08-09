import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CounterStore } from '../store/counter.store';

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(
    private counterStore: CounterStore,
    private firestore: AngularFirestore
  ) {}

  init(): Observable<any> {
    return this.firestore.doc('counters/main').valueChanges().pipe(
      tap((data: any) => {
        if (data) {
          console.log("state data : ", data)
          this.counterStore.update({ value: data.value });
        }
      })
    );
  }

  private updateFirestore(newValue: number): Observable<void> {
    return from(this.firestore.doc('counters/main').set({ value: newValue }));
  }

  // adds counter state when triggered
  add(): Observable<void> {
    const currentValue = this.counterStore.getValue().value;
    this.counterStore.update({ value: currentValue + 1 });
    return this.updateFirestore(currentValue + 1);
  }

  // reduces counter state when triggered
  subtract(): Observable<void> {
    const currentValue = this.counterStore.getValue().value;
    this.counterStore.update({ value: currentValue - 1 });
    return this.updateFirestore(currentValue - 1);
  }
}