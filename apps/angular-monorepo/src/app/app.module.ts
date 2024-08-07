import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from '@angular-monorepo/elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CounterModule } from '@angular-monorepo/state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    
    CounterModule.forRoot() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
