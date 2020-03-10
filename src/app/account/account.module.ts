import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: Waiting solution of issue #2729 of onsenui
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// TODO: Waiting solution of issue #2729 of onsenui
// import { RegisterComponent } from './register.component';
// TODO: Waiting solution of issue #2729 of onsenui
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// TODO: Waiting solution of issue #2729 of onsenui
// import { AccountComponent } from './account/account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';
import { LogoComponent } from './logo/logo.component';

@NgModule({
    declarations:[
        // AccountComponent,
        // ForgotPasswordComponent,
        // ResetPasswordComponent,
    LogoComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        // AccountComponent,
        // ForgotPasswordComponent,
        // ResetPasswordComponent,
        ReactiveFormsModule,
        LogoComponent
    ],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
    ]
})

export class AccountModule{}