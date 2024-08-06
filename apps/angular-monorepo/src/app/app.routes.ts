import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'test',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('@angular-monorepo/count').then((m) => m.CountComponent),
  },
];