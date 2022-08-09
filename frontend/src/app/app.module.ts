import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './view/home-page/home-page.component';
import {AddUsersPageComponent} from './view/add-users-page/add-users-page.component';
import {ViewUsersPageComponent} from './view/view-users-page/view-users-page.component';
import {HeaderComponent} from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddUsersPageComponent,
    ViewUsersPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
