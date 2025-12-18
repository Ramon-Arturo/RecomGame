import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRespuesta } from './boton-respuesta';

describe('BotonRespuesta', () => {
  let component: BotonRespuesta;
  let fixture: ComponentFixture<BotonRespuesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonRespuesta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRespuesta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
