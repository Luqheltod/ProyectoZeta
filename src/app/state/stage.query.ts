import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StageState } from '../models/stage.state';
import { StageStore } from './stage.store';


@Injectable({ providedIn: 'root' })
export class StageQuery extends QueryEntity<StageState> {


  readonly selectStage = this.select('stage');

  constructor(protected readonly store: StageStore) {
    super(store);
  }
}
