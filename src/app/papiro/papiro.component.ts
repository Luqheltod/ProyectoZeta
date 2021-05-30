import { Component, OnInit } from '@angular/core';
import { Papiro } from './papiro';
import {PAPIRO} from './papiro.json';
@Component({
  selector: 'app-papiro',
  templateUrl: './papiro.component.html',
  styleUrls: ['./papiro.component.css']
})
export class PapiroComponent implements OnInit {

  papiro: Papiro  ;
 
  constructor() { }

  ngOnInit(): void {
    this.papiro=  PAPIRO;
  }

}
