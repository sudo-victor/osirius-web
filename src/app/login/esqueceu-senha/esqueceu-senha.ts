import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent implements OnInit {

  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    
  }

}
