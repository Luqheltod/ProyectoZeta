import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule} from '@angular/common/http';

import { StageContainerComponent } from './container/stage-container/stage-container.component';
import { OptionsComponent } from './components/options/options.component';
import { TextComponent } from './components/text/text.component';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { SnackBarRestComponent } from './shared/snack-bar-rest/snack-bar-rest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StageContainerComponent,
    OptionsComponent,
    TextComponent,
    MapComponent,
    SnackBarRestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //material
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
