import { createOption, Option } from "./option";


export interface Stage{

    idStage? : number ,
    text : string,
    mapName : string ,
    flat : string ,
    options : Array<Partial<Option>>;
    finalStage : boolean

}

export function createStage(stage: Partial<Stage>): Stage {
    return {
     idStage: stage.idStage ?? null,
     text : stage.text,
     mapName : stage.mapName,
     flat : stage.flat,
     options : stage.options?.map(createOption) ?? [],
     finalStage : stage.finalStage
    };
}