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
export class UserServices{
    private headers: Headers;
    private options: RequestOptions;
    private user: any = {};  

    constructor(private http: Http) {
        // Creates header for post requests.  
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });        
        this.options = new RequestOptions({ headers: this.headers });
    }

    public getUser(id: number, token:string):Observable<any>{
        let param:any={
            
        };        
        this.options.headers.append('Authorization', token);
        let body:string = this.encodeParams(param);
        return this.http.post('http://localhost:61245/api/UserAPI/getuser/1',body,this.options)
        .map((res:Response)=>{
            let body :any =res.json();
            return body;
        }).catch((Error:any)=>{
            return Observable.throw(Error);
        });
    }

    public getAllUser():Observable<any>{
        let param:any={
            
        };      
        let body:string = this.encodeParams(param);
        return this.http.post(HostName.API_StartPoint+APIName.USER_GETALL,body,this.options)
        .map((res:Response)=>{
            let body :any =res.json();
            return body;
        }).catch((Error:any)=>{
            return Observable.throw(Error);
        });
    }


    private encodeParams(params: any): string {

        let body: string = "";
        for (let key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    }
}