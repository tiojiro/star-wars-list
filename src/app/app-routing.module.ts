import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarHeroesComponent } from './star-heroes/star-heroes.component';
import { StarHeroDetailComponent } from './star-hero-detail/star-hero-detail.component';

const routes: Routes = [
  { path: 'star-heroes', component: StarHeroesComponent },
  { path: 'star-hero-detail', component: StarHeroDetailComponent},
  { path: '**', component: StarHeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}