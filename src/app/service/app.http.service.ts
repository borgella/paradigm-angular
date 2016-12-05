import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

    constructor(private _http: Http) { }

    signup(formValue) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/users/signup', JSON.stringify({
            first_name: formValue.firstname,
            last_name: formValue.lastname,
            email: formValue.email,
            password: formValue.password
        }), options)
            .map(res => res.json() || {});
    }

    public login(formValue) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({
            email: formValue.email,
            password: formValue.password
        }), options)
            .map(res => res.json() || {});
    }

    public getAbonnements(idUser) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser , options)
            .map(res => res.json() || {});
    }

    public getSuggestions(idUser) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/suggestions/' + idUser, options)
            .map(res => res.json() || {});
    }

    public putAbonnement(idUser, idfollower) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.put('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser + '/' + idfollower, options)
            .map(res => res.json() || {});

    }
    public deleteAbonnement(idUser, idfollewer) {
        let _headers = new Headers( {'Content-Type': 'application/json'} );
        let options = new RequestOptions( {headers: _headers});
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/'+ idUser +'/'+idfollewer, options)
            .map( res => res.json() || {} );

    }

    public getFil(idUser) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/fil/' + idUser)
            .map(res => res.json() || {});
    }

    public postTweet(idUser, tweet) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: _headers});
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser, JSON.stringify(tweet), options)
            .map(res => res.json() || {});
    }

    public getAllTweets(idUser) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweets/' + idUser)
            .map(res => res.json() || {});
    }

    public getTweet(idUser, idTweet) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public deleteTweet(idUser, idTweet) {
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public getRetweets(idUser) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweets/' + idUser)
            .map(res => res.json() || {});
    }

    public putRetweet(idUser, tweet) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({ tweet }), options)
            .map(res => res.json() || {});
    }

    public deleteRetweet(idUser, idRetweet) {
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweet/' + idUser + idRetweet)
            .map(res => res.json() || {});
    }

}

