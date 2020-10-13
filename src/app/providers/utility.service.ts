import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = 'https://api.spaceXdata.com/v3/launches?limit=100';
  queryParams = {};
  constructor(private http: HttpClient) { }

  getSpaceXInfo(filters?: any): Observable<any> {
    return this.http.get(this.url, {params: filters});
  }

  buildParams(type, value) {
    this.queryParams[type] = value;
    return this.queryParams;
  }
}
