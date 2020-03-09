import { Component, ViewChild } from '@angular/core';
import { AccountComponent } from './account/account/account.component';

// <router-outlet></router-outlet>

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
