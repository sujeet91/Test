import {Component, OnInit} from '@angular/core';
import {DashboardServices} from './dashboard.services';

@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    constructor(private services:DashboardServices){}
    count : number=0;
    ngOnInit(){
        this.CountUser();
    }
    CountUser(){
        this.services.countUser()
        .subscribe(data=>{
            if(data!=null){
               this.count=data; 
            }
        },error=>{
            console.log(error);
        })
    }
}