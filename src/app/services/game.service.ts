import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RestInfo } from "../models/restInfo";
import { createStage, Stage } from "../models/stage";

@Injectable({ providedIn: 'root' })
export class GameService {




    private urlEndPoint:string = 'http://localhost:8080/projectz/'

    constructor(private readonly http: HttpClient) { }

    getStageByIdStage(idStage : number): Observable<Stage> {
        return this.http.get<Stage>(this.urlEndPoint+`stage/${idStage}`);
      }

      getStage(idStage: number): Observable<Stage> {
        return this.http.get<Stage>(this.urlEndPoint+`stage/${idStage}`)
        .pipe(map(stage => createStage(stage)));
      }
      
      rest(restModifier: number) : Observable<RestInfo>  {
        return this.http.get<RestInfo>(this.urlEndPoint+`rest/${restModifier}`);
      }
    
    
}