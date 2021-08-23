import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assmt3Component } from './assmt3.component';

describe('Assmt3Component', () => {
  let component: Assmt3Component;
  let fixture: ComponentFixture<Assmt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assmt3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assmt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
