import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  url= 'assets/prefernce.json';
  myData() {
    return this.http.get(this.url);
  }
}
