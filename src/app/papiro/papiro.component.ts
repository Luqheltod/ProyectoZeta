import { Component, OnInit } from '@angular/core';
import { Papiro } from './papiro';
import { PapiroService } from './papiro.service';

@Component({
  selector: 'app-papiro',
  templateUrl: './papiro.component.html',
  styleUrls: ['./papiro.component.css']
})
export class PapiroComponent implements OnInit {

  papiro: Papiro  ;
 
  constructor(private papiroService: PapiroService) { }

  ngOnInit(): void {
    this.papiro=  this.papiroService.getPapiro();
  }

}
