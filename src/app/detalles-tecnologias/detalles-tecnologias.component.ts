import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalles-tecnologias',
  templateUrl: './detalles-tecnologias.component.html',
  styleUrls: ['./detalles-tecnologias.component.scss'],
})
export class DetallesTecnologiasComponent {
  @Input() usuario: string = '';
  @Output() nuevaTecnologia = new EventEmitter<string>();

  agregarTecnologia(nuevaTec: string) {
    this.nuevaTecnologia.emit(nuevaTec);
  }
}
