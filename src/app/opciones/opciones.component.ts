import { Component, OnInit } from '@angular/core';
import { Globals } from '../papiro/globals';
import { Papiro } from '../papiro/papiro';
import { PapiroService } from '../papiro/papiro.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent  {

  private role: string;
  papiro: Papiro  ;

  constructor(public papiroService: PapiroService,public globals: Globals) { this.role=globals.role}

  clickFunction(id): void{
    this.papiroService.getPapiro(id).subscribe(
        papiro => this.papiro = papiro
      );
      this.globals.role = this.papiro.texto;
  }


}



/*clickFunction() {

  alert("clicked me!");

}*/
