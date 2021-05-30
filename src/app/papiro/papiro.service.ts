import { Injectable } from '@angular/core';
import { Papiro } from './papiro';
import {PAPIRO} from './papiro.json';

@Injectable()
export class PapiroService {

  constructor() { }
  getPapiro(): Papiro{
    return PAPIRO;
  }
}
