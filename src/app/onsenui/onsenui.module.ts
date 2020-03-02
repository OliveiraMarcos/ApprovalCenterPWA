import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { CommonModule } from '@angular/common';
import { LoggedComponent } from './nav/logged/logged.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SideMenuComponent } from './nav/menu/side-menu/side-menu.component';
import { HomeComponent } from './nav/home/home.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AccountModule } from '../account/account.module';

@NgModule({
    declarations:[
        LoggedComponent,
        HomeComponent,
        ToolbarComponent,
        SideMenuComponent,
        AppHomeComponent,
    ],
    imports:[
        CommonModule,
        OnsenModule,
        AccountModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        LoggedComponent,
        HomeComponent,
        ToolbarComponent,
        SideMenuComponent,
        OnsenModule,
        AppHomeComponent
    ]
})

export class OnsenuiModule{}