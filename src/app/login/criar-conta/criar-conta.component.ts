import { Component, OnInit } from '@angular/core';
import { Account } from '../../interfaces/account';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {

  account: Account = {name: '', email: '', password: ''};

  constructor() {}

  ngOnInit(): void {
  }

  handleSubmit(): void {}

}
