import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NgbCarouselConfig]
})

export class ContentComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 51.755336;
  lng = -1.2449378;
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = false;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    this.initializeMap()
  }
  private initializeMap() {
    this.buildMap()
  }
  buildMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 11.15,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.scrollZoom.disable();
  }
  onClickMe(x,y,e: any) {
    this.map.flyTo({
      center: [x, y],
      zoom: 17,
      essential: true
    });
    new mapboxgl.Popup()
      .setHTML('<h6>' + e.target.textContent + '</h6>' )
      .setLngLat([x, y])
      .addTo(this.map);
  }
}

