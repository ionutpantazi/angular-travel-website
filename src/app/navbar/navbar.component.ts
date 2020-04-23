import { Component, OnInit, HostListener } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll')
  checkScroll() {
    if (window.pageYOffset<200) {
      document.getElementById("navbar").style.top = "-100px";
      document.getElementById("navbar").style.visibility = "hidden";
    } else {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.visibility = "visible";
    }
  }
  constructor() { }
  ngOnInit(): void {
  }
}
