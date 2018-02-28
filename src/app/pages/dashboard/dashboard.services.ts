import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { JwtHelper, tokenNotExpired } from 'angular2-jwt'; 
import {HostName} from '../../shared/global/appsetting';
import {APIName} from './APIs';

@Injectable()
export class DashboardServices {
    private headers:Headers;
    private options:RequestOptions;
    

    constructor(private http: Http) {
        // Creates header for post requests.  
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });        
        this.options = new RequestOptions({ headers: this.headers });
    }

    countUser(): Observable<any> {
        return this.http.get(HostName.API_StartPoint+APIName.GET_UserCount)
            .map((responce: Response) => <any>responce.json())
            .catch((error:any)=>{
                return Observable.throw(error);
            })

    }

}