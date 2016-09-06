import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = "22b70c75bc4838d7382d";
    private client_secret = "af96f056986897b96cd048ec3e96b3afc7a5ec20";

    constructor(private http:Http){
        this.username = 'ssvargass';
    }

    getUser(){
        return this.http.get('http://api.github.com/users/' + this.username + "?client_id="+this.client_id+"&client_secret="+this.client_secret)
            .map(res => res.json());   
    }

    getRepos(){
        return this.http.get('http://api.github.com/users/' + this.username + '/repos'  + "?client_id="+this.client_id+"&client_secret="+this.client_secret)
            .map(res => res.json());   
    }

    updateUser(username:string){
        this.username = username;
    }
}
