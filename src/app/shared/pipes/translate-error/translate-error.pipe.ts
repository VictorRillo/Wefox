import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'translateError'
})
export class TranslateErrorPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: any, ...args: unknown[]): string {
    console.log(value);
    let returnValue = null;
    if (value.required){
      returnValue = this.translate.instant('error.input.required')
    } else if(value.onlyLettersValidator){
      returnValue = this.translate.instant('error.input.only-letters-validator');
    } else if(value.lonValidator){
      returnValue =  this.translate.instant('error.input.lon-validator');
    } else if(value.latValidator){
      returnValue =  this.translate.instant('error.input.lat-validator');
    }
    return returnValue;
  }

}
