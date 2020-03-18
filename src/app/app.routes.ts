import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { AppHomeComponent } from './onsenui/app-home/app-home.component';
import { NgModule } from '@angular/core';

export const rootRouterConfig : Routes = [
    // {path: '', redirectTo:'/app', pathMatch:'full'},
    {path: 'reset', component: ResetPasswordComponent},
    {path: '', component: AppHomeComponent},

    {path: '**', component: AppHomeComponent}
];


@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, {enableTracing:false,useHash:false})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutesModule{}