import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PapiroComponent } from './papiro/papiro.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { MapaComponent } from './mapa/mapa.component';
import {PapiroService} from './papiro/papiro.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PapiroComponent,
    OpcionesComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PapiroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
