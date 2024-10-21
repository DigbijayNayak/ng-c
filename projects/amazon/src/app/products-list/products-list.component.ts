import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products = [
    {
      Name: 'JBL Speaker',
      Price: 45000.55,
      Photo: 'assets/jblspeaker.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Earpods',
      Price: 4000.55,
      Photo: 'assets/earpods.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Nike Casuals',
      Price: 9000.55,
      Photo: 'assets/shoe.jpg',
      Category: 'Footwear',
    },
    {
      Name: 'Lee Cooper Boot',
      Price: 3000.55,
      Photo: 'assets/shoe1.jpg',
      Category: 'Footwear',
    },
    {
      Name: 'Shirt',
      Price: 2600.55,
      Photo: 'assets/shirt.jpg',
      Category: 'Fashion',
    },
    {
      Name: 'Jeans',
      Price: 2000.55,
      Photo: 'assets/jeans.jpg',
      Category: 'Fashion',
    },
  ];

  ElectronicsCount = this.products.filter((x) => x.Category == 'Electronics')
    .length;
  FootwearCount = this.products.filter((x) => x.Category == 'Footwear').length;
  FashionCount = this.products.filter((x) => x.Category == 'Fashion').length;
  selectedCategoryValue = 'All';
  onFilterCategoryChanged(selectedCategoryName: any) {
    this.selectedCategoryValue = selectedCategoryName;
  }
}
