import { BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting} from './app.routing';
import {PagesModule} from './pages/page.module';
import {PageNotFoundComponent} from './pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,HttpModule,AppRouting
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
