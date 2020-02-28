import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { OnsenuiModule } from '../onsenui/onsenui.module';


@NgModule({
    declarations:[
        CategoryComponent,
    ],
    imports:[
        CommonModule,
        OnsenuiModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        CategoryComponent
    ]
})
export class CategoryModule {}