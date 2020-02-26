import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from './onsenui/menu/side-menu/side-menu.component';
import { ToolbarComponent } from './onsenui/nav/toolbar/toolbar.component';
import { MenuService } from './onsenui/nav/menu/menu.service';
import { AccountComponent } from './account/account/account.component';

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
