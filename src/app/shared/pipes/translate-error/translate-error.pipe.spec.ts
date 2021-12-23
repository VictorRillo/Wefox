import { TranslateErrorPipe } from './translate-error.pipe';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {getTestBed, TestBed} from "@angular/core/testing";
import {Injector} from "@angular/core";

describe('TranslateErrorPipe', () => {

  let pipe:        TranslateErrorPipe;
  let translate: TranslateService;
  let injector:  Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateErrorPipe],
      imports: [
        TranslateModule.forRoot()
      ]
    });

    injector = getTestBed();
    translate = injector.get(TranslateService);
    pipe = new TranslateErrorPipe(translate);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('translateErrorPipe returns correct text', () => {
    expect(pipe.transform({required: true})).toEqual(translate.instant('error.input.required'));
    expect(pipe.transform({onlyLettersValidator: true})).toEqual(translate.instant('error.input.only-letters-validator'));
    expect(pipe.transform({lonValidator: true})).toEqual(translate.instant('error.input.lon-validator'));
    expect(pipe.transform({latValidator: true})).toEqual(translate.instant('error.input.lat-validator'));
  });
});
