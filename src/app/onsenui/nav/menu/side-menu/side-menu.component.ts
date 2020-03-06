import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { MenuService } from '../menu.service';
import * as ons from 'onsenui';
import { User } from 'src/app/account/services/auth/user';
import { AuthenticationService } from 'src/app/account/services/auth/authentication.service';



@Component({
  selector: 'ons-page[app-side-menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent  implements OnInit{
  user:User;
  constructor(private navigator: OnsNavigator, 
              private menuService: MenuService, 
              private authServer:AuthenticationService) {
                console.log('constructor');
  }

  SignOut(){
    this.authServer.logout();
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
    
  }
  goTo(page){
    this.menuService.load(page);
  }

  ngOnInit(): void {
    this.user = this.authServer.currentUserValue;
    console.log('ngOnInit');
    // if (this.user && this.user.isActive) {
    //   return;
    // }
    // this.SignOut();
    // setTimeout(function(){
    //     ons.notification.toast('Session expired!', {timeout: 2000});
    // },300);
  }
}

