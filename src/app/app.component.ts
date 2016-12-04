import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AppProfileService } from './service/app.auth.service';
import { Auth0HttpService } from './service/app.authHttp.service';
import { HttpService } from './service/app.http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userform: FormGroup;


  constructor(private _formBuilder: FormBuilder, private app_auth: AppProfileService, 
          private auth0: Auth0HttpService, private _httpservice: HttpService) { }

  public ngOnInit() {
    this.userform = this._formBuilder.group({
      text: ['', Validators.required]
    });
  }

  public postAtweet() {
    this._httpservice.postTweet(this.app_auth.user._id, this.createTweet(this.userform.value.text))
      .subscribe((body) => {

        this._httpservice.getFil(this.app_auth.user._id)
          .subscribe((datas) => {
            this.app_auth.user.tweets = datas.body.userTweets.reverse();
            this.app_auth.user.retweets = datas.body.userRetweets.reverse();
          }, (error) => console.log(' error get fil ' + error));
      }, (error) => console.log('error post tweet ' + error));
    this.resetForm();
  }

  public createTweet(text) {
    return {
      date: Date.now,
      text: text
    };
  }

  public resetForm() {
    this.userform.reset();
  }
}


