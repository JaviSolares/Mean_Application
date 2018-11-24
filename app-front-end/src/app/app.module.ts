import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroPokemonComponent } from './registro-pokemon/registro-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    InfoPokemonComponent,
    DashboardComponent,
    RegistroPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
