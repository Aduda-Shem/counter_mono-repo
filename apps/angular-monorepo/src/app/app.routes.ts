import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgModule } from '@angular/core';

const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@angular-monorepo/count').then((m) => m.CountModule),
  },
  {
    path: 'test',
    component: NxWelcomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
