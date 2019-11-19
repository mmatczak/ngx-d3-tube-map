import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as d3TubeMap from 'd3-tube-map';

@Component({
  selector: 'app-advanced-example',
  templateUrl: './advanced-example.component.html',
  styleUrls: ['./advanced-example.component.scss']
})
export class AdvancedExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const container = d3.select('#tube-map-advanced');
    const width = 1600;
    const height = 1000;
    const map = d3TubeMap
      .tubeMap()
      .width(width)
      .height(height)
      .margin({
        top: 20,
        right: 20,
        bottom: 40,
        left: 100,
      })
      .on('click', name => {
        console.log(name);
      });
    d3.json('assets/pubs.json').then(data => {
      container.datum(data).call(map);
      const svg = container.select('svg');
      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 6])
        .on('zoom', zoomed);
      const zoomContainer = svg.call(zoom);
      const initialScale = 2;
      const initialTranslate = [100, 200];
      zoom.scaleTo(zoomContainer, initialScale);
      zoom.translateTo(
        zoomContainer,
        initialTranslate[0],
        initialTranslate[1]
      );

      function zoomed() {
        svg.select('g').attr('transform', d3.event.transform.toString());
      }
    });
  }
}
