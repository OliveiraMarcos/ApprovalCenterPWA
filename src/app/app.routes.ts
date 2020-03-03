import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { AppHomeComponent } from './onsenui/app-home/app-home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const rootRouterConfig : Routes = [
    //{path: '', redirectTo:'/app', pathMatch:'full'},
    {path:'',component: AppHomeComponent},
    {path:'reseter/:email/:token',component: ResetPasswordComponent},

    {path: '**',component:AppHomeComponent}
];


@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig,{
            useHash:false
        })
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutesModule{}