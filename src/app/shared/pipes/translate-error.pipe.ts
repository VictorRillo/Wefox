import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'translateError'
})
export class TranslateErrorPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
