import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';

@NgModule({
    declarations:[
        AccountComponent,
    ],
    imports:[
        CommonModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        AccountComponent
    ]
})

export class AccountModule{}