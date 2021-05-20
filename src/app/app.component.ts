import { Component, OnInit } from '@angular/core';
import { FoodModel } from './model/food.interface';
import { FoodItemsService } from './services/food-items.service';
import { JournalingService } from './services/journaling.service';
import { map, pluck, tap } from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [FoodItemsService]
})
export class AppComponent implements OnInit {
  title = 'mentoring';
  foodItems: FoodModel[];

  constructor(public foodItemSerivce: FoodItemsService, public journalService: JournalingService) { }

  ngOnInit() {
    this.foodItemSerivce.getFoodItems().pipe(
      pluck('foodItems'),
      tap(response => {
        console.log(response);
      })
    ).subscribe(
      foodItems => this.foodItems = foodItems
    )
  }

  onAddFood(food: FoodModel) {
    this.foodItemSerivce.addFood(food).pipe(
      pluck('foodItems'),
      map(foodItems => foodItems[foodItems.length - 1])
    ).subscribe(
      foodItem => this.foodItems.push(foodItem)
    )
  }
}

