import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CounterService {

  constructor(
    private counterStore: CounterStore,
    private firestore: AngularFirestore
  ) {}

  // value(number) loaded from Firestore
  init(): Observable<number> {
    return this.firestore.doc('counters/main').valueChanges().pipe(
      tap((data: any) => {
        if (data) {
          this.counterStore.update({ value: data.value });
        }
      })
    );
  }
  // Helper function to change number 
  private updat(newValue: number): Observable<void> {
    return from(this.firestore.doc('counters/main').set({ value: newValue }));
  }

  // Add on button trigger 
  add(): Observable<void> {
    const currentValue = this.counterStore.getValue().value;
    return this.updat(currentValue + 1);
  }

  // Subtract on button trigger
  subtract(): Observable<void> {
    const currentValue = this.counterStore.getValue().value;
    return this.updat(currentValue - 1);
  }
}
