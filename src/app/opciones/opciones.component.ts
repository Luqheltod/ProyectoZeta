import { Component, OnInit } from '@angular/core';
import { Papiro } from '../papiro/papiro';
import { PapiroService } from '../papiro/papiro.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  papiro: Papiro  ;

  constructor(private papiroService: PapiroService) { }

  ngOnInit(): void {
    this.papiroService.getPapiro(1).subscribe(
      papiro => this.papiro = papiro
    );
}

}