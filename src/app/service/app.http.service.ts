import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

    constructor(private _http: Http) { }

    signup(formValue: any) {
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

    public login(formValue: any) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({
            email: formValue.email,
            password: formValue.password
        }), options)
            .map(res => res.json() || {});
    }

    public getAbonnements(idUser: string) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser , options)
            .map(res => res.json() || {});
    }

    public getSuggestions(idUser: string) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/suggestions/' + idUser, options)
            .map(res => res.json() || {});
    }

    public getFollowers(idUser: string) {
        let _headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: _headers});
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/followers/' + idUser, options)
            .map( res => res.json() || {});

    }

    public putAbonnement(idUser: string, idfollower: string) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http.put('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser + '/' + idfollower, options)
            .map(res => res.json() || {});

    }
    public deleteAbonnement(idUser: string, idfollewer: string) {
        let _headers = new Headers( {'Content-Type': 'application/json'} );
        let options = new RequestOptions( {headers: _headers});
        // tslint:disable-next-line:max-line-length
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/abonnements/' + idUser + '/' + idfollewer, options)
            .map( res => res.json() || {} );

    }

    public getFil(idUser: string) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/fil/' + idUser)
            .map(res => res.json() || {});
    }

    public postTweet(idUser: string, tweet: any) {
        let _headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: _headers});
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser, JSON.stringify(tweet), options)
            .map(res => res.json() || {});
    }

    public getAllTweets(idUser: string) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweets/' + idUser)
            .map(res => res.json() || {});
    }

    public getTweet(idUser: string, idTweet: string) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public deleteTweet(idUser: string, idTweet: string) {
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/tweet/' + idUser + '/' + idTweet)
            .map(res => res.json() || {});
    }

    public getRetweets(idUser: string) {
        return this._http.get('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweets/' + idUser)
            .map(res => res.json() || {});
    }

    public putRetweet(idUser: string, tweet: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('https://paradigmeinternetnode.herokuapp.com/users/login', JSON.stringify({ tweet }), options)
            .map(res => res.json() || {});
    }

    public deleteRetweet(idUser: string, idRetweet: string) {
        return this._http.delete('https://paradigmeinternetnode.herokuapp.com/utilisateurs/retweet/' + idUser + idRetweet)
            .map(res => res.json() || {});
    }

}

