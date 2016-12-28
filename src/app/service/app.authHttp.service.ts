import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth0HttpService {


    public constructor(private _auth0: AuthHttp) { }

    public signup(formValue: any) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/signup', JSON.stringify({
            first_name: formValue.firstname,
            last_name: formValue.lastname,
            email: formValue.email,
            password: formValue.password
        }))
         .map( res => res.json() || {});
    }

    public login(formValue: any) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({
            email: formValue.email,
            password: formValue.password
        }))
            .map(res => res.json() || {});
    }

    public getAbonnements(idUser: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser)
            .map(res => res.json() || {});
    }

    public getSuggestions(idUser: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/suggestions/' + idUser)
            .map( res => res.json() || {});
    }

    public putAbonnement(idUser: string, idFollower: string) {
        return this._auth0.put('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser + '/' + idFollower, {})
            .map(res => res.json || {});
    }

    public getFil(idUser: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/fil/' + idUser)
            .map(res => res.json() || {} );
    }

    public postTweet(idUser: string, tweet: any) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser, JSON.stringify(tweet))
            .map(res => res.json() || {});
    }

    public getAllTweets(idUser: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweets/' + idUser)
            .map(res => res.json() || {});
    }

    public getTweet(idUser: string, idTweet: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public deleteTweet(idUser: string, idTweet: string) {
        return this._auth0.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public getRetweets(idUser: string) {
        return this._auth0.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweets/' + idUser)
            .map(res => res.json() || {});
    }

    public putRetweet(idUser: string, tweet: string) {
        return this._auth0.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({ tweet }))
            .map(res => res.json() || {});
    }

    public deleteRetweet(idUser: string, idRetweet: string) {
        return this._auth0.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweet/' + idUser + idRetweet)
            .map(res => res.json() || {});
    }
}
