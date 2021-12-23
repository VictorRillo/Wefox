import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailComponent } from './trip-detail.component';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {responseHttpInterceptorProvider, ResponseInterceptor} from "../../core/interceptor/response-interceptor";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TripDetailComponent', () => {
  let component: TripDetailComponent;
  let fixture: ComponentFixture<TripDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      params: {
        tripNumber: '/'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        HttpClientTestingModule
      ],
      declarations: [ TripDetailComponent ],
      providers: [responseHttpInterceptorProvider, ResponseInterceptor, { provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
