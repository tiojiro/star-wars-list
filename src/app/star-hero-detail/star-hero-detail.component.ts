import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarHero } from '../types/star-hero';
import { StarHeroHomeworld } from '../types/star-hero-homeworld';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-star-hero-detail',
  templateUrl: './star-hero-detail.component.html',
  styleUrls: ['./star-hero-detail.component.css']
})
export class StarHeroDetailComponent implements OnInit {
  starHero: StarHero;
  homeworld: StarHeroHomeworld;

  constructor(
    private starWarsService: StarWarsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.starHero = this.starWarsService.starHero;
    this.getHomeworld();
  }

  getHomeworld(): void {
    this.starWarsService.getHomeworld()
      .subscribe(homeworld => this.homeworld = homeworld);
  }

  goBack(): void {
    this.location.back();
  }

}
