import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Cos } from './cos.model';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})

export class CosComponent implements OnInit {
  tt = false;
  cos: Cos[] = [];

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
      .then((cos: Cos[]) => {
        this.cos = cos;
      });
      this.tt = true;
      form.resetForm();
      }
    }
}
