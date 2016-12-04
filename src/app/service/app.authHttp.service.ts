import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth0HttpService {


    public constructor(private _auth0: AuthHttp) { }

    public signup(formValue) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/signup', JSON.stringify({
            first_name: formValue.firstname,
            last_name: formValue.lastname,
            email: formValue.email,
            password: formValue.password
        }))
         .map( res => res.json() || {});
    }

    public login(formValue) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({
            email: formValue.email,
            password: formValue.password
        }))
            .map(res => res.json() || {});
    }

    public getAbonnements(idUser) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser)
            .map(res => res.json() || {});
    }

    public getSuggestions(idUser) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/suggestions/' + idUser)
            .map( res => res.json() || {});
    }

    public putAbonnement(idUser, idFollower) {
        return this._auth0.put('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser + '/' + idFollower, {})
            .map(res => res.json || {});
    }

    public getFil(idUser) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/fil/' + idUser)
            .map(res => res.json() || {} );
    }

    public postTweet(idUser, tweet) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser, JSON.stringify(tweet))
            .map(res => res.json() || {});
    }

    public getAllTweets(idUser) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweets/' + idUser)
            .map(res => res.json() || {});
    }

    public getTweet(idUser, idTweet) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public deleteTweet(idUser, idTweet) {
        return this._auth0.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public getRetweets(idUser) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweets/' + idUser)
            .map(res => res.json() || {});
    }

    public putRetweet(idUser, tweet) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({ tweet }))
            .map(res => res.json() || {});
    }

    public deleteRetweet(idUser, idRetweet) {
        return this._auth0.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweet/' + idUser + idRetweet)
            .map(res => res.json() || {});
    }
}
