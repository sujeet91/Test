import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {DashboardRouting} from './dashboard.routing';
import {DashboardServices} from './dashboard.services';

@NgModule({
    imports:[CommonModule, DashboardRouting],
    declarations:[DashboardComponent],
    providers:[DashboardServices]
})

export class DashboardModule {}