import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodResponseModel } from '../model/food-response.model';
import { FoodModel } from '../model/food.interface';
import { JournalingService } from './journaling.service';

@Injectable()
export class FoodItemsService {
  getFoodItems(): Observable<FoodResponseModel> {
    return this.httpClient.get<FoodResponseModel>('/food-items')
  }
  addFood(food: FoodModel): Observable<FoodResponseModel> {

    this.journalingService.addToJournal(food);
    return this.httpClient.post<FoodResponseModel>('/food-items', food);
  }

  // Add Delete Method
  constructor(private journalingService: JournalingService, private httpClient: HttpClient) { }
}
