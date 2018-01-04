import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getProfile(id){
  	return this.http.get("https://api.github.com/users/"+id).map(res => res.json());
  }

  getStars(id){
  	return this.http.get("https://api.github.com/users/"+id+"/starred").map(res => res.json());
  }

  getRepos(id){
  	return this.http.get("https://api.github.com/users/"+id+"/repos").map(res => res.json());
  }
}
