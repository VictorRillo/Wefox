import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripDialogComponent } from './edit-trip-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";

describe('EditTripDialogComponent', () => {
  let component: EditTripDialogComponent;
  let fixture: ComponentFixture<EditTripDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MatDialogModule, TranslateModule.forRoot()],
      declarations: [ EditTripDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTripDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', () => {
    const form = component.form;
    const title = form.get('title');
    const content = form.get('content');
    const lat = form.get('lat');
    const long = form.get('long');
    const image_url = form.get('image_url');

    title.setValue('Puerto Rico');
    content.setValue('Puerto Rico description');
    lat.setValue(90);
    long.setValue(-180);
    image_url.setValue('https://play-lh.googleusercontent.com/rONjMdP7gncm7jwHhAkJvPxlSw0eTN42iFY7Cs7SU4bC5o1MXdZy-0PX4ZwsgYU9Sg');

    expect(title.hasError('required')).toBeFalse();
    expect(content.hasError('required')).toBeFalse();
    expect(lat.hasError('required')).toBeFalse();
    expect(long.hasError('required')).toBeFalse();
    expect(image_url.hasError('required')).toBeFalse();

    expect(title.hasError('onlyLettersValidator')).toBeFalse();
    expect(lat.hasError('latValidator')).toBeFalse();
    expect(long.hasError('lonValidator')).toBeFalse();
  });

  it('form should not be valid', () => {
    const form = component.form;
    const title = form.get('title');
    const content = form.get('content');
    const lat = form.get('lat');
    const long = form.get('long');
    const image_url = form.get('image_url');

    expect(title.hasError('required')).toBeTruthy();
    expect(content.hasError('required')).toBeTruthy();
    expect(lat.hasError('required')).toBeTruthy();
    expect(long.hasError('required')).toBeTruthy();
    expect(image_url.hasError('required')).toBeTruthy();

    title.setValue('Puerto 12345');
    lat.setValue(91);
    long.setValue(-181);

    expect(title.hasError('onlyLettersValidator')).toBeTruthy();
    expect(lat.hasError('latValidator')).toBeTruthy();
    expect(long.hasError('lonValidator')).toBeTruthy();
  });
});
