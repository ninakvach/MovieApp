import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messsage: string[] = [];
  add(message: string) {
    this.messsage.push(message);
  }
  clear() {
    this.messsage = [];
  }
  constructor() { }
}
