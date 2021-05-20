import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemDescriptionComponent } from './food-item-description.component';

describe('FoodItemDescriptionComponent', () => {
  let component: FoodItemDescriptionComponent;
  let fixture: ComponentFixture<FoodItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
