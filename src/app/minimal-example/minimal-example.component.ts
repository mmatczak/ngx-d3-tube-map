import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as d3TubeMap from 'd3-tube-map';

@Component({
  selector: 'app-minimal-example',
  templateUrl: './minimal-example.component.html'
})
export class MinimalExampleComponent implements OnInit {

  ngOnInit() {
    const container = d3.select('#tube-map-minimal');
    const width = 400;
    const height = 200;
    const map = d3TubeMap.tubeMap()
      .width(width)
      .height(height)
      .margin({
        top: 20,
        right: 120,
        bottom: 40,
        left: 100,
      });
    d3.json('assets/test.json').then(data => {
      container
        .datum(data).call(map);
    });
  }

}
