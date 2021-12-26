import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomValidators} from "../../shared/validators/custom-validators";
import {icon, latLng, marker, tileLayer} from "leaflet";
import {take} from "rxjs";

@Component({
  selector: 'app-edit-trip-dialog',
  templateUrl: './edit-trip-dialog.component.html',
  styleUrls: ['./edit-trip-dialog.component.scss']
})
export class EditTripDialogComponent implements OnInit {

  public form: FormGroup;
  public options: any;
  public layer: any;
  public map: any;
  public showMap: boolean = false;

  constructor(private fb: FormBuilder, public  dialogRef: MatDialogRef<EditTripDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForms();
    this.getPlace();
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

  getPlace() {
    let lat = this.form.get('lat').value ? +this.form.get('lat').value : 40.4165;
    let long = this.form.get('long').value ? +this.form.get('long').value : -3.70256;

    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 2, attribution: '...' })
      ],
      zoom: 4,
      center: latLng(lat, long),
      maxBounds: [[84.67351256610522, -174.0234375], [-58.995311187950925, 223.2421875]]
    };

    if (this.form.get('lat').value && this.form.get('long').value) {
      this.layer = marker([lat, long], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });
    }
  }

  onMapClick(event: any) {
    this.form.controls['lat'].setValue(JSON.stringify(event.latlng.lat));
    this.form.controls['long'].setValue(JSON.stringify(event.latlng.lng));
    this.getPlace();
  }
}
