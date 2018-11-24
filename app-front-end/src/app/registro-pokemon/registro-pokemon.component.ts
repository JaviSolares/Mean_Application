import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-registro-pokemon',
  templateUrl: './registro-pokemon.component.html',
  styleUrls: ['./registro-pokemon.component.css']
})
export class RegistroPokemonComponent implements OnInit {

  pokemones: Pokemon[] = [];
  public errorMsg;

  constructor(
    private ruta: ActivatedRoute,
    private pokemonService: PokemonService,
    private localizacion: Location
  ) { }

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

  goBack(): void {
    this.localizacion.back();
  }

  ngOnInit() {
  }

}
