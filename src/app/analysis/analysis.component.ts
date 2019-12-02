import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-cos',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})

export class AnalysisComponent implements OnInit {
  ngOnInit() {
    // first graph
    let bar = new CanvasJS.Chart('barContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Biggest Fanbase in Brazil',
        fontSize: 30
      },
      axisX: {
        interval: 1,
        labelAngle: -45
      },
      data: [{
        type: 'column',
        dataPoints: [
          // { y: 0, label: ' ' },
          { y: 8, label: 'LeBron James' },
          { y: 10, label: 'Kevin Duran' },
          { y: 9, label: 'Rose' },
          { y: 3, label: 'Magic Johnson' },
          { y: 8, label: 'James Harden' },
          { y: 14, label: 'Worm' },
          { y: 4, label: 'Carmelo Anthony' },
          { y: 3, label: 'Derrick Rose' },
          { y: 12, label: 'Stephen Curry' },
          { y: 5, label: 'Dwyane Wade' }
        ]
      }]
    });
    bar.render();

    // second graph
    let dataPoints = [];
    let y = 0;
    for ( var i = 0; i < 365; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y});
    }
    let chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Buscas pelo jogador Stephen Curry'
      },
      subtitles:[{
        text: 'Ao longo de um ano'
      }],
      data: [
      {
        type: 'line',
        dataPoints: dataPoints
      }]
    });

    chart.render();

    // //not displayed graph
    // let dataPoints = [];
    // let dpsLength = 0;
    // let chart = new CanvasJS.Chart('chartContainer',{
    //   exportEnabled: true,
    //   title:{
    //     text:'Worm mentions through time'
    //   },
    //   data: [{
    //     type: 'spline',
    //     dataPoints : dataPoints,
    //   }]
    // });

    // $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?',
    // function(data) {
    //   $.each(data, function(key, value){
    //     dataPoints.push({x: value[0], y: parseInt(value[1])});
    //   });
    //   dpsLength = dataPoints.length;
    //   chart.render();
    //   updateChart();
    // });

    // function updateChart() {
    //   $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=' + (dpsLength + 1) + '&ystart=' +
    //   (dataPoints[dataPoints.length - 1].y) + '&length=1&type=json&callback=?', function(data) {
    //   $.each(data, function(key, value) {
    //     dataPoints.push({
    //     x: parseInt(value[0]),
    //     y: parseInt(value[1])
    //     });
    //     dpsLength++;
    //   });

    //   if (dataPoints.length >  20 ) {
    //         dataPoints.shift();
    //       }
    //   chart.render();
    //   setTimeout(function(){updateChart()}, 1000);
    // });
    //   }
  }
}
