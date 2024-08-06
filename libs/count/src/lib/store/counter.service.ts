import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private counterDocRef: AngularFirestoreDocument;

  constructor(
    private counterStore: CounterStore,
    private firestore: AngularFirestore
  ) {
    this.counterDocRef = this.firestore.doc('counters/main');
  }

  init(): Observable<number> {
    return this.counterDocRef.valueChanges().pipe(
      tap((data: any) => {
        if (data) {
          this.counterStore.update({ value: data.value });
        }
      })
    );
  }

  increment(): Observable<void> {
    const currentValue = this.counterStore.getValue().value;
    const newValue = currentValue + 1;
    this.counterStore.update({ value: newValue });
    return from(this.counterDocRef.set({ value: newValue }));
  }
}