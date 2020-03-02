import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { AppHomeComponent } from './onsenui/app-home/app-home.component';

export const rootRouterConfig : Routes = [
    //{path: '', redirectTo:'/app', pathMatch:'full'},
    {path:'',component: AppHomeComponent},
    {path:'reseter/:email/:token',component: ResetPasswordComponent},

    {path: '**',component:AppHomeComponent}
];