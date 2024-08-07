import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';

import { CountRoutes } from './count.router';

@NgModule({
  imports: [
    CommonModule,
    CountRoutes
  ],
  declarations: [CountComponent],
  providers: [],
})
export class CountModule {}
