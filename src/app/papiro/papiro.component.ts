import { Component, OnInit } from '@angular/core';
import { Stage } from '../models/stage';
import { GameService } from '../services/game.service';
import { Globals } from './globals';
import { Papiro } from './papiro';
import { PapiroService } from './papiro.service';

@Component({
  selector: 'app-papiro',
  templateUrl: './papiro.component.html',
  styleUrls: ['./papiro.component.css']
})
export class PapiroComponent implements OnInit  {

  stage : Stage;
  
  globals: Globals;
  constructor( globals: Globals , private readonly gameService :GameService) {
      this.globals = globals;}
  
  
  ngOnInit(): void {
    
    this.gameService.getStageByIdStage(1).subscribe(stage =>  {
      this.stage = stage
    }
     );


  }
  
 

  

}
