import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePlateComponent }   from './home-plate/home-plate.component';

const routes: Routes = [
  { path: '', redirectTo: '/homeplate', pathMatch: 'full' },
  { path: 'homeplate', component: HomePlateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
