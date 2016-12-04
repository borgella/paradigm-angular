import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AppProfileService {

    user: any;
    click_profile: boolean = false;

    public constructor() { }

    public authenticated() {
        return (typeof (this.user) === 'undefined') ? false : tokenNotExpired(this.user.token);
    }

    public logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('id_token');
        localStorage.clear();
    }

    public setUser(user) {
        this.user = user;
    }

    public setProfile(value) {
        this.click_profile = value;
    }

    public getSuggestionsLength() {
        return this.user.suggestions.length;
    }
}