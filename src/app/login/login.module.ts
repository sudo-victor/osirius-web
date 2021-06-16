import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './shared/components/components.module';
import { EsqueceuSenhaModule } from './esqueceu-senha/esqueceu-senha.module';

import { LoginComponent } from './login.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';


@NgModule({
  declarations: [
    LoginComponent,
    EntrarComponent,
    CriarContaComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ComponentsModule,
    EsqueceuSenhaModule
  ]
})
export class LoginModule { }
