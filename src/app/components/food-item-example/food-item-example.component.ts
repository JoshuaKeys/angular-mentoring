import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FoodModel } from 'src/app/model/food.interface';
import { FoodItemsService } from 'src/app/services/food-items.service';

@Component({
  selector: 'app-food-item-example',
  templateUrl: './food-item-example.component.html',
  styleUrls: ['./food-item-example.component.scss'],
})
export class FoodItemExampleComponent implements OnInit, OnChanges, DoCheck {
  @Input() food: FoodModel;
  _food: FoodModel;
  constructor(private foodService: FoodItemsService) { }
  ngOnInit(): void {
    console.log(this.foodService.getFoodItems())
  }
  ngDoCheck() {
    this._food = this.food;
    this._food.name = this._food.name.toUpperCase();
  }
  getFood() {
    console.log(this.foodService.getFoodItems());
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
  }
}
