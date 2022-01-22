import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';
import { Papiro } from './papiro';
import { PapiroService } from './papiro.service';

@Component({
  selector: 'app-papiro',
  templateUrl: './papiro.component.html',
  styleUrls: ['./papiro.component.css']
})
export class PapiroComponent  {

  
  globals: Globals;
  constructor( globals: Globals) {  this.globals = globals;}
  
 

  

}
