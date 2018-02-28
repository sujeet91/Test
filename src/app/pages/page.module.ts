import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {PageRouting} from './page.routing';
import {PageComponent} from './page.component';
import {HeaderComponent} from '../shared/header/header.component';
import {PopoverModule} from 'ng2-popover';

@NgModule({
    imports:[CommonModule,PageRouting,PopoverModule],
    declarations:[PageComponent,HeaderComponent]
})

export class PagesModule{}