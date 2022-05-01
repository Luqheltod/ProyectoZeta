export interface InstaDeathInfo{
    idInstadeath : number,
    idOptions : number,
    message : string,
    
}

export function createOption(instadeath: Partial<InstaDeathInfo>): InstaDeathInfo {
    return {
     idOptions : instadeath.idOptions,
     idInstadeath : instadeath.idInstadeath,
     message : instadeath.message,
    
    
    };
  }