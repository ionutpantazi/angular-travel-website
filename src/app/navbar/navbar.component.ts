import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll')
  checkScroll() {
    document.getElementById("navbar").style.top = "0px";
  }
  constructor() { }
  ngOnInit(): void {
  }
}