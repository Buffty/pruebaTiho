import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasureroBajoIzquierdaComponent } from './basurero-bajo-izquierda.component';

describe('BasureroBajoIzquierdaComponent', () => {
  let component: BasureroBajoIzquierdaComponent;
  let fixture: ComponentFixture<BasureroBajoIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasureroBajoIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasureroBajoIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
