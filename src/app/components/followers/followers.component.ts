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

    private error: any;

    public constructor(private _httpservice: HttpService, private auth: AppProfileService, protected _auth0: Auth0HttpService) { }


    public ngOnInit() {
        this._httpservice.getFollowers(this.auth.user._id)
            .subscribe((res) => {
                this.auth.user.followers = res.body;
            });
    }

    public subscribeToUser(user) {
        this._httpservice.putAbonnement(this.auth.user._id, user._id).subscribe((res) => {

            this._httpservice.getAbonnements(this.auth.user._id).subscribe((response) => {
                this.auth.user.subscribers = response.body;
            }, (error) => console.log('we will take care of get abonnements error later ' + error));

            this._httpservice.getSuggestions(this.auth.user._id).subscribe((resp) => {
                this.auth.user.suggestions = resp.body;
            }, (error) => console.log('we will take care of get suggestions error later ' + error));

        }, (error) => { this.error = error; } );
    }

}
