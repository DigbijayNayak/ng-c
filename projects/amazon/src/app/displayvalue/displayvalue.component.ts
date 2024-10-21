import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-displayvalue',
  templateUrl: './displayvalue.component.html',
  styleUrls: ['./displayvalue.component.css'],
})
export class DisplayvalueComponent {
  @Input() username: any;
  previousvalue: any;
  currentvalue: any;
  msg: any;
  ngOnChanges(changes: SimpleChanges) {
    for (var property in changes) {
      let change = changes[property];
      this.currentvalue = change.currentValue;
      this.previousvalue = change.previousValue;
    }

    if (this.currentvalue == this.previousvalue) {
      this.msg = 'No Change Detected';
    } else {
      this.msg = 'Change Detected';
    }
  }
}
