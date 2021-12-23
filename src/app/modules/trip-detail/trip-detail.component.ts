import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {PlaceI} from "../../shared/models/place.model";
import {PlacesService} from "../../core/services/places.service";
import {ActivatedRoute} from "@angular/router";
import {circle, icon, latLng, marker, polygon, tileLayer} from "leaflet";
import * as L from 'leaflet';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {
  public place!: PlaceI;
  public options: any;
  public layer: any;

  constructor(private placesService: PlacesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace() {
    this.placesService.get(this.route.snapshot.params['tripNumber']).pipe(take(1)).subscribe(place => {
      this.place = place;


      this.options = {
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 1, attribution: '...' })
        ],
        zoom: 6,
        center: latLng(+this.place.lat, +this.place.long)
      };
      this.layer = marker([ +this.place.lat, +this.place.long ], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });
    })
  }

}
