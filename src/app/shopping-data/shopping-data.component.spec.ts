import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDataComponent } from './shopping-data.component';

describe('ShoppingDataComponent', () => {
  let component: ShoppingDataComponent;
  let fixture: ComponentFixture<ShoppingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
