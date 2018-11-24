import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemones: Pokemon[] = [];
  public errorMsg;
 
  constructor(private pokemonService: PokemonService) { }
 
  ngOnInit() {
    this.getPokemones();
  }
 
  getPokemones(): void {
    this.pokemonService.getPokemones()
      .subscribe(monsters => this.pokemones = monsters,
        error => this.errorMsg = error);
  }

}
