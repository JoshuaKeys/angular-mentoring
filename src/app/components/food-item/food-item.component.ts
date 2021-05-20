import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodModel } from 'src/app/model/food.interface';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FoodItemComponent implements OnInit {

  @Input() food: FoodModel
  constructor() { }

  ngOnInit(): void {
  }

}
