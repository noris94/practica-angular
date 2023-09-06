import { Component, OnInit } from '@angular/core';
import { Juego } from '../interfaces/juego';
import { JUEGOS } from '../mock';
import { Observable, of } from 'rxjs';
import { HomeService } from '../service/home.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  juegos: Juego[] = [];

  constructor(private homeService: HomeService, public alertasService: AlertasService) {}

  ngOnInit(): void {
    this.getJuegos();
  }
  
  getJuegos(): void {
    //this.juegos = this.homeService.getJuegos();
    this.homeService.getJuegos().subscribe(juegos => this.juegos = juegos);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    const nuevo: Juego = {
      id: JUEGOS.length +1,
      nombre: nombre,
      desarrolador: "",
      descripcion: "",
      precio: 0,
      descuento: 0,
      fechaLanzamiento: new Date(),
      genero: undefined,
      plataformas: undefined,
    };
    this.homeService.add(nuevo)
      .subscribe(current => {
        this.juegos.push(current);
      });
  }

  delete(juego: Juego): void {
    this.juegos = this.juegos.filter(current => current !== juego);
    this.homeService.delete(juego.id).subscribe();
  }

}

