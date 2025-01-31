import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibbling2Component } from './sibbling2.component';

describe('Sibbling2Component', () => {
  let component: Sibbling2Component;
  let fixture: ComponentFixture<Sibbling2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibbling2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibbling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
