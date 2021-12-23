import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlacesService} from "../../core/services/places.service";
import {Observable, Subscription, switchMap, take} from "rxjs";
import {PlaceI} from "../../shared/models/place.model";
import {MatDialog} from "@angular/material/dialog";
import {EditTripDialogComponent} from "../edit-trip-dialog/edit-trip-dialog.component";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  public places!: Observable<PlaceI[]>;

  constructor(private placesService: PlacesService, public dialog: MatDialog) { }

  ngOnInit(): void {
   this.getPlaces();
  }

  getPlaces() {
    this.places = this.placesService.getAll();
  }

  handleOnDelete(place: PlaceI) {
     this.placesService.delete(place.id).pipe(take(1)).subscribe(() => this.getPlaces());
  }

  handleOnAdd() {
    this.dialog.open(EditTripDialogComponent, {
      minWidth: "700px",
      maxWidth: "1000px",
      width: "50vw",
      height: "auto",
      data: {title: 'edit-trip-dialog.dialog-add-title'}
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.placesService.create(result).pipe(take(1)).subscribe(() => this.getPlaces());
      }
    });
  }

  handleOnEdit(place: PlaceI) {
    this.dialog.open(EditTripDialogComponent, {
      minWidth: "700px",
      maxWidth: "1000px",
      width: "50vw",
      height: "auto",
      data: {place: place, title: 'edit-trip-dialog.dialog-edit-title'}
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        let newPlace = {...place, ...result};
        this.placesService.update(newPlace).pipe(take(1)).subscribe(() => this.getPlaces());
      }
    });
  }

}
