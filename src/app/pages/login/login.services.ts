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
export class LoginServices{
    private headers: Headers;
    private options: RequestOptions;
    private user: any = {};  

    constructor(private http: Http) {
        // Creates header for post requests.  
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });        
        this.options = new RequestOptions({ headers: this.headers });
    }

    public Login(model : any):Observable<any>{
        let param :any = {
            grant_type : 'password',
            username : model.username,
            password : model.password
        };
        let body :string =this.encodeParams(param);
        let URLs:string =HostName.API_StartPoint+APIName.Login;
        return this.http.post(URLs,body,this.options)
        .map((res:Response)=>{
            let body :any =res.json();
            // Sign in successful if there's an access token in the response.  
            if (typeof body.access_token !== 'undefined') {
                // Stores access token & refresh token.  
                //this.store(body);  
                return body;
            }
        }).catch((error:any)=>{
            return Observable.throw(error);
        });
    }

    public getProfile(id:number):Observable<any>{
        let param:any={
            id:id
        };
        let body :any =this.encodeParams(param); 
        let header = new Headers({ 'Content-Type': 'application/json' });
        let option = new RequestOptions({ headers: header });     
        return this.http.post(HostName.API_StartPoint+APIName.GetPrfile,id,option)
        .map((res:Response)=>{
            let body :any =res.json();           
                          
                return body;
            
        }).catch((error)=>{
            return Observable.throw(error);
        })
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