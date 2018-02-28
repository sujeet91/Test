import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes:Routes=[
    {path:'', component :UserComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UserRouting{}