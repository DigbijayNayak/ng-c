import { Component } from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css'],
})
export class IterationdemoComponent {
  public products = [
    {
      Name: 'JBL Speaker',
      Photo: 'assets/jblspeaker.jpg',
      Likes: 0,
      Dislikes: 0,
    },
    { Name: 'Nike Casuals', Photo: 'assets/shoe.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Shirt', Photo: 'assets/shirt.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Jeans', Photo: 'assets/jeans.jpg', Likes: 0, Dislikes: 0 },
  ];
}
