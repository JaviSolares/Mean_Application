import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  pokemonUrl: string;

  constructor(private http: Http) {
    this.pokemonUrl = AppConstants.baseURL;
   }

  getPokemones() {
    return this.http.get(this.pokemonUrl)
      .pipe(
        map(res => res.json()),
        catchError(this.errorHandler)
      );
  }

  getPokemon(id) {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get(url)
      .pipe(
        map(res => res.json()),
        catchError(this.errorHandler)
      );
  }

  addPokemon(newPokemon) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.pokemonUrl, newPokemon, {headers: headers})
      .pipe(
        map(res => res.json()),
        catchError(this.errorHandler)
      );
  }

  updatePokemon(modPokemon) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.pokemonUrl}/${modPokemon.id}`;
    return this.http.put(url, modPokemon, {headers: headers})
      .pipe(
        map(res => res.json()),
        catchError(this.errorHandler)
      );
  }

  deletePokemon(id) {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        map(res => res.json()),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}
