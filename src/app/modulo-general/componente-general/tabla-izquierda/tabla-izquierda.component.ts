import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  EventEmitter,
  Output,
} from '@angular/core';

import { clone } from 'lodash';

export interface FilaTabla {
  selected?: boolean;
  modificar?: boolean;
  firm: any;
  org: any;
  lob: any;
  sub_lob: any;
  bussines_plan: any;
  bussines_component: any;
  identificador: any;
}

@Component({
  selector: 'app-tabla-izquierda',
  templateUrl: './tabla-izquierda.component.html',
  styleUrls: ['./tabla-izquierda.component.sass'],
})
export class TablaIzquierdaComponent implements OnInit {
  public array: Array<FilaTabla> = []; // no lo tenias iniciado
  public arrayProvisional: Array<FilaTabla> = [];
  public modificarFila: Array<FilaTabla> = [];
  public contador: number;

  @Output('modifyDatos') modifyDatos = new EventEmitter();
  @Output('enviarBasura') enviarBasura = new EventEmitter();

  // Solo se hace una vez
  @Input('entradaLista') set entradaLista(entrada: Array<FilaTabla>) {
    if (entrada) {
      console.log(entrada.length);
      entrada.forEach(valor => {
        if (valor.modificar) {
          this.array[valor.identificador] = valor;
        } else {
          // Es una guarrada, pero como se pasa un identificador nulo porque se autorellena
          // Se le da el valor de la longitud del array en cada momento.
          valor.identificador = this.array.length;
          valor.modificar = false;
          this.array.push(...entrada);

        }
      });

    }
  }

  constructor() {}

  ngOnInit(): void {}

  public modificarDatos(value) {
    this.array[value].modificar = true;
    this.modifyDatos.emit(this.array[value]);
  }

  public borrarSeleccionados() {
    //Se eliminarán y enviarán al basurero las filas seleccionadas
    this.eliminarFila(clone(this.array).filter((entry) => entry.selected));
    //Se quedarán las filas que no han sido seleccionadas
    this.array = this.array.filter((entry) => !entry.selected);
  }

  public eliminarFila(filasAEnviarAlBasurero: Array<FilaTabla>) {
    this.array.forEach((valor) => filasAEnviarAlBasurero.forEach((entrada) => {
      if(valor.identificador != entrada.identificador){
        this.arrayProvisional.push(valor);
      }
    }));
    this.array = this.arrayProvisional;
    this.arrayProvisional = [];
    this.enviarBasura.emit(filasAEnviarAlBasurero);
  }
}
