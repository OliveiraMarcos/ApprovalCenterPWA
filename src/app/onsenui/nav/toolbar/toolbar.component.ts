import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { AuthenticationService } from 'src/app/account/auth/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{
  
  constructor(private menuService: MenuService) { }
  openMenu() {
    this.menuService.open();
  }

}
