import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripsListComponent} from "./modules/trips-list/trips-list.component";

const routes: Routes = [
  {path: 'list', component: TripsListComponent },
  {path: '', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
