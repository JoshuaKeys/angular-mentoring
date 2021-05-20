import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemExampleComponent } from './food-item-example.component';

describe('FoodItemExampleComponent', () => {
  let component: FoodItemExampleComponent;
  let fixture: ComponentFixture<FoodItemExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
