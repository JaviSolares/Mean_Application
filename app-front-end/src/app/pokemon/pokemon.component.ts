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

  add(id: number, nombre: string, tipo_prim: string, tipo_secu: string, region: string): void {
    nombre = nombre.trim();
    tipo_prim = tipo_prim.trim();
    tipo_secu = tipo_secu.trim();
    region = region.trim();
    if (!nombre) { return; }
    this.pokemonService.addPokemon({id, nombre, tipo_prim, tipo_secu, region } as Pokemon)
      .subscribe(pokemon => {
        this.pokemones.push(pokemon);
      });
  }

  confElim(pokemon: Pokemon) {
    var r = confirm("¿Seguro que quiere eliminar a este pokemon?");
    if (r == true)
    {
      this.delete(pokemon);
    }
  }

  delete(pokemon: Pokemon) {
    this.pokemones = this.pokemones.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon.id).subscribe();
  }

  ngOnInit() {
    this.getMonsters();
  }

}
