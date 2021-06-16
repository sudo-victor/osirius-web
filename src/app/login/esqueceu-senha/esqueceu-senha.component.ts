import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EsqueceuSenhaService } from './esqueceu-senha.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent implements OnInit {

  email: string = '';

  constructor(
    private esqueceuSenhaService: EsqueceuSenhaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = this.esqueceuSenhaService.email;
  }

  handleSubmit(): void {
    console.log(this.email, this.esqueceuSenhaService.email);
    this.esqueceuSenhaService.email = this.email;
    this.router.navigate(['/forgot-password/sended-email'])
  }

}
