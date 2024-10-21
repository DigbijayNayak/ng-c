import { Component } from '@angular/core';

@Component({
  selector: 'app-eventsdemo',
  templateUrl: './eventsdemo.component.html',
  styleUrls: ['./eventsdemo.component.css'],
})
export class EventsdemoComponent {
  msg: any;
  txtName: any;
  OnFocus() {
    this.msg = 'Name in Block Letters';
  }

  OnBlur() {
    this.msg = '';
    this.txtName = this.txtName.toUpperCase();
  }

  onCut() {
    this.msg = 'Removed and Placed on Clipboard';
  }

  onCopy() {
    this.msg = 'Copied to Clipboard';
  }

  onPaste() {
    this.msg = 'Inserted from Clipboard';
  }

  public onSubmit(e: any) {
    alert(e.target.elements[0].id);
  }
  // public onSubmit() {
  //   alert('Form Submitted');
  // }
  public onChange(e: any) {
    if (e.target.value == 'submit') {
      // this.onSubmit();
    } else {
      alert('Form will Reset');
    }
  }
}
