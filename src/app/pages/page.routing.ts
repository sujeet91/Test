import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import {PageComponent} from './page.component';
import { ClassStmt } from '@angular/compiler/src/output/output_ast';

const routes:Routes=[    
      {
        path: '',
        component:PageComponent,
        children: [               
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          {path :'user', loadChildren : './users/user.module#UserModule'}
          
        ]
      },
      {
        path : 'login',
        loadChildren : 'app/pages/login/login.module#LoginModule'
      }
      //{path:'user',loadChildren : './users/user.module#UserModule'}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PageRouting{}