import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {responseHttpInterceptorProvider, ResponseInterceptor} from "../interceptor/response-interceptor";
import {CountryI} from "../../shared/models/country.model";

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;
  let interceptor: ResponseInterceptor;

  let countries = {"data": [
    {
      "name": "Afghanistan",
      "long": 65,
      "lat": 33
    },
    {
      "name": "Albania",
      "long": 20,
      "lat": 41
    } ]};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [responseHttpInterceptorProvider, ResponseInterceptor]
    });
    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(ResponseInterceptor);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should send a GET request and return a Country list', (done) => {
    service.getAll().subscribe({
        next: (places: CountryI[]) => { expect(places).toBeDefined(); done(); },
        error: (error) => { fail(error.message) }
      }
    );

    const testRequest = httpMock.expectOne('assets/data/countries.json');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(countries);
  });

});
