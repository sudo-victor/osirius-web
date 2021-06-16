import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmailEnviadoComponent } from "./email-enviado/email-enviado.component";

import { EsqueceuSenhaComponent } from "./esqueceu-senha.component";

const routes = [
    {
        path: 'forgot-password',
        component: EsqueceuSenhaComponent
    },
    {
        path: 'forgot-password/sended-email',
        component: EmailEnviadoComponent
    }
]
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EsqueceuSenhaRoutingModule { }