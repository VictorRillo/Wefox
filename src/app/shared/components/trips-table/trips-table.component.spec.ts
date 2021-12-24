import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsTableComponent } from './trips-table.component';
import {TranslateModule} from "@ngx-translate/core";
import {PLACES_MOCK, PLACES_MOCK_SORTED} from "../../../core/mocks/trips.mock";
import {MatPaginator} from "@angular/material/paginator";

describe('TripsTableComponent', () => {
  let component: TripsTableComponent;
  let fixture: ComponentFixture<TripsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ TripsTableComponent, MatPaginator ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.places = PLACES_MOCK;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
