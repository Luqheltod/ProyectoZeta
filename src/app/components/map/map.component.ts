import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  map : string = "assets/img/habitacion1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
