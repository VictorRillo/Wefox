import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryI} from "../../shared/models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CountryI[]> {
    return this.http.get<CountryI[]>('assets/data/countries.json');
  }
}
