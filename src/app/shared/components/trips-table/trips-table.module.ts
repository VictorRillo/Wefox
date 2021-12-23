import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripsTableComponent} from "./trips-table.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [TripsTableComponent],
    imports: [
        CommonModule,
        TranslateModule,
        MatIconModule,
        MatInputModule,
        RouterModule
    ],
  exports: [TripsTableComponent]
})
export class TripsTableModule { }
