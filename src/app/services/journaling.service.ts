import { Injectable } from '@angular/core';
import { FoodModel } from '../model/food.interface';

@Injectable()
export class JournalingService {
  journals: string[] = [];
  addToJournal(food: FoodModel) {
    this.journals.push(`${food.name} was added`)
  }
  constructor() { }
}
