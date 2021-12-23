import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomValidators} from "../../shared/validators/custom-validators";

@Component({
  selector: 'app-edit-trip-dialog',
  templateUrl: './edit-trip-dialog.component.html',
  styleUrls: ['./edit-trip-dialog.component.scss']
})
export class EditTripDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, public  dialogRef: MatDialogRef<EditTripDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForms();
  }

  private initForms(): void {
    this.form = this.fb.group(({
      title: [this.data.place ? this.data.place.title : undefined, [Validators.required, CustomValidators.onlyLettersValidator()]],
      content: [this.data.place ? this.data.place.content : undefined, [Validators.required]],
      lat: [this.data.place ? this.data.place.lat : undefined, [Validators.required, CustomValidators.latValidator()]],
      long: [this.data.place ? this.data.place.long : undefined, [Validators.required, CustomValidators.lonValidator()]],
      image_url: [this.data.place ? this.data.place.image_url : undefined, [Validators.required]]
    }));
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
