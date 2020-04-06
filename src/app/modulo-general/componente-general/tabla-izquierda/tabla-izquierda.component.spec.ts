import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIzquierdaComponent } from './tabla-izquierda.component';

describe('TablaIzquierdaComponent', () => {
  let component: TablaIzquierdaComponent;
  let fixture: ComponentFixture<TablaIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
