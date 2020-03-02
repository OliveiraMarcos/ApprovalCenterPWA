import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { MenuService } from '../menu.service';

@Component({
  selector: 'ons-page[app-side-menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  constructor(private navigator: OnsNavigator, private menuService: MenuService) {
  }
  SignOut(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }
  goTo(page){
    this.menuService.load(page);
  }
}

