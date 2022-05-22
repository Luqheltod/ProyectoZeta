import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { isUndefined } from '@datorama/akita';
import { Stage } from 'src/app/models/stage';
import { GameService } from 'src/app/services/game.service';
import { InstadeathDialogComponent } from 'src/app/shared/instadeath-dialog/instadeath-dialog.component';

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

  health : number = 150;
  energy : number = 200;
  stage : Stage ;

 


  constructor( private readonly stageQuery : StageQuery , 
    private readonly stageService : StageService,
    private readonly gameService :GameService,
    public dialog: MatDialog,
    ) { }
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


  energyModify(energyModifier : number){
    this.energy += energyModifier;
    if(this.energy<0){
      this.deathForOption(0)
    }
  }

  healthModify(healthModifier : number){
    this.health += healthModifier;
    if(this.health<0){
      this.deathForOption(0)
    }
  }

  deathForOption(idOptions : number) {
   
    this.gameService.getInstadeathInfo(idOptions).subscribe( instadeathInfo => {
      var message = instadeathInfo.message;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = "500px";
      dialogConfig.height = "541px";
      dialogConfig.panelClass = "instadeath-dialog-container";
      
      
      dialogConfig.data = {
        message: message,
        
      };
      this.dialog.open(InstadeathDialogComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe( resp =>{
        localStorage.clear();
        window.location.reload();
      })
    });


 
      
    
  

    

    




   

   

    console.log("saco el modal y solo puedes empezar el idOptions " + idOptions);
  }
}
