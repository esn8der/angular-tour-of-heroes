import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined; // Si se hace clic en el héroe seleccionado, se quita la selección.
    } else {
      this.selectedHero = hero; // Si se hace clic en otro héroe, se actualiza la selección.
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}