import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './pagenotfound.component';

export const routes:Routes=[    
    {
		path : '',
        loadChildren :'app/pages/login/login.module#LoginModule'         
    }, 
    {
        path : '',
        loadChildren : 'app/pages/page.module#PagesModule'
    },
    {
        path : 'signup',
        loadChildren : 'app/pages/registration/registration.module#RegistrationModule'
    }
    ,    
    {
	   path: '**',
	   component: PageNotFoundComponent 
    }	
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouting{}