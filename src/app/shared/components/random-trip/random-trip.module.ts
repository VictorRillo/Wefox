import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RandomTripComponent} from "./random-trip.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [RandomTripComponent],
  imports: [
    CommonModule,
    LeafletModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [RandomTripComponent]
})
export class RandomTripModule { }
