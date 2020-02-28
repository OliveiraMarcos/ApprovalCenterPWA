import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
    declarations:[
        RegisterComponent,
    ],
    imports:[
        CommonModule,
        CustomFormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    exports:[
        RegisterComponent
    ]
})
export class RegisterModule {}