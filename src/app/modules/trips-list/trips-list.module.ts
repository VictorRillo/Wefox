import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripsListComponent} from "./trips-list.component";
import {TripsTableModule} from "../../shared/components/trips-table/trips-table.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {RandomTripModule} from "../../shared/components/random-trip/random-trip.module";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [TripsListComponent],
  imports: [
    CommonModule,
    TripsTableModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    RandomTripModule,
    MatFormFieldModule
  ],
  exports: [TripsListComponent]
})
export class TripsListModule { }
