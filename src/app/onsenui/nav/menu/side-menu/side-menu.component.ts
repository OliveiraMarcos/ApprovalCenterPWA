import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { CategoryComponent } from 'src/app/category/category.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'ons-page[app-side-menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  constructor(private navigator: OnsNavigator, private menuService: MenuService) {
  }
  popSignIn(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }
  showCategory(){
    this.menuService.load(CategoryComponent);
  }
}

