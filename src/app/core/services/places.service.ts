import { Injectable } from '@angular/core';
import {PlaceI} from "../../shared/models/place.model";
import { environment } from '../.././../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<PlaceI[]> {
    return this.http.get<PlaceI[]>(environment.places_api_url);
  }
  get(id: number): Observable<PlaceI> {
    return this.http.get<PlaceI>(`${environment.places_api_url}/${id}`);
  }
  create(place: PlaceI): Observable<PlaceI> {
    return this.http.post<PlaceI>(environment.places_api_url, place);
  }
  update(place: PlaceI): Observable<PlaceI> {
    return this.http.put<PlaceI>(`${environment.places_api_url}/${place.id}`, place);
  }
  delete(id: number): Observable<null> {
    return this.http.delete<null>(`${environment.places_api_url}/${id}`);
  }

}
