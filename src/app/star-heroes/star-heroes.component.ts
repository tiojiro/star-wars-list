import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { StarHero } from '../types/star-hero';

@Component({
  selector: 'app-star-heroes',
  templateUrl: './star-heroes.component.html',
  styleUrls: ['./star-heroes.component.css']
})
export class StarHeroesComponent implements OnInit {
  starHeroes: StarHero[] = [];
  searchStarHeroes: StarHero[];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.getStarHeroes();
  }

  getStarHeroes(): void {
    this.starWarsService.getStarHeroes()
      .subscribe((starHeroes: StarHero[]) => {
        this.starHeroes = starHeroes;
        this.searchStarHeroes = starHeroes;
      });
  }

  onSelect(starHero: StarHero): void {
    this.starWarsService.starHero = starHero;
  }

  search(term: string): void {
    this.starHeroes = this.searchStarHeroes.filter((itemStarHero) => {
      return itemStarHero.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    })
  }
}
