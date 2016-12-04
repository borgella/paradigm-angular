import { Component } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

    constructor(private auth_profil: AppProfileService, private _auth0: Auth0HttpService) { 
        this.auth_profil.setProfile(false);
    }

}
