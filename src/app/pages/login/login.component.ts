import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServices} from './login.services';
import {UserModel} from '../../models/userModel';

@Component({
    selector : 'login',
    templateUrl :'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent {
    users:UserModel[];
    model={};
    constructor(private _router:Router, private _services: LoginServices){}
    login(model:any){        
        // let models:any={
        //     username:model.username,
        //     password:model.password
        // }
        // this._services.Login(models)
        // .subscribe(data=>{
        //     if(data!=null){
        //         sessionStorage.setItem('token',data.token_type+" "+data.access_token);
        //         sessionStorage.setItem('userName',data.userName);
        //         sessionStorage.setItem('id',data.id)
        //         this._router.navigate(['/dashboard']);            
        //     }
        // },error=>{
        //     if(error){
        //         console.log(error);
        //     }
        // })
        this._router.navigate(['/dashboard']); 
    }
}