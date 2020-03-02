import { Component } from '@angular/core';
import { AccountComponent } from 'src/app/account/account/account.component';

@Component({
  selector: 'app-app-home',
  template: `
    <ons-navigator [page]="initialPage"></ons-navigator>
  `,
  styles: []
})
export class AppHomeComponent  {
  initialPage = AccountComponent;
}
