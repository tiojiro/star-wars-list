import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { StarHero } from './types/star-hero';
import { map } from 'rxjs/operators';
import { StarHeroHomeworld } from './types/star-hero-homeworld';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  readonly starWarsHeroesUrl = 'https://swapi.co/api/people/'; 
  private _starHero: StarHero;

  public get starHero(): StarHero {
    return this._starHero;
  }
  public set starHero(value: StarHero) {
    this._starHero = value;
  }

  constructor(private http: HttpClient) {}

  getStarHeroes (): Observable<StarHero[]> {
    return this.http.get<StarHero[]>(this.starWarsHeroesUrl).pipe(
      map((response: any) => { return response.results})
    );
  }

  getHomeworld (): Observable<StarHeroHomeworld> {
    return this.http.get<StarHeroHomeworld>(this._starHero.homeworld);
  }

}
