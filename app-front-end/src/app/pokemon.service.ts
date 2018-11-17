import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: Http) { }

  getPokemones() {
    return this.http.get('http://localhost:5000/api/v1/pokemon')
      .pipe(
        map(res => res.json())
      );
  }

  getPokemon(id) {
    const url = `http://localhost:5000/api/v1/pokemon/${id}`;
    return this.http.get(url)
      .pipe(
        map(res => res.json())
      );
  }

  addPokemon(newPokemon) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/v1/pokemon', newPokemon, {headers: headers})
      .pipe(
        map(res => res.json())
      );
  }

  updatePokemon(modPokemon) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `http://localhost:5000/api/v1/pokemon/${modPokemon.id}`;
    return this.http.put(url, modPokemon, {headers: headers})
      .pipe(
        map(res => res.json())
      );
  }

}
