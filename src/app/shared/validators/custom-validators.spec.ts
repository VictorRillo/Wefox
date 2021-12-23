import { CustomValidators } from './custom-validators';
import {FormControl} from "@angular/forms";

describe('CustomValidators', () => {
  it('should create an instance', () => {
    expect(new CustomValidators()).toBeTruthy();
  });

  it('onlyLettersValidator should return null', () => {
    const validator = CustomValidators.onlyLettersValidator();
    const control = new FormControl('input');
    control.setValue('asdasd');
    expect(validator(control)).toBeNull();
    control.setValue('sadasd sadasd');
    expect(validator(control)).toBeNull();
  });

  it('onlyLettersValidator should not return null', () => {
    const validator = CustomValidators.onlyLettersValidator();
    const control = new FormControl('input');
    control.setValue('213');
    expect(validator(control)).toEqual({onlyLettersValidator: {value: control.value}});
    control.setValue('dfsafd 213');
    expect(validator(control)).toEqual({onlyLettersValidator: {value: control.value}});
  });

  it('latValidor should return null', () => {
    const validator = CustomValidators.latValidator();
    const control = new FormControl('input');
    control.setValue(90);
    expect(validator(control)).toBeNull();
    control.setValue(-90);
    expect(validator(control)).toBeNull();
  });

  it('latValidor should not return null', () => {
    const validator = CustomValidators.latValidator();
    const control = new FormControl('input');
    control.setValue(91);
    expect(validator(control)).toEqual({latValidator: {value: control.value}});
    control.setValue(-91);
    expect(validator(control)).toEqual({latValidator: {value: control.value}});
  });

  it('lonValidator should return null', () => {
    const validator = CustomValidators.lonValidator();
    const control = new FormControl('input');
    control.setValue(180);
    expect(validator(control)).toBeNull();
    control.setValue(-180);
    expect(validator(control)).toBeNull();
  });

  it('lonValidator should not return null', () => {
    const validator = CustomValidators.lonValidator();
    const control = new FormControl('input');
    control.setValue(181);
    expect(validator(control)).toEqual({lonValidator: {value: control.value}});
    control.setValue(-181);
    expect(validator(control)).toEqual({lonValidator: {value: control.value}});
  });

});
