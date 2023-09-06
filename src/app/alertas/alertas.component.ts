import { Component } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {

  constructor(public alertasService: AlertasService) {}

}
