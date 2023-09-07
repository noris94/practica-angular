import { Component, Input } from '@angular/core';
import { Juego } from '../interfaces/juego';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'edicion',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  juego: Juego | undefined;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getJuego();
  }

  getJuego(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.homeService.getJuego(id)
      .subscribe(current => this.juego = current);
  }

  regresar(): void {
    this.location.back();
  }

  save(): void {
    if (this.juego) {
      this.homeService.update(this.juego)
        .subscribe(() => this.regresar());
    }
  }

  delete(): void {
    if(this.juego){
      this.homeService.delete(this.juego.id!).subscribe(()=>{
        this.router.navigate(['/','juegos']);
      });
    }
    
  }

}
