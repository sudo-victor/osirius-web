import { Component, OnInit } from '@angular/core';
import { Account } from '../../interfaces/account';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  account: Account = { email: '', password: '' };

  constructor() {}

  ngOnInit(): void {
  }

  handleSubmit(): void {
    // código de submit
  }

}
