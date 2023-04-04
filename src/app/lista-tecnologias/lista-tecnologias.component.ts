import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tecnologias',
  templateUrl: './lista-tecnologias.component.html',
  styleUrls: ['./lista-tecnologias.component.scss'],
})
export class ListaTecnologiasComponent {
  newUsuario = 'Daniel';
  listaTecnologias: string[] = [];

  addTec(nuevaTec: string) {
    this.listaTecnologias.push(nuevaTec);
  }
}
