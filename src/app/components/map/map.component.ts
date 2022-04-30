import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  locationImg : string ="assets/img/";

  @Input() flat : string;
  @Input() map : string ;

  constructor() { }

  ngOnInit(): void {
  }

}
