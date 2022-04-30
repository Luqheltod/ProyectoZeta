import { createOption, Option } from "./option";


export interface Stage{

    idStage? : number ,
    text? : string,
    mapName? : string ,
    flat? : string ,
    options? : Array<Partial<Option>>;
    finalStage? : boolean,
    restModifier : number

}

export function createStage(stage: Partial<Stage>): Stage {
    return {
     idStage: stage.idStage ?? null,
     text : stage.text,
     mapName : stage.mapName,
     flat : stage.flat,
     options : stage.options?.map(option=> createOption(option)) ?? [],
     finalStage : stage.finalStage,
     restModifier : stage.restModifier
    };
}