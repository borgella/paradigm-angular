import { Component } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { SuggestionsComponent } from '../suggestions/suggestions.component';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    providers: [SuggestionsComponent]
})
export class AccueilComponent {
    constructor(private auth_profil: AppProfileService) {
        this.auth_profil.setProfile(true);
    }
}