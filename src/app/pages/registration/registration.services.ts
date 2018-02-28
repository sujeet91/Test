import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {HostName} from '../../shared/global/appsetting';
import {APIName} from './APIs';

@Injectable()
export class RegistrationServices{
    private headers:Headers;
    private options:RequestOptions;
    
    constructor(private http:Http){
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });        
        this.options = new RequestOptions({ headers: this.headers });
    }

    public register(model:any):Observable<any>{        
        let body :string =this.encodeParams(model);
        let URL:string =HostName.API_StartPoint+APIName.POST_RegisterUser;
        return this.http.post(URL,body,this.options)
        .map((res:Response)=>{
            let data:any=res.json();
            return data;
        }).catch((error:any)=>{
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
