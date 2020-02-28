import { Component, ViewChild } from '@angular/core';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  template: `
  <ons-navigator [page]="initialPage"></ons-navigator>
  `,
  styles: []
})
export class AppComponent {
  initialPage = AccountComponent;
}
