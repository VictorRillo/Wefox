import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators {

  static onlyLettersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control && control.value) {
        const regexp = new RegExp(/^[a-zA-Z\s]*$/);
        if (regexp.test(control.value)) {
          return null;
        }
      }
      return {onlyLettersValidator: {value: control.value}};
    }
  }

  static latValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control && control.value) {
        if (isFinite(control.value) && Math.abs(control.value) <= 90) {
          return null;
        }
      }
      return {latValidator: {value: control.value}};
    }
  }

  static lonValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control && control.value) {
        if (isFinite(control.value) && Math.abs(control.value) <= 180) {
          return null;
        }
      }
      return {lonValidator: {value: control.value}};
    }
  }

}
