import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HttpService } from '../../service/app.http.service';
import { AppProfileService } from '../../service/app.auth.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';
import { User } from '../../user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private user: User;
  private userform: FormGroup;
  private error: any;

  public constructor(private _formbuilder: FormBuilder, private _httpservice: HttpService, private auth_profil: AppProfileService,
    private _auth0: Auth0HttpService) { this.error = null; }

  public ngOnInit() {
    this.userform = this._formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public logTheUser() {
    this._httpservice.login(this.userform.value).subscribe((response) => {
      this.user = new User(response.body, response.token);

      this._httpservice.getAbonnements(this.user._id).subscribe((res) => {
        this.user.setSubscribers(res.body);
      }, (error) => console.log('we will take care of getAbonnements error later ' + error));

      this._httpservice.getSuggestions(this.user._id).subscribe((resp) => {
        this.user.setSuggestion(resp.body);
        this.auth_profil.setUser(this.user);
        this.auth_profil.setProfile(true);
      }, (error) => console.log(' new error to take getSuggestions error later'));

    }, (error) => { this.error = JSON.parse(error._body); });

    this.resetTheForm();
  }

  public getUserFormValidation(): boolean {
    return this.userform.valid;
  }

  private resetTheForm() {
    this.userform.reset();
  }

}
