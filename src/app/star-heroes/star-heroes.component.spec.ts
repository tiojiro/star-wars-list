import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarHeroesComponent } from './star-heroes.component';

describe('StarHeroesComponent', () => {
  let component: StarHeroesComponent;
  let fixture: ComponentFixture<StarHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
