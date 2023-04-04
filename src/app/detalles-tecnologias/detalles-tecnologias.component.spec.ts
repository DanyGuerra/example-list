import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTecnologiasComponent } from './detalles-tecnologias.component';

describe('DetallesTecnologiasComponent', () => {
  let component: DetallesTecnologiasComponent;
  let fixture: ComponentFixture<DetallesTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTecnologiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
