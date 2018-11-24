import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPokemonComponent } from './registro-pokemon.component';

describe('RegistroPokemonComponent', () => {
  let component: RegistroPokemonComponent;
  let fixture: ComponentFixture<RegistroPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
