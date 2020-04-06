import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilaTabla } from '../tabla-izquierda/tabla-izquierda.component';
import { clone } from 'lodash';

@Component({
  selector: 'app-basurero-bajo-izquierda',
  templateUrl: './basurero-bajo-izquierda.component.html',
  styleUrls: ['./basurero-bajo-izquierda.component.sass'],
})
export class BasureroBajoIzquierdaComponent implements OnInit {
  @Output('datoRestablecido') datoRestablecido = new EventEmitter();
  @Input('basuraLista') set basuraLista(entrada: Array<FilaTabla>) {
    if (entrada) {
      this.arrayBasurero.push(...entrada);
    }
  }

  public arrayBasurero: Array<FilaTabla> = [];
  public contador: number;
  public arrayProvisional: Array<FilaTabla> = [];

  constructor() {}

  public eliminarDefinitivamente(filaRestaurar: Array<FilaTabla>) {
    this.arrayBasurero.forEach((valor)=> filaRestaurar.forEach((entrada)=>{
      if(valor.identificador!=entrada.identificador){
        this.arrayProvisional.push(valor);
      }
    }));
    this.arrayBasurero=this.arrayProvisional;
    this.arrayProvisional=[];

  }

  public restablecerDato(filaRestaurar: Array<FilaTabla>) {
    this.arrayBasurero.forEach((valor)=> filaRestaurar.forEach((entrada)=>{
      if(valor.identificador!=entrada.identificador){
        this.arrayProvisional.push(valor);
      }
    }));
    this.arrayBasurero=this.arrayProvisional;
    this.arrayProvisional=[];
    this.datoRestablecido.emit(filaRestaurar);
  }
  public restablecerSeleccionados() {
    this.datoRestablecido.emit((clone(this.arrayBasurero).filter((entry) => entry.selected)));
    this.arrayBasurero=this.arrayBasurero.filter((entry) => !entry.selected);
  }

  ngOnInit(): void {}
}
