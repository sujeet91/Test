import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


import {RegistrationServices} from './registration.services';

@Component({
    selector : 'regiter-app',
    templateUrl : './registration.component.html',
    styleUrls :['./registration.component.css'],
   
})
export class RegistrationComponent implements OnInit{
    constructor(private services:RegistrationServices, private router:Router){}
    model={};
    ngOnInit(){

    }

    register(model : any){
        this.services.register(model)
        .subscribe(data=>{
            if(data){
                //this.notify.show("wewerwerw",{position:'top', duration:'2000', type: 'success'})
            }
        },error=>{
            console.log(error);
        })
    }
}