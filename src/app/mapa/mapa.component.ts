import { Component, OnInit } from '@angular/core';
import { Papiro } from '../papiro/papiro';
import { PapiroService } from '../papiro/papiro.service';
import { Mapa } from './mapa';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  papiro: Papiro  ;
  mapa: Mapa;
  constructor(private papiroService: PapiroService) { }

  ngOnInit(): void {
    this.papiroService.getPapiro().subscribe(
      papiro => this.papiro = papiro
    );

}}
