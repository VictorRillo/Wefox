import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripsListComponent} from "./modules/trips-list/trips-list.component";
import {TripDetailComponent} from "./modules/trip-detail/trip-detail.component";

const routes: Routes = [
  {path: 'list', component: TripsListComponent },
  {path: 'detail/:tripNumber', component: TripDetailComponent },
  {path: '', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
