import { Component, OnDestroy, OnInit } from '@angular/core';
import { isUndefined } from '@datorama/akita';
import { Stage } from 'src/app/models/stage';
import { GameService } from 'src/app/services/game.service';
import { StageQuery } from 'src/app/state/stage.query';
import { StageService } from 'src/app/state/stage.service';

@Component({
  selector: 'app-stage-container',
  templateUrl: './stage-container.component.html',
  styleUrls: ['./stage-container.component.css']
})
export class StageContainerComponent implements OnInit , OnDestroy{

  //Codigo del juego salvado, si usan f5 o refrescan la pagina usaremos el codigo para obtener los datos de su juego. 
 gameCode = localStorage.getItem("gameCode");


  stage : Stage ;

  constructor( private readonly stageQuery : StageQuery , private readonly stageService : StageService) { }
  ngOnDestroy(): void {
    localStorage.clear();
  }

  ngOnInit(): void {

    if(!isUndefined(this.gameCode)){
      //Si tiene gameCode vamos a cargar el juego directamente. 
      console.log("cargariamos el juego")
    }
    this.stageService.setStageAkita(1).subscribe();
    localStorage.setItem("gameCode" , "jajaj"); 
    this.stageQuery.selectStage.subscribe(stage=> this.stage = stage);
  }

}
