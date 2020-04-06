import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FilaTabla } from '../tabla-izquierda/tabla-izquierda.component';

@Component({
  selector: 'app-formulario-derecha',
  templateUrl: './formulario-derecha.component.html',
  styleUrls: ['./formulario-derecha.component.sass']
})
export class FormularioDerechaComponent implements OnInit {

  @Output("enviarDatos") enviarDatos = new EventEmitter();

  @Input('recibirModificacion') set recibirModificacion(entrada: FilaTabla) {
    if (entrada) {
      this.formularioGrupo.patchValue({
        firm: entrada.firm,
        org: entrada.org,
        lob: entrada.lob,
        sub_lob: entrada.sub_lob,
        bussines_plan: entrada.bussines_plan,
        bussines_component : entrada.bussines_component,
        identificador: entrada.identificador,
        modificar : entrada.modificar
      });
      let button = document.querySelector("button");
      button.textContent="Modificar";
    }
  }

  public formularioGrupo : FormGroup;

  public ejemploFirmHolder = "Firm";
  public ejemploOrgHolder = "Org";
  public ejemploLobHolder = "Lob";
  public ejemploSub_LobHolder = "Sub_lob";
  public ejemploBussines_Plan_Holder = "Bussines_plan";
  public ejemploBussines_Component_Holder = "Bussines_component";


  constructor(private fb : FormBuilder) {
    this.formularioGrupo = this.fb.group({
      firm: ["",[Validators.required]],
      org: ["",[Validators.required]],
      lob: ["",[Validators.required]],
      sub_lob: ["",[Validators.required]],
      bussines_plan: ["",[Validators.required]],
      bussines_component: ["",[Validators.required]],
      identificador:[null],
      modificar: false
    });

   }
  ngOnInit(): void {
  }

  public limpiarFormulario(){
    this.formularioGrupo.patchValue({
      firm: "",
      org: "",
      lob: "",
      sub_lob: "",
      bussines_plan: "",
      bussines_component: ""
    });
  }

  public enviarFormulario(){
    let button = document.querySelector("button");
    if(button.textContent=="Añadir"){
      this.formularioGrupo.patchValue({
        modificar:false
      });
    }
    button.textContent = "Añadir";
    if(this.formularioGrupo.valid){
      this.enviarDatos.emit([this.formularioGrupo.value]);
      console.log(this.formularioGrupo.get("modificar"));
      this.limpiarFormulario();
    }else{
      console.log("No envia una mierda");
    }
  }
}
