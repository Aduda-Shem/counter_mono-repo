import { Route, RouterModule } from '@angular/router';

import { CountComponent } from './count/count.component';
import { NgModule } from '@angular/core';

export const COUNT_ROUTES: Route[] = [
	{
		path: '',
		component: CountComponent,
		pathMatch: 'full',
	}
];

@NgModule({
	imports: [RouterModule.forChild(COUNT_ROUTES)],
	exports: [RouterModule]
})

export class CountRoutes { }
