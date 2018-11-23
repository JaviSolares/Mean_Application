import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const rutas: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: InfoPokemonComponent },
  { path: 'pokemones', component: PokemonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
