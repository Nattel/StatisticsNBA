import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class AppService {

  constructor(private http: HttpClient, private router: Router) {}

  twitterSearch(tweet) {
      return this.http
        .get<{ tweets }>('http://localhost:3000/twitter/search/' + tweet)
        .toPromise()
        .then(res => {
          return res.tweets.statuses;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
