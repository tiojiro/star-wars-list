import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StarHero } from '../star-hero';
import { StarWarsService } from '../star-wars.service';
import { StarHeroHomeworld } from '../star-hero-homeworld';

@Component({
  selector: 'app-star-hero-detail',
  templateUrl: './star-hero-detail.component.html',
  styleUrls: ['./star-hero-detail.component.css']
})
export class StarHeroDetailComponent implements OnInit {
  @Input() starHero: StarHero;
  homeworld: StarHeroHomeworld;

  constructor(
    private route: ActivatedRoute,
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
