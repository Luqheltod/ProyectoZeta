import { EntityState } from '@datorama/akita';
import { Stage } from './stage';


export interface StageState extends EntityState<Stage> {

  readonly stage?: Stage;
  

}
