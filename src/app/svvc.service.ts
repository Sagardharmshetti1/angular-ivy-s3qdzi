import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SvvcService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get<any>('assets/db.json');
  }

  postUserData(data: any) {
    return this.http.post<any>('assets/db.json', data);
  }

}