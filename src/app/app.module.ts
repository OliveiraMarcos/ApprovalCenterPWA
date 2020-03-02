import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { OnsenuiModule } from './onsenui/onsenui.module';
import { AccountModule } from './account/account.module';
import { ApprovalModule } from './approval/approval.module';
import { CategoryModule } from './category/category.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './account/register/register.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppHomeComponent } from './onsenui/app-home/app-home.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    OnsenuiModule,
    AccountModule,
    ApprovalModule,
    CategoryModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig,{
      useHash:false
  })
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

