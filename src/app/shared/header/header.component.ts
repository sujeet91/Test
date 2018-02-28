import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserServices } from '../../pages/users/user.services';
import { LoginServices } from '../../pages/login/login.services';


@Component({
    selector : 'app-header',
    templateUrl: './header.component.html',
    styles:['.popover{width:250px !important}'],
    providers:[LoginServices],
})

export class HeaderComponent implements OnInit {
    userName: string;
    id:number;
    profile={};
    isProfile:any=false;
    constructor(private router:Router, private services:LoginServices){}
    ngOnInit() {
        this.userName = sessionStorage.getItem('userName');
        this.id=+sessionStorage.getItem('id');

        this.getProfile();

        
    }

    getProfile(){
        this.services.getProfile(this.id)
        .subscribe(data=>{
            if(data!=null && data.length>0){
                this.isProfile=true;
                this.profile=data;                
            }
        },error=>{
            console.log(error);
        })   
    }
    
    Logout(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
    
}