import { Component } from '@angular/core';

@Component({
  selector: 'app-trackdemo',
  templateUrl: './trackdemo.component.html',
  styleUrls: ['./trackdemo.component.css'],
})
export class TrackdemoComponent {
  public products = [
    { ProductId: 1, Name: 'Samsung TV', Price: 45000.44 },
    { ProductId: 2, Name: 'Mobile', Price: 15000.44 },
    { ProductId: 3, Name: 'Nike Casuals', Price: 5000.44 },
  ];
  public productname: any;
  public productprice: any;
  public newProduct = {
    ProductId: 0,
    Name: '',
    Price: 0,
  };
  public AddProduct() {
    this.newProduct = {
      ProductId: this.products.length + 1,
      Name: this.productname,
      Price: this.productprice,
    };
    this.products.push(this.newProduct);
    alert('Record Inserted');
    this.productname = '';
    this.productprice = '';
  }

  public AddProductUsingApi() {
    this.products = [
      { ProductId: 1, Name: 'Samsung TV', Price: 45000.44 },
      { ProductId: 2, Name: 'Mobile', Price: 15000.44 },
      { ProductId: 3, Name: 'Nike Casuals', Price: 5000.44 },
      { ProductId: 4, Name: 'Watch', Price: 15000.44 },
    ];
  }
  public TrackChange(index: any, product: any) {
    return product.ProductId;
  }
}
