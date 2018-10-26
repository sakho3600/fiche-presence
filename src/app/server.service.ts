import { Injectable } from "@angular/core";
// import { Http2SecureServer } from "http2";
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]){
           return this.http.post('https://fetra-ng-http.firebaseio.com/data.json', servers);
    }
    
}