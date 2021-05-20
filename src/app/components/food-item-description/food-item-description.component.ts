import { Component, Input, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/model/food.interface';

@Component({
  selector: 'app-food-item-description',
  templateUrl: './food-item-description.component.html',
  styleUrls: ['./food-item-description.component.scss']
})
export class FoodItemDescriptionComponent implements OnInit {
  @Input() food: FoodModel;
  constructor() { }

  ngOnInit(): void {
  }

}
