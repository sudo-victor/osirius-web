import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsqueceuSenhaService {

  private _email = new BehaviorSubject<string>('');

  constructor() { }

  get email(): string {
    return this._email.value
  }

  set email(email: string) {  
    this._email.next(email);
  }
}
