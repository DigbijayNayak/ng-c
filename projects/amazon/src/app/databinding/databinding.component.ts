import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  product = {
    Name: 'Samsung TV',
    Price: 45000.55,
    InStock: true,
  };
  disableButton = false;
}
