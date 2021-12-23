import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTripComponent } from './random-trip.component';
import {responseHttpInterceptorProvider, ResponseInterceptor} from "../../../core/interceptor/response-interceptor";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('RandomTripComponent', () => {
  let component: RandomTripComponent;
  let fixture: ComponentFixture<RandomTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, TranslateModule.forRoot() ],
      declarations: [ RandomTripComponent ],
      providers: [responseHttpInterceptorProvider, ResponseInterceptor]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
