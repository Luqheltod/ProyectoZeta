import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stage } from 'src/app/models/stage';
import { SnackBarRestComponent } from 'src/app/shared/snack-bar-rest/snack-bar-rest.component';
import { StageQuery } from 'src/app/state/stage.query';
import { Option } from 'src/app/models/option';
import { StageService } from 'src/app/state/stage.service';
import { GameService } from 'src/app/services/game.service';
import { RestInfo } from 'src/app/models/restInfo';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnChanges {

  disabled : boolean ;
  

  restInfo: RestInfo;  

  @Input() stage : Stage;

  @Output() healthModifier: EventEmitter<number> = new EventEmitter();
  @Output() energyModifier: EventEmitter<number> = new EventEmitter();

  constructor(
    private readonly snackBar: MatSnackBar,  
    private readonly stageService : StageService, 
    private readonly gameService : GameService
    ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.stage){
      this.disabled = false;
    }
  }

  ngOnInit(): void {

   

  }


  rest(){
    if(this.disabled){
      return;
    }

    this.gameService.rest(this.stage.restModifier).subscribe(restInfo => {
      this.restInfo = restInfo

      this.snackBar.openFromComponent(SnackBarRestComponent,
        {
          data: {
            html: restInfo.message
          },
          politeness: 'polite',
          panelClass: 'snack-bar-rest',
          duration: 2400000,
        
          
        }
      
      );
      this.energyModifier.emit(this.restInfo.energyDifference);
      this.healthModifier.emit(this.restInfo.lifeDifference);
      this.disabled = true;
    } );
    
 
   

 
}

nextStage(option : Option): void{

  this.stageService.setStageAkita(option.toStage).subscribe();
   console.log(option.toStage);
}
}


