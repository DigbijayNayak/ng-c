import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
})
export class ConditionsComponent {
  public products = [
    {
      Name: 'Earpods',
      Price: 4500.55,
      Photo: 'assets/earpods.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Nike Casuals',
      Price: 6000.54,
      Photo: 'assets/shoe.jpg',
      Category: 'Footwear',
    },
    {
      Name: 'JBL Speaker',
      Price: 2000.54,
      Photo: 'assets/jblspeaker.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Lee Cooper Boot',
      Price: 4000.54,
      Photo: 'assets/shoe1.jpg',
      Category: 'Footwear',
    },
    {
      Name: 'Shirt',
      Price: 1000.54,
      Photo: 'assets/shirt.jpg',
      Category: 'Fashion',
    },
    {
      Name: 'Jeans',
      Price: 3000.54,
      Photo: 'assets/jeans.jpg',
      Category: 'Fashion',
    },
  ];
  public categories = ['All', 'Electronics', 'Footwear', 'Fashion'];
  public selectedCategoryName = 'All';
}
