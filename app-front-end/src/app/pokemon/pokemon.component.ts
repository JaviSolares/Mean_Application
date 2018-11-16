import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  //providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  pokemones: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  getMonsters() {
    this.pokemonService.getPokemones()
      .subscribe(monsters => {
        this.pokemones = monsters;
        console.log('Data from pokemon service: ' + this.pokemones[0].nombre);
      });
  }

  ngOnInit() {
    this.getMonsters();
  }

}
