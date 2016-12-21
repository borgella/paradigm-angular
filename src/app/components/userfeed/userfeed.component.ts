import { Component, Input } from '@angular/core';
import { AppProfileService } from '../../service/app.auth.service';
import { HttpService } from '../../service/app.http.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';

@Component({
  selector: 'app-userfeed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css']
})
export class UserFeedComponent {

  @Input() showRetweet: string;

  constructor(private _httpservice: HttpService, private auth: AppProfileService,  protected _auth0: Auth0HttpService) { }

  public deleteTweet(tweet) {
    this._httpservice.deleteTweet(this.auth.user._id, tweet._id)
      .subscribe((response) => {
        this._httpservice.getFil(this.auth.user._id)
          .subscribe((res) => {
            this.auth.user.tweets = res.body.userTweets.reverse();
          });
      });
  }
}
