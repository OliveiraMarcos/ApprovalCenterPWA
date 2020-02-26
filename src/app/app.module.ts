import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './onsenui/nav/toolbar/toolbar.component';
import { SideMenuComponent } from './onsenui/menu/side-menu/side-menu.component';
import { ApprovalComponent } from './approval/approval/approval.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register/register.component';
import { AccountComponent } from './account/account/account.component';
import { LoggedComponent } from './onsenui/nav/logged/logged.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideMenuComponent,
    ApprovalComponent,
    CategoryComponent,
    RegisterComponent,
    AccountComponent,
    LoggedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

