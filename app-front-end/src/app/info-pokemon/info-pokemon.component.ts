import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  public errorMsg;

  constructor(
    private ruta: ActivatedRoute,
    private servicioPokemon: PokemonService,
    private localizacion: Location
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.ruta.snapshot.paramMap.get('id');
    this.servicioPokemon.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon,
        error => this.errorMsg = error);
  }

  goBack(): void {
    this.localizacion.back();
  }

  confEdit() {
    var r = confirm("¿Seguro que desea guardar las modificaciones hechas?");
    if (r == true)
    {
      this.save();
    }
  }

  save(): void {
    this.servicioPokemon.updatePokemon(this.pokemon)
      .subscribe(() => this.goBack(),
      error => this.errorMsg = error);
  }

}
