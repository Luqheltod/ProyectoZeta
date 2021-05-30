import { Component, OnInit } from '@angular/core';
import { Papiro } from './papiro';

@Component({
  selector: 'app-papiro',
  templateUrl: './papiro.component.html',
  styleUrls: ['./papiro.component.css']
})
export class PapiroComponent implements OnInit {

  papiro: Papiro =
  {
    id:1, texto:"El texto uno que sea",idopciones:1,idmapa:1 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
