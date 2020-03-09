import { Component, ViewChild } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { SideMenuComponent } from '../menu/side-menu/side-menu.component';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from 'src/app/approval/category/category.component';
import { ApprovalComponent } from 'src/app/approval/approval/approval.component';

@Component({
  selector: 'ons-page[app-logged]',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent {

  sideMenu = SideMenuComponent;
  content = HomeComponent;
  @ViewChild('splitter') splitter;
  @ViewChild('navi') private navi: OnsNavigator;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe((page) => {
      if(page == undefined){
        this.splitter.nativeElement.side.open();
      }else{
        this.navi.nativeElement.resetToPage(page, { animation: 'fade' });
        this.splitter.nativeElement.side.close();
      }
    });

    this.menuService.pages = this.routes;
  }

  routes = {
    'category':CategoryComponent,
    'approval':ApprovalComponent
  };

}
