import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


import {RegistrationRouting} from './registration.routing';
import {RegistrationComponent} from './registration.component';
import {RegistrationServices} from './registration.services';

@NgModule({
    imports :[CommonModule,FormsModule,RegistrationRouting],
    declarations : [RegistrationComponent],
    providers:[RegistrationServices]
})

export class RegistrationModule{}