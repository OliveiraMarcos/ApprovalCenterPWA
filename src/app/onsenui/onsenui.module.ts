import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { CommonModule } from '@angular/common';
import { LoggedComponent } from './nav/logged/logged.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SideMenuComponent } from './nav/menu/side-menu/side-menu.component';

@NgModule({
    declarations:[
        LoggedComponent,
        HomeComponent,
        ToolbarComponent,
        SideMenuComponent,
    ],
    imports:[
        CommonModule,
        OnsenModule
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
    ]
})

export class OnsenuiModule{}