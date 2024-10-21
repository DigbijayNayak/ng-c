import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css'],
})
export class SwitchdemoComponent {
  product = {
    Name: 'Nike Casuals',
    Price: 4500.55,
    Photo: 'assets/shoe.png',
    Description: 'Something about Nike Casuals...',
  };

  selectedView = 'info';
  views = ['info', 'preview', 'more'];
  count = 0;

  ChangeView(obj: any) {
    this.selectedView = obj.target.name;
  }

  NextClick() {
    this.count++;
    this.selectedView = this.views[this.count];
  }
  PrevClick() {
    this.count--;
    this.selectedView = this.views[this.count];
  }
}
