import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { DescriptionComponent } from './shared/components/description/description.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha';



@NgModule({
  declarations: [
    LoginComponent,
    EntrarComponent,
    CriarContaComponent,
    DescriptionComponent,
    EsqueceuSenhaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
  ]
})
export class LoginModule { }
