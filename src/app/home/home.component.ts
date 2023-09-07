import { Component, OnInit } from '@angular/core';
import { Juego } from '../interfaces/juego';
import { JUEGOS, PLATAFORMAS } from '../mock';
import { Observable, of } from 'rxjs';
import { HomeService } from '../service/home.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  juegos: Juego[] = [];

  plataformas=PLATAFORMAS;

  constructor(private homeService: HomeService, public alertasService: AlertasService) {}

  fechaLanzamiento:string = new Date().toISOString().split('T')[0];

  newJuego:Juego ={
    nombre: '',
    desarrolador: '',
    descripcion: '',
    precio: 0,
    descuento: 0,//porcentaje
    fechaLanzamiento: new Date(),
    genero:{nombre:''},
    plataformas:[]
  }

  ngOnInit(): void {
    this.getJuegos();
  }
  
  getJuegos(): void {
    //this.juegos = this.homeService.getJuegos();
    this.homeService.getJuegos().subscribe(juegos => this.juegos = juegos);
  }

  add(): void {
    console.log(this.newJuego)
    const fechaLanzamientoDate = new Date(this.fechaLanzamiento);

    const nuevo: Juego = {
      id: JUEGOS.length +1,
      nombre: this.newJuego.nombre,
      desarrolador: this.newJuego.desarrolador,
      descripcion: this.newJuego.descripcion,
      precio: this.newJuego.precio,
      descuento: this.newJuego.descuento,
      fechaLanzamiento: fechaLanzamientoDate,
      genero: this.newJuego.genero,
      plataformas: this.newJuego.plataformas,
    };
    this.homeService.add(nuevo)
      .subscribe(current => {
        this.juegos.push(current);
      });
  }

  delete(juego: Juego): void {
    this.juegos = this.juegos.filter(current => current !== juego);
    //this.homeService.delete(juego.id).subscribe();
  }

}

