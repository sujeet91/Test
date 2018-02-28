import {Component, OnInit} from '@angular/core';
import { ClassStmt } from '@angular/compiler/src/output/output_ast';
import {UserServices} from './user.services';
import { Title }     from '@angular/platform-browser';

@Component({
    selector : 'user-app',
    templateUrl : './user.component.html'
})
export class UserComponent implements OnInit{
    constructor(private service : UserServices, private titleService:Title){}
    users:any={};

    ngOnInit(){
        //this.getUser();
        this.getAllUser();
        this.titleService.setTitle("User UI");
    }

    getUser(){
        let token:string =sessionStorage.getItem('token');
        this.service.getUser(1,token)
        .subscribe(data=>{
            if(data!=null){
                this.users=data;
            }
        },error=>{
            console.log(error);
        })
    }

    getAllUser(){
        this.service.getAllUser()
        .subscribe(data=>{
            if(data!=null){
                this.users=data;
            }
        },error=>{
            console.log(error);
        })
    }
    
}