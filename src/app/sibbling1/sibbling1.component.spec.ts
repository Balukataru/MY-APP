import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibbling1Component } from './sibbling1.component';

describe('Sibbling1Component', () => {
  let component: Sibbling1Component;
  let fixture: ComponentFixture<Sibbling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibbling1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibbling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
