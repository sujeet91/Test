import {NgModule} from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import {LoginComponent} from './login.component';
import {LoginRouting} from './login.routing';
import {LoginServices} from './login.services';

@NgModule({
    imports:[CommonModule, LoginRouting,FormsModule],
    declarations:[LoginComponent],
    providers:[LoginServices]
})

export class LoginModule {}