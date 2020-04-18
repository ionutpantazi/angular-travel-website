import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ContentComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = false;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {
  }
}
