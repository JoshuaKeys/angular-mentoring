import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FoodModel } from 'src/app/model/food.interface';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {
  // @Output('click') foodAdded: EventEmitter<FoodModel>;
  @Output('foodAdded') click = new EventEmitter<FoodModel>();
  addFoodForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    // this.foodAdded = new EventEmitter<FoodModel>();
    this.addFoodForm = new FormGroup({
      name: new FormControl(''),
      imageUrl: new FormControl(''),
      description: new FormControl('')
    });
  }

  submit() {
    const data: FoodModel = this.addFoodForm.value;
    this.click.emit(data)
  }

}
