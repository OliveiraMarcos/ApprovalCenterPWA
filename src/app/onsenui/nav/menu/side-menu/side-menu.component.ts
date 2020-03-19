import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { MenuService } from '../menu.service';
import { User } from 'src/app/account/services/auth/user';
import { AuthenticationService } from 'src/app/account/services/auth/authentication.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from 'src/app/approval/store/approval.store';
import { ApprovalService } from 'src/app/approval/services/approval.service';
import { Approval } from 'src/app/approval/approval/approval';
import { map, groupBy, mergeMap, toArray } from 'rxjs/operators';
import { ToastService } from '../../ons/toast.service';



@Component({
  selector: 'ons-page[app-side-menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent  implements OnInit{
  user: User;
  subscription: Subscription;
  constructor(private navigator: OnsNavigator, 
              private menuService: MenuService, 
              private authServer:AuthenticationService,
              private approvalService: ApprovalService,
              private toast:ToastService) {
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
    if (this.user && this.user.isActive) {
      this.subscription = this.approvalService.getAll().subscribe();
      return;
    }
    this.SignOut();
    setTimeout(function(){
      this.toast.showToast('Session expired!');
    },300);
  }
}

