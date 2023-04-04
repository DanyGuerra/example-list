import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTecnologiasComponent } from './lista-tecnologias/lista-tecnologias.component';
import { DetallesTecnologiasComponent } from './detalles-tecnologias/detalles-tecnologias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaTecnologiasComponent,
    DetallesTecnologiasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
