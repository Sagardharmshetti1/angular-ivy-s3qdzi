import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SvvcService {

  constructor(private http: HttpClient) { }

  urlpath : string = "/assets/db.json"

  getUserData() {
    return this.http.get<any>(this.urlpath);
  }

  postUserData(data: any) {
    return this.http.post<any>(this.urlpath, data);
  }

}