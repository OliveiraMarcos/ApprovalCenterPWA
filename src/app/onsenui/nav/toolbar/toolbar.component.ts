import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { AuthenticationService } from 'src/app/account/auth/authentication.service';
import { User } from 'src/app/account/auth/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  implements OnInit{
  
  user:User;

  constructor(private menuService: MenuService, private authServer:AuthenticationService) { }
  openMenu() {
    this.menuService.open();
  }

  ngOnInit(): void {
    this.user = this.authServer.currentUserValue;
  }
}
