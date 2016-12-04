import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { provideAuth } from 'angular2-jwt';
import { HttpService } from './service/app.http.service';
import { AppProfileService } from './service/app.auth.service';
import { Auth0HttpService } from './service/app.authHttp.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, AppProfileService, Auth0HttpService, provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'Bearer',
      tokenName: 'id_token',
      tokenGetter: ( () => localStorage.getItem('id_token') ),
      globalHeaders: [{'Content-Type': 'application/json'}],
      noJwtError: true,
      noTokenScheme: true
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
