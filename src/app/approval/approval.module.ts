import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval/approval.component';
import { CategoryComponent } from './category/category.component';
import { Store } from './store/approval.store';
import { OnsenuiModule } from '../onsenui/onsenui.module';
import { ApprovalFormComponent } from './approval-form/approval-form.component';


@NgModule({
    declarations:[
        ApprovalComponent,
        CategoryComponent,
        ApprovalFormComponent
    ],
    imports:[
        CommonModule,
        OnsenuiModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        ApprovalComponent,
        CategoryComponent
    ],
    providers:[Store]
})
export class ApprovalModule {}