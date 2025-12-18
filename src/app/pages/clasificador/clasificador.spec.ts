import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clasificador } from './clasificador';

describe('Clasificador', () => {
  let component: Clasificador;
  let fixture: ComponentFixture<Clasificador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clasificador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clasificador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
