import { FilaTabla } from './tabla-izquierda/tabla-izquierda.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-general',
  templateUrl: './componente-general.component.html',
  styleUrls: ['./componente-general.component.sass'],
})
export class ComponenteGeneralComponent implements OnInit {
  public datoRestablecer: any;
  public datosFormularioDerecha: any;
  public datosModificar: any;
  public datosBasura: Array<FilaTabla>;
  constructor() {}

  ngOnInit(): void {}
  //Se podrian incluso mapear a una interfaz para saber que estructura
  //de datos estoy recibiendo en vez de un any
  public rellenarDatos(datos: Array<FilaTabla>) {
    //En este momento recibo los datos del form derecha al padre y este los tiene
    //Los guardo en la variable datos Formularios
    //Angular detecta el cambio y envia estos cambios a todos los hijos que tengna
    //Los inputs con esa variable
    this.datosFormularioDerecha = datos;
  }

  public modificarDatos(datos: FilaTabla) {
    this.datosModificar = datos;
  }

  public basuraDatos(datos: Array<FilaTabla>) {
    this.datosBasura = datos;
  }
  public datoRestablecido(dato: FilaTabla) {
    this.datoRestablecer = dato;
  }
}
