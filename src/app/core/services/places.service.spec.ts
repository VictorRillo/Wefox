import { TestBed } from '@angular/core/testing';

import { environment } from '../.././../environments/environment';
import { PlacesService } from './places.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PlaceI} from "../../shared/models/place.model";
import {responseHttpInterceptorProvider, ResponseInterceptor} from "../interceptor/response-interceptor";

fdescribe('PlacesService', () => {
  let service: PlacesService;
  let httpMock: HttpTestingController;
  let interceptor: ResponseInterceptor;

  let places: PlaceI[] = [
    {
      "id": 1,
      "title": "Madrid",
      "content": "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.",
      "lat": "40.41678",
      "long": "-3.70379",
      "image_url": "https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg",
      "created_at": "2020-04-24T11:43:34.020Z",
      "updated_at": "2020-04-24T11:43:34.020Z"
    },
    {
      "id": 2,
      "title": "Barcelona",
      "content": "Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits.",
      "lat": "41.3851",
      "long": "2.1734",
      "image_url": "https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg",
      "created_at": "2020-04-24T11:43:34.047Z",
      "updated_at": "2020-04-24T11:43:34.047Z"
    }];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [responseHttpInterceptorProvider, ResponseInterceptor]
    });
    service = TestBed.inject(PlacesService);
    httpMock = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(ResponseInterceptor);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should send a GET request and return a Place list', (done) => {
    service.getAll().subscribe({
        next: (places: PlaceI[]) => { expect(places).toBeDefined(); done(); },
        error: (error) => { fail(error.message) }
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(places);
  });

  it('getAll should send a GET request and return a 404 error', (done) => {
    service.getAll().subscribe({
        next: (places) => { fail('The request is supposed to throw an error') },
        error: (error) => {expect(error.statusText).toBe('Failed'); done();}
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(null, { status: 404, statusText: 'Failed'});
  });

  it('get should send a GET request and return a single Place', (done) => {
    service.get(places[0].id).subscribe({
      next: (place: PlaceI) => { expect(place).toBeDefined(); done(); },
      error: (error) => { fail(error.message) }
    }
    );

    const testRequest = httpMock.expectOne(`${environment.places_api_url}/${places[0].id}`);
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(places[0]);
  });

  it('get should send a GET request and return a 404 error', (done) => {
    service.get(places[0].id).subscribe({
        next: (place) => { fail('The request is supposed to throw an error') },
        error: (error) => {expect(error.statusText).toBe('Failed'); done();}
      }
    );

    const testRequest = httpMock.expectOne(`${environment.places_api_url}/${places[0].id}`);
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(null, { status: 404, statusText: 'Failed'});
  });

  it('create should send a POST request and return the newly Place', (done) => {
    service.create(places[0]).subscribe({
        next: (place: PlaceI) => { expect(place).toBeDefined(); expect(place).toEqual(places[0]); done(); },
        error: (error) => { fail(error.message) }
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('POST');
    testRequest.flush(places[0]);
  });

  it('create should send a POST request and return a 404 error', (done) => {
    service.create(places[0]).subscribe({
        next: (place) => { fail('The request is supposed to throw an error') },
        error: (error) => {expect(error.statusText).toBe('Failed'); done();}
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('POST');
    testRequest.flush(null, { status: 404, statusText: 'Failed'});
  });

  it('update should send a PUT request and return the newly Place', (done) => {
    service.update(places[0]).subscribe({
        next: (place: PlaceI) => { expect(place).toBeDefined(); expect(place).toEqual(places[0]); done(); },
        error: (error) => { fail(error.message) }
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('PUT');
    testRequest.flush(places[0]);
  });

  it('update should send a PUT request and return a 404 error', (done) => {
    service.update(places[0]).subscribe({
        next: (place) => { fail('The request is supposed to throw an error') },
        error: (error) => {expect(error.statusText).toBe('Failed'); done();}
      }
    );

    const testRequest = httpMock.expectOne(environment.places_api_url);
    expect(testRequest.request.method).toBe('PUT');
    testRequest.flush(null, { status: 404, statusText: 'Failed'});
  });

  it('delete should send a DELETE request and return the newly Place', (done) => {
    service.delete(places[0].id).subscribe({
        next: (response) => { expect(response).toBeNull(); done(); },
        error: (error) => { fail(error.message) }
      }
    );

    const testRequest = httpMock.expectOne(`${environment.places_api_url}/${places[0].id}`);
    expect(testRequest.request.method).toBe('DELETE');
    testRequest.flush(null);
  });

  it('delete should send a DELETE request and return a 404 error', (done) => {
    service.delete(places[0].id).subscribe({
        next: (place) => { fail('The request is supposed to throw an error') },
        error: (error) => {expect(error.statusText).toBe('Failed'); done();}
      }
    );

    const testRequest = httpMock.expectOne(`${environment.places_api_url}/${places[0].id}`);
    expect(testRequest.request.method).toBe('DELETE');
    testRequest.flush(null, { status: 404, statusText: 'Failed'});
  });
});
