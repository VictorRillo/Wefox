import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListComponent } from './trips-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {responseHttpInterceptorProvider, ResponseInterceptor} from "../../core/interceptor/response-interceptor";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogModule} from "@angular/material/dialog";

describe('TripsListComponent', () => {
  let component: TripsListComponent;
  let fixture: ComponentFixture<TripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MatDialogModule],
      declarations: [ TripsListComponent ],
      providers: [responseHttpInterceptorProvider, ResponseInterceptor]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
