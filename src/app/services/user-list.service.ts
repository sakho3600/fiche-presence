import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  users = [];
  constructor(private http: Http) { }

  onCreate(user: any[]) {
    const headers = new Headers({'content-type':'application/json'});
    return this.http.post('localhost',
                          user,
                          {headers: headers})
  }

  onPush(user) {
    return this.users.push(user);
  }  
}
