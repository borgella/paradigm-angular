import { Component, OnInit } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { HttpService } from '../../service/app.http.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';

@Component({
    selector: 'app-followers',
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

    public constructor(private _httpservice: HttpService, private auth: AppProfileService,  protected _auth0: Auth0HttpService) {}


    public ngOnInit() {
        this._httpservice.getFollowers(this.auth.user._id)
            .subscribe((res) => {
                this.auth.user.followers = res.body;
            });
    }

    public unSubscribeToUser(abonne) {
        this._httpservice.deleteAbonnement(this.auth.user._id, abonne._id)
            .subscribe((response) => {
                this._httpservice.getAbonnements(this.auth.user._id)
                    .subscribe((res) => {
                        this.auth.user.subscribers = res.body;
                    }, (error) => { console.error(error); });

                this._httpservice.getSuggestions(this.auth.user._id)
                    .subscribe((rep) => {
                        this.auth.user.suggestions = rep.body;
                    }, (error) => { console.error(error); });

            }, (error) => { console.error(error); } );
    }
}
