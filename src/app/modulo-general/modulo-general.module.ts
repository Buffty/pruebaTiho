import { MyLineChartComponent } from './componente-general/my-line-chart/my-line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BasureroBajoIzquierdaComponent } from './componente-general/basurero-bajo-izquierda/basurero-bajo-izquierda.component';

import { FormularioDerechaComponent } from './componente-general/formulario-derecha/formulario-derecha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteGeneralComponent } from './componente-general/componente-general.component';
import { TablaIzquierdaComponent } from './componente-general/tabla-izquierda/tabla-izquierda.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormularioDerechaComponent,
    ComponenteGeneralComponent,
    TablaIzquierdaComponent,
    BasureroBajoIzquierdaComponent,
    MyLineChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [
    FormularioDerechaComponent,
    TablaIzquierdaComponent,
    ComponenteGeneralComponent,
    BasureroBajoIzquierdaComponent,
    MyLineChartComponent
  ]
})
export class ModuloGeneralModule { }
