import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodItemExampleComponent } from './components/food-item-example/food-item-example.component';
import { FoodItemDescriptionComponent } from './components/food-item-description/food-item-description.component';
import { FoodItemsService } from './services/food-items.service';
import { JournalingService } from './services/journaling.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    FoodItemComponent,
    FoodItemExampleComponent,
    FoodItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FoodItemsService, JournalingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
