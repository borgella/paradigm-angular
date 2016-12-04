import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { provideAuth } from 'angular2-jwt';
import { HttpService } from './service/app.http.service';
import { AppProfileService } from './service/app.auth.service';
import { Auth0HttpService } from './service/app.authHttp.service';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { InscriptionFormComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AppUsersComponent } from './components/appusers/appusers.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { UserFeedComponent } from './components/userfeed/userfeed.component';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    InscriptionFormComponent,
    ConnexionComponent,
    AppUsersComponent,
    SuggestionsComponent,
    UserFeedComponent ,
    ProfilComponent
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
