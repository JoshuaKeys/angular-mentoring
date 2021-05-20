import { Component } from '@angular/core';
import { FoodModel } from './model/food.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mentoring';

  foodItems: FoodModel[] = [
    {
      imageUrl: 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg',
      name: 'Home made Spaghetti',
      description: 'Very Delicious Spaghetti'
    },
    {
      imageUrl: 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg',
      name: 'Home made Spaghetti',
      description: 'Very Delicious Spaghetti'
    },
    {
      imageUrl: 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg',
      name: 'Home made Spaghetti',
      description: 'Very Delicious Spaghetti'
    },
    {
      imageUrl: 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg',
      name: 'Home made Spaghetti',
      description: 'Very Delicious Spaghetti'
    },
  ]

  onAddFood(food: FoodModel) {
    this.foodItems.push(food);
  }
}

