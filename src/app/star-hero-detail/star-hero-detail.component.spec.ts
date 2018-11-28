import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarHeroDetailComponent } from './star-hero-detail.component';

describe('StarHeroDetailComponent', () => {
  let component: StarHeroDetailComponent;
  let fixture: ComponentFixture<StarHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
