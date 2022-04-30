import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { StageState } from '../models/stage.state';


export function createInitialState(): StageState {
  return { stage: null };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'stage', resettable: true })
export class StageStore extends EntityStore<StageState> {
  constructor() {
    super(createInitialState());
  }
}
