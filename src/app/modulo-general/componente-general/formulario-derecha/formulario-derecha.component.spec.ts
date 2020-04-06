import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDerechaComponent } from './formulario-derecha.component';

describe('FormularioDerechaComponent', () => {
  let component: FormularioDerechaComponent;
  let fixture: ComponentFixture<FormularioDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
