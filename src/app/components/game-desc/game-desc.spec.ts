import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDesc } from './game-desc';

describe('GameDesc', () => {
  let component: GameDesc;
  let fixture: ComponentFixture<GameDesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDesc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDesc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
