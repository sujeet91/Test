import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'pages',
    templateUrl : './page.component.html'
})
export class PageComponent  implements OnInit{
    constructor(private _router :Router){}
    
    ngOnInit(){
        if(this._router.url==='/')
        this._router.navigate(['/dashboard']);
    }
    
}