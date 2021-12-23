import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateErrorPipe} from "./translate-error.pipe";



@NgModule({
  declarations: [TranslateErrorPipe],
  imports: [
    CommonModule
  ],
  exports: [TranslateErrorPipe]
})
export class TranslateErrorPipeModule { }
