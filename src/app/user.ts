export class User {
    _id: string;
    first_name: string;
    last_name: string;
    followers: any[];
    subscribers: any[];
    retweets: any[];
    tweets: any[];
    suggestions: any[];
    id_token: any;

    public constructor(private aUser: any, private _token: any) {
        this._id = aUser._id;
        this.first_name = aUser.first_name;
        this.last_name = aUser.last_name;
        this.followers = aUser.followers;
        this.subscribers = aUser.subscribers;
        this.retweets = aUser.retweets.reverse();
        this.tweets = aUser.tweets.reverse();
        this.id_token = _token;
        this.loadStorage(aUser);
    }

    public setTweets(tweets) {
        this.tweets = tweets;
    }

    public setRetweets(retweets) {
        this.retweets = retweets;
    }

    public setFollowers(followers) {
        this.followers = followers;
    }

    public setSubscribers(subscribers) {
        this.subscribers = subscribers;
    }

    public setSuggestion(suggestions) {
        this.suggestions = suggestions;
    }

    public setToken(token) {
        this.id_token = token;
    }

    public loadStorage(user) {
        if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('id_token', this.id_token);

        } else { return; }
    }
}