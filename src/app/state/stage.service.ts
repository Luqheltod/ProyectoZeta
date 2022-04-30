import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { createStage, Stage } from "../models/stage";
import { map, tap } from 'rxjs/operators';
import { GameService } from "../services/game.service";
import { setLoading } from "@datorama/akita";
import { StageStore } from "./stage.store";



@Injectable({ providedIn: 'root' })
export class StageService {



    constructor(private readonly http: HttpClient, private readonly gameService : GameService , private readonly stageStore : StageStore) { }

    setStageAkita(idStage: number): Observable<Stage> {
        return this.gameService.getStage(idStage)
          .pipe(
            setLoading(this.stageStore),
            tap(stage => {
              this.stageStore.update({ stage });
              
            })
          );
      }

}