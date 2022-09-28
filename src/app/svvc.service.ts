import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user'
import { environment } from '../environments/environments.prod';

@Injectable()
export class SvvcService {

  url = "./assets/db.json";

  constructor(private http: HttpClient) { }


  getUserData() {
    return this.http.get(this.url);
  }

  postUserData(data:any){
    return this.http.post(this.url, data)
  }

}

