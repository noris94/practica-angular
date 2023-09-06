import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  alertas: string[] = [];

  add(alerta: string) {
    this.alertas.push(alerta);
  }

  clear() {
    this.alertas = [];
  }

  constructor() { }
}
