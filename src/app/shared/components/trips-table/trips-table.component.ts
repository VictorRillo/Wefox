import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {PlaceI} from "../../models/place.model";
import {T} from "@angular/cdk/keycodes";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {TranslateService, TranslationChangeEvent} from "@ngx-translate/core";

@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss']
})
export class TripsTableComponent implements OnInit, AfterViewInit {
  @Input()
  get places(): PlaceI[] {
    return this._places
  }

  set places(places: PlaceI[]) {
    if (places) {
      this._places = places;
      this.dataSource = new MatTableDataSource(this.places);
      this.translateTable();
      this.dataSource.sort = this.sort;
    }
  }

  private _places: PlaceI[] = [];

  @Output() onEdit = new EventEmitter<PlaceI>();
  @Output() onDelete = new EventEmitter<PlaceI>();

  public displayedColumns: string[] = ['title', 'created_at', 'updated_at', 'tool'];
  public dataSource: MatTableDataSource<PlaceI>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.translateTable();
    });
  }

  translateTable() {
    this.paginator._intl.itemsPerPageLabel = this.translateService.instant('table.items-per-page');
    this.paginator._intl.firstPageLabel = this.translateService.instant('table.first-page');
    this.paginator._intl.lastPageLabel = this.translateService.instant('table.last-page');
    this.paginator._intl.nextPageLabel = this.translateService.instant('table.next-page');
    this.paginator._intl.previousPageLabel = this.translateService.instant('table.previous-page');
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editField(place: PlaceI) {
    this.onEdit.emit(place);
  }

  deleteField(place: PlaceI) {
    this.onDelete.emit(place);
  }

}
