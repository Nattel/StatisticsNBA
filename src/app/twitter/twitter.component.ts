import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Twitter } from './twitter.model';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  tt = false;
  tweets: Twitter[] = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  searchTweet(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.appService.twitterSearch(form.value.tweet)
      .then((tweets: Twitter[]) => {
        this.tweets = tweets;
      });
      this.tt = true;
      form.resetForm();
      }
    }
}
