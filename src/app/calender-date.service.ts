import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CalenderDateService {

  constructor(private http: HttpClient) { }

}
