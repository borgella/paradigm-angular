import { Component } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';
import { HttpService } from '../../service/app.http.service';

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

    public constructor(private auth_profil: AppProfileService, private _auth0: Auth0HttpService, private _httpservice: HttpService) {
        this.auth_profil.setProfile(false);
        this._httpservice.getAbonnements(this.auth_profil.getUserId())
            .subscribe( (data) => {
                this.auth_profil.user.setSubscribers(data.body);
            }, (error) => console.log('we will take care of the get abonnements error'));
    }

    public unSubscribeToUser(abonne) {
        this._httpservice.deleteAbonnement(this.auth_profil.getUserId(), abonne._id)
            .subscribe((data) => {
                this._httpservice.getAbonnements(this.auth_profil.getUserId())
                    .subscribe( (datas) => {
                        this.auth_profil.user.setAbonnements(datas.body);
                    }, (error) => console.log('we will take care of delete get abonnements error'));

            }, (error) => console.log('we will take care of delete abonnements error'));
    }
}
