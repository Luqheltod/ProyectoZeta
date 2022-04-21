import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/models/stage';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-stage-container',
  templateUrl: './stage-container.component.html',
  styleUrls: ['./stage-container.component.css']
})
export class StageContainerComponent implements OnInit {

  stage : Stage ;

  constructor(private readonly gameService : GameService) { }

  ngOnInit(): void {
    this.gameService.getStageByIdStage(1).subscribe(stage => this.stage = stage);
  }

}
