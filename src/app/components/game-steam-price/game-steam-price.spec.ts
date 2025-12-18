import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSteamPrice } from './game-steam-price';

describe('GameSteamPrice', () => {
  let component: GameSteamPrice;
  let fixture: ComponentFixture<GameSteamPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSteamPrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSteamPrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
