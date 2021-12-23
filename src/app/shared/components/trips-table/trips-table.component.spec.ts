import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsTableComponent } from './trips-table.component';
import {TranslateModule} from "@ngx-translate/core";
import {PLACES_MOCK, PLACES_MOCK_SORTED} from "../../../core/mocks/trips.mock";

describe('TripsTableComponent', () => {
  let component: TripsTableComponent;
  let fixture: ComponentFixture<TripsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ TripsTableComponent ]
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

  it ('should sort places', () => {
    const field = 'title';
    component.sortArray(field);
    expect(JSON.stringify(component.places)).toEqual(JSON.stringify(PLACES_MOCK_SORTED));
    expect(component.field).toEqual(field);
    expect(component.asc).toBeTrue();

    component.sortArray(field);
    expect(JSON.stringify(component.places)).toEqual(JSON.stringify(PLACES_MOCK));
    expect(component.field).toEqual(field);
    expect(component.asc).toBeFalse();
  });
});
