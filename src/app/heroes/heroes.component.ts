import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined; // Si se hace clic en el héroe seleccionado, se quita la selección.
    } else {
      this.selectedHero = hero; // Si se hace clic en otro héroe, se actualiza la selección.
    }
  }
}