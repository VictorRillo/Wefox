import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripsTableComponent} from "./trips-table.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [TripsTableComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [TripsTableComponent]
})
export class TripsTableModule { }
