import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user'
import { environment } from '../environments/environments.prod';
import { Data } from '@angular/router';

@Injectable()
export class SvvcService {

  url = "./assets/db.json";

  constructor(private http: HttpClient) { }


  getUserData() {
   return this.http.get(this.url);
  }

  postUserData(data:any){
    return this.http.post<any[]>(this.url, data)
  }

  create(params: any) {
    return this.http.post<Data[]>(this.url, params);
}

}

