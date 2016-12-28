import { Component } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { HttpService } from '../../service/app.http.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {

  constructor(private _httpservice: HttpService, private auth: AppProfileService, protected _auth0: Auth0HttpService) { }

  public subscribeToUser(user: any) {
    this._httpservice.putAbonnement(this.auth.user._id, user._id).subscribe((res) => {

      this._httpservice.getAbonnements(this.auth.user._id).subscribe((response) => {
        this.auth.user.subscribers = response.body;
      }, (error) => console.log('we will take care of this error later ' + error));

      this._httpservice.getSuggestions(this.auth.user._id).subscribe((resp) => {
        this.auth.user.suggestions = resp.body;
      });

    }, (error) => console.log(' handle error event' + error ));
  }
}
