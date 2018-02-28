import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRouting} from './user.routing';
import {UserComponent} from './user.component';
import {UserServices} from './user.services';

@NgModule({
    imports : [CommonModule, UserRouting],
    declarations : [UserComponent],
    providers :[UserServices]
})
export class UserModule{}