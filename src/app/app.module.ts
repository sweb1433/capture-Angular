import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ComponentnameComponent } from './componentname/componentname.component';
import { AfterLoginComponent } from './after-login/after-login.component';


@NgModule({
  declarations: [
    AppComponent,
    // ComponentnameComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
