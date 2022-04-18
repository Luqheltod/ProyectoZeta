import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Stage } from "../models/stage";

@Injectable({ providedIn: 'root' })
export class GameService {


    private urlEndPoint:string = 'http://localhost:8080/projectz/'

    constructor(private readonly http: HttpClient) { }

    getStageByIdStage(idStage : number): Observable<Stage> {
        return this.http.get<Stage>(this.urlEndPoint+`stage/${idStage}`);
      }

}