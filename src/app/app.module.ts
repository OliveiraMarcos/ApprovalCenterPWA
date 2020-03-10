import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { OnsenuiModule } from './onsenui/onsenui.module';
import { AccountModule } from './account/account.module';
import { ApprovalModule } from './approval/approval.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './account/register/register.component';
import { AppRoutesModule } from './app.routes';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AccountComponent } from './account/account/account.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    OnsenuiModule,
    AccountModule,
    ApprovalModule,
    ReactiveFormsModule,
    AppRoutesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

