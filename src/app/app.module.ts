import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { OnsenuiModule } from './onsenui/onsenui.module';
import { AccountModule } from './account/account.module';
import { ApprovalModule } from './approval/approval.module';
import { RegisterModule } from './register/register.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OnsenuiModule,
    AccountModule,
    ApprovalModule,
    RegisterModule,
    CategoryModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

