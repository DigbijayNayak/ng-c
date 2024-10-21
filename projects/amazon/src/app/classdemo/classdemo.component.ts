import { Component } from '@angular/core';

@Component({
  selector: 'app-classdemo',
  templateUrl: './classdemo.component.html',
  styleUrls: ['./classdemo.component.css'],
})
export class ClassdemoComponent {
  public ONTextEffects = false;
  public ONBorderEffects = false;
  public ONBackgroundEffects = false;

  public txtEven: any;
  applyErrorStyle = false;
  applyValidStyle = false;
  OnBlur() {
    if (this.txtEven % 2 == 0) {
      this.applyValidStyle = true;
      this.applyErrorStyle = false;
    } else {
      this.applyValidStyle = false;
      this.applyErrorStyle = true;
    }
  }
}
