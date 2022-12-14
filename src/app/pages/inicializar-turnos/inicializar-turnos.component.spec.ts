import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicializarTurnosComponent } from './inicializar-turnos.component';

describe('InicializarTurnosComponent', () => {
  let component: InicializarTurnosComponent;
  let fixture: ComponentFixture<InicializarTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicializarTurnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicializarTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
