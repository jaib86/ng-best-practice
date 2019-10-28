import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}

  goToTop(event) {
    event.preventDefault();
    window.scroll(0, 0);
  }
}
