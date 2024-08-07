// import { Component } from '@angular/core'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'angular-monorepo';
// }



import { Component, OnInit } from '@angular/core';
import { CounterService } from '@angular-monorepo/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.init().subscribe();
  }
}