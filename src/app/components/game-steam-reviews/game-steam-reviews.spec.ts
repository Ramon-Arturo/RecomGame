import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSteamReviews } from './game-steam-reviews';

describe('GameSteamReviews', () => {
  let component: GameSteamReviews;
  let fixture: ComponentFixture<GameSteamReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSteamReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSteamReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
