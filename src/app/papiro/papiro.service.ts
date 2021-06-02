import { Injectable } from '@angular/core';
import { Papiro } from './papiro';

import { Observable, of} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable()
export class PapiroService {

  private urlEndPoint:string = 'http://localhost:8080/projectz/papiro/'

  constructor(private http: HttpClient) { }
  getPapiro(id): Observable<Papiro>{
   // return of(PAPIRO);
   return this.http.get<Papiro>(this.urlEndPoint+id);
  }
}
