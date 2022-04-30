import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stage } from 'src/app/models/stage';
import { SnackBarRestComponent } from 'src/app/shared/snack-bar-rest/snack-bar-rest.component';
import { StageQuery } from 'src/app/state/stage.query';
import { Option } from 'src/app/models/option';
import { StageService } from 'src/app/state/stage.service';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnChanges {

  disabled : boolean ;
  

  restMsg : string = "Mensaje"

  @Input() stage : Stage;

  @Output() healthModifier: EventEmitter<number> = new EventEmitter();
  @Output() energyModifier: EventEmitter<number> = new EventEmitter();

  constructor(private readonly snackBar: MatSnackBar,  private readonly stageService : StageService) { }
  
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
    this.disabled = true;
 console.log(this.stage.restModifier);
    //Servicio de descansar con el modificador

  this.snackBar.openFromComponent(SnackBarRestComponent,
    {
      data: {
        html: this.restMsg
      },
      politeness: 'polite',
      panelClass: 'snack-bar-rest',
      duration: 24000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }
  
  );
  this.energyModifier.emit(-20);
  this.healthModifier.emit(20);
}

nextStage(option : Option): void{

  this.stageService.setStageAkita(option.toStage).subscribe();
   console.log(option.toStage);
}
}


