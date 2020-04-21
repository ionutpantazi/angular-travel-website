import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NgbCarouselConfig]
})

export class ContentComponent implements OnInit {
  
  onClickMe(x,y,e: any) {
    mapboxgl.accessToken = 'API KEY';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [x,y],
      zoom: 17
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();
    map.jumpTo({
      center: [x, y],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
      new mapboxgl.Popup({ closeOnClick: false }).setHTML(
        '<h6>'+e.target.textContent+'</h6>'
        ).setLngLat([x, y]).addTo(map);
        
      
  }

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = false;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {
    mapboxgl.accessToken = 'API KEY';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.2449378, 51.7517371],
      zoom: 11.15
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();
  }
}
