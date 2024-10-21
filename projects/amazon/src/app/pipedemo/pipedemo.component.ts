import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css'],
})
export class PipedemoComponent {
  public msg = 'WelCOMe TO ANgular';

  // public product = {
  //   Name: 'Samsung TV',
  //   Price: 45000.5,
  //   Mfd: new Date('2020-03-20'),
  //   Sales: 0.259,
  // };

  // public data: { [key: number]: string } = {
  //   1: 'Samsung TV',
  //   2: 'Nike Casuals',
  // };

  // products = ['TV', 'Mobile', 'Shoe', 'Watch'];

  public notifications: any = [];

  public notificationsMap: { [key: string]: string } = {
    '=0': 'No Missed Calls',
    '=1': 'One Missed Call',
    other: '# Missed Calls',
  };
  public display = false;

  public GameClick() {
    this.notifications.push('Game Installed');
    alert('Installed Successfully..');
  }

  public FBClick() {
    this.notifications.push('Facebook Updated');
    alert('Updated Successfully');
  }

  public ClearAll() {
    this.notifications = [];
  }

  public showNotifications() {
    this.display = this.display == true ? false : true;
  }

  products = [
    { Name: 'Samsung TV', City: 'Goa' },
    { Name: 'Nike Casuals', City: 'Delhi' },
    { Name: 'Mobile', City: 'Hyderabad' },
    { Name: 'Watch', City: 'Mumbai' },
  ];
  statusMessage = {
    Hyderabad: 'Delivery in 2 Days',
    Delhi: 'Delivery in 5 Days',
    Mumbai: 'Not Deliverable',
    Other: 'Unknown-We Will Update',
  };
}
