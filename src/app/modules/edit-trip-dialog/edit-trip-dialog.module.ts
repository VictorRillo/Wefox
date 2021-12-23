import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditTripDialogComponent} from "./edit-trip-dialog.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [EditTripDialogComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [EditTripDialogComponent]
})
export class EditTripDialogModule { }
