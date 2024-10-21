import { Component } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css'],
})
export class MousedemoComponent {
  styleObj = {
    'background-color': '',
  };

  // onMouseOver(e: any) {
  //   this.styleObj = {
  //     'background-color': e.target.id,
  //   };
  // }

  // onMouseOut() {
  //   this.styleObj = {
  //     'background-color': 'black',
  //   };
  // }

  // public onMouseOver(e: any) {
  //   e.target.stop();
  // }
  // public onMouseOut(e: any) {
  //   e.target.start();
  // }

  public offerImage = 'assets/giftbox.png';
  public adImage = 'assets/Pepsi.jpg';
  public Ad1() {
    this.adImage = 'assets/rDigital.jpg';
  }
  public Ad2() {
    this.adImage = 'assets/Pepsi.jpg';
  }
  public onMouseOver(e: any) {
    e.target.stop();
  }
  public onMouseOut(e: any) {
    e.target.start();
  }
  public onMouseDown() {
    this.offerImage = 'assets/offerbox.png';
  }
  public onMouseUp() {
    this.offerImage = 'assets/giftbox.png';
  }
}
