import { Injectable } from '@angular/core';
import { Papiro } from './papiro';
import {PAPIRO} from './papiro.json';
import { Observable, of} from 'rxjs';

@Injectable()
export class PapiroService {

  constructor() { }
  getPapiro(): Observable<Papiro>{
    return of(PAPIRO);
  }
}
