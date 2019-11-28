import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoComponent } from './sessao.component';

describe('SessaoComponent', () => {
  let component: SessaoComponent;
  let fixture: ComponentFixture<SessaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
