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
    return this.http.post('https://score-3fe54.firebaseio.com/data.json',
                          user,
                          {headers: headers})
  }

  onGet() {
    return this.http.get('https://score-3fe54.firebaseio.com/data.json')
                    .map(
                      (res) => {
                       const list = res.json();
                       return list ;
                      }
                    )
  }
  onPush(user) {
    return this.users.push(user);
  }  
}
