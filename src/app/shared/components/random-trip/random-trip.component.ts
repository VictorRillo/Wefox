import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {icon, latLng, marker, tileLayer} from "leaflet";
import {CountryService} from "../../../core/services/country.service";
import {CountryI} from "../../models/country.model";
import {take} from "rxjs";

@Component({
  selector: 'app-random-trip',
  templateUrl: './random-trip.component.html',
  styleUrls: ['./random-trip.component.scss']
})
export class RandomTripComponent implements OnInit {
  public options: any;
  public layer: any;
  public countries: CountryI[];
  public center: any;
  public country: CountryI;


  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.service.getAll().pipe(take(1)).subscribe(countries => {
      this.countries = countries;
      this.generateRandomTrip();
    });
  }

  generateRandomTrip() {
    let countryNumber = Math.floor(Math.random() * (241 - 0)) + 0;
    this.country = this.countries[countryNumber];
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 1, attribution: '...' })
      ],
      zoom: 6,
      center: latLng(+this.country.lat, +this.country.long)
    };
    this.layer = marker([ +this.country.lat, +this.country.long ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
    this.center = [+this.country.lat, +this.country.long];

  }

}
