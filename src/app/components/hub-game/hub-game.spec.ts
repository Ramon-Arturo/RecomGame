import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubGame } from './hub-game';

describe('HubGame', () => {
  let component: HubGame;
  let fixture: ComponentFixture<HubGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
