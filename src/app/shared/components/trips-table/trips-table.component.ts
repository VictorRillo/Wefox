import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlaceI} from "../../models/place.model";
import {T} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss']
})
export class TripsTableComponent implements OnInit {
  @Input() places: PlaceI[] = [];
  @Output() onEdit = new EventEmitter<PlaceI>();
  @Output() onDelete = new EventEmitter<PlaceI>();
  public headers: any[] = [
    {'title': 'table.city', "field": 'title'},
    {'title': 'table.creation-date', "field": 'created_at'},
    {'title': 'table.last-update-date', "field": 'updated_at'}
  ];
  public field: string;
  public asc: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  sortArray(field: string) {
    this.asc = field === this.field ? !this.asc : true;
    this.field = field;
    this.places.sort((a,b) => {
      if (!this.asc) {
        // @ts-ignore
        return b[field].localeCompare(a[field]);
      }else {
        // @ts-ignore
        return a[field].localeCompare(b[field]);
      }
    });
  }

  editField(place: PlaceI) {
    this.onEdit.emit(place);
  }

  deleteField(place: PlaceI) {
    this.onDelete.emit(place);
  }

}
