import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval.component';


@NgModule({
    declarations:[
        ApprovalComponent,
    ],
    imports:[
        CommonModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        ApprovalComponent
    ]
})
export class ApprovalModule {}