import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayer } from './game-player';

describe('GamePlayer', () => {
  let component: GamePlayer;
  let fixture: ComponentFixture<GamePlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
