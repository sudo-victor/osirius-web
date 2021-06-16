import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EsqueceuSenhaRoutingModule } from './esqueceu-senha-routing.module';

import { EsqueceuSenhaComponent } from './esqueceu-senha.component';
import { ComponentsModule } from '../shared/components/components.module';
import { EmailEnviadoComponent } from './email-enviado/email-enviado.component';


@NgModule({
  declarations: [
    EsqueceuSenhaComponent,
    EmailEnviadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    EsqueceuSenhaRoutingModule
  ]
})
export class EsqueceuSenhaModule { }
