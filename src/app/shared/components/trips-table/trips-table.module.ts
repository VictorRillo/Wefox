import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripsTableComponent} from "./trips-table.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [TripsTableComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [TripsTableComponent]
})
export class TripsTableModule { }
