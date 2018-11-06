import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  secondSide = false;
  constructor() { }

  ngOnInit() {
  }
  useSecondSide() {
      if (this.secondSide === true) {
        this.secondSide = false;
      }
      else {
      this.secondSide = true;
    }
  }
}
