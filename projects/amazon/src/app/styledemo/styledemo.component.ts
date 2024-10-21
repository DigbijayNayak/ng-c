import { Component } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css'],
})
export class StyledemoComponent {
  styleObj = {};
  bgcolor: any;
  forecolor: any;
  align: any;
  ApplyStylesClick() {
    this.styleObj = {
      'background-color': this.bgcolor,
      color: this.forecolor,
      'text-align': this.align,
    };
  }
  onMouseMove(e: any) {
    this.styleObj = {
      position: 'fixed',
      top: e.clientY + 'px',
      left: e.clientX + 'px',
    };
  }
}
