import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpounoComponent } from './cuerpouno.component';

describe('CuerpounoComponent', () => {
  let component: CuerpounoComponent;
  let fixture: ComponentFixture<CuerpounoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpounoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
