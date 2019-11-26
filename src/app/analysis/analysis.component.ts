import { Component, OnInit } from '@angular/core';

export interface Team {
  value: string;
  name: string;
}

@Component({
  selector: 'analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  configOption = false;
  value = '';
  constructor() { }

  ngOnInit() {
  }

  teams: Team[] = [
    {value: 'lakers', name: 'Lakers'},
    {value: 'gsw', name: 'Golden State'},
    {value: 'bulls', name: 'Chicago Bulls'}
  ];

  changes(event) {
    this.value = event.value;

    if (this.value === 'yes') {
      this.configOption = true;
    } else {
      this.configOption = false;
    }
  }

}
