import { Injectable } from '@angular/core';
import { Juego } from '../interfaces/juego';
import { JUEGOS } from '../mock';
import { Observable, of } from 'rxjs';
import { AlertasService } from './alertas.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private juegosApiUrl = 'api/juegos';
  
  constructor(
    private http: HttpClient, private alertasService: AlertasService) { }

  /*getJuegos(): Juego[] {
    return JUEGOS;
  }*/

  getJuegos(): Observable<Juego[]> {
    // const juegos = of(JUEGOS);
    // this.alertasService.add('HomeService: fetched');
    // return juegos;
    return this.http.get<Juego[]>(this.juegosApiUrl)
    .pipe(
      catchError(this.handleError<Juego[]>('getJuegos', []))
    );
  }

  getJuego(id: number): Observable<Juego> {
    // const juego = JUEGOS.find(current => current.id === id)!;
    // return of(juego);
    const url = `${this.juegosApiUrl}/${id}`;
    return this.http.get<Juego>(url).pipe(
      catchError(this.handleError<Juego>(`getJuego=${id}`))
    );
  }

  private log(message: string) {
    this.alertasService.add(`JuegosService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  update(juego: Juego): Observable<any> {
    return this.http.put(this.juegosApiUrl, juego, this.httpOptions).pipe(
      catchError(this.handleError<any>('update'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  add(juego: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.juegosApiUrl, juego, this.httpOptions).pipe(
      catchError(this.handleError<Juego>('add'))
    );
  }

  delete(id: number): Observable<Juego> {
    const url = `${this.juegosApiUrl}/${id}`;
  
    return this.http.delete<Juego>(url, this.httpOptions).pipe(
      catchError(this.handleError<Juego>('deleted'))
    );
  }

}
