import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../service/app.http.service';
import { AppProfileService } from '../../service/app.auth.service';
import { Auth0HttpService } from '../../service/app.authHttp.service';
import { User } from '../../user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionFormComponent implements OnInit {
  userform: FormGroup;
  user: User;
  constructor(private _formbuilder: FormBuilder, private _httpservice: HttpService, private auth_profil: AppProfileService,
    private auth0: Auth0HttpService) { }

  ngOnInit() {
    this.userform = this._formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  saveUser() {
    this._httpservice.signup(this.userform.value)
      .subscribe((response) => {
        this.user = new User(response.body, response.token);

        this._httpservice.getSuggestions(this.user._id)
          .subscribe((res) => {
            this.user.setSuggestion(res.body);
            this.auth_profil.setUser(this.user);
          }, (error) => console.log('take care of the inscription error later ' + error));

      });

    this.resetTheForm();
  }

  resetTheForm() {
    this.userform.reset();
  }

}
