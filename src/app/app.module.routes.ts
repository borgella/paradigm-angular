
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionFormComponent } from './components/inscription/inscription.component';
import { ProfilComponent } from './components/profil/profil.component';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const ApplicationRoutes: Routes = [
    {
        path: '',
        component: InscriptionFormComponent
    },

    {
        path: 'connexion',
        component: ConnexionComponent
    },

    {
        path: 'component',
        component: AppComponent
    },

    {
        path: 'accueil',
        component: AccueilComponent
    },

    {
        path: 'profile',
        component: ProfilComponent
    }
];

export const TheRoutesModule: ModuleWithProviders = RouterModule.forRoot(ApplicationRoutes);
