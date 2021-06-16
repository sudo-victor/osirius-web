import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CriarContaComponent } from "./criar-conta/criar-conta.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { EsqueceuSenhaComponent } from "./esqueceu-senha/esqueceu-senha";

const routes = [
    {
        path: 'login',
        component: EntrarComponent
    },
    {
        path: 'signup',
        component: CriarContaComponent
    },
    {
        path: 'forgot-password',
        component: EsqueceuSenhaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }