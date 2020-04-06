import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGeneralComponent } from './componente-general.component';

describe('ComponenteGeneralComponent', () => {
  let component: ComponenteGeneralComponent;
  let fixture: ComponentFixture<ComponenteGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
