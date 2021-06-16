import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EsqueceuSenhaService } from '../esqueceu-senha.service';

@Component({
  selector: 'app-email-enviado',
  templateUrl: './email-enviado.component.html',
  styleUrls: ['./email-enviado.component.scss']
})
export class EmailEnviadoComponent implements OnInit {

  email: string = '';

  constructor(
    private esqueceuSenhaService: EsqueceuSenhaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = this.esqueceuSenhaService.email;
  }

  handleGoBack(): void {
    this.router.navigate(['/forgot-password']);
  }

}
