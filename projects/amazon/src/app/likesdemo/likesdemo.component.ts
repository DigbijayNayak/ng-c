import { Component } from '@angular/core';

@Component({
  selector: 'app-likesdemo',
  templateUrl: './likesdemo.component.html',
  styleUrls: ['./likesdemo.component.css'],
})
export class LikesdemoComponent {
  public products = [
    {
      Name: 'JBL Speaker',
      Photo: 'assets/jblspeaker.jpg',
      Likes: 0,
      Dislikes: 0,
    },
    { Name: 'Nike Casuals', Photo: 'assets/shoe.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Shirt', Photo: 'assets/shirt.jpg', Likes: 0, Dislikes: 0 },
  ];
  public LikesCounter(item: any) {
    item.Likes++;
  }
  public DislikesCounter(item: any) {
    item.Dislikes++;
  }
}
