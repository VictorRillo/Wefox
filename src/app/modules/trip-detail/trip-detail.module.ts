import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripDetailComponent} from "./trip-detail.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";



@NgModule({
  declarations: [TripDetailComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    LeafletModule
  ],
  exports: [TripDetailComponent]
})
export class TripDetailModule { }
