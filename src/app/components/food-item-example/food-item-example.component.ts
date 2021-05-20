import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FoodModel } from 'src/app/model/food.interface';

@Component({
  selector: 'app-food-item-example',
  templateUrl: './food-item-example.component.html',
  styleUrls: ['./food-item-example.component.scss'],
})
export class FoodItemExampleComponent implements OnInit, OnChanges, DoCheck {
  @Input() food: FoodModel;
  _food: FoodModel;
  constructor() { }
  ngOnInit(): void {
  }
  ngDoCheck() {
    this._food = this.food;
    this._food.name = this._food.name.toUpperCase();
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
  }
}
