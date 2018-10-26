import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]){
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('https://app-angular-5961d.firebaseio.com/data.json',
            servers,
            {headers: headers});
    }
    
    getServers() {
        return this.http.get('https://app-angular-5961d.firebaseio.com/data.json')
        .map(res =>{
           const data =  res.json();
           for (const server of data) {
               server.name = server.name;
           }
           return data;
        } )
        ;
    }

    getAppName() {
        return this.http.get('https://fetra-ng-http.firebaseio.com/data/appName.json')
        .map(
            (res => {
                return res.json();
            }
        )
    );
    }

}