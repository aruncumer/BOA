import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { PHX_COMPONENT_MODULES } from './phoenix-components.const';
// import { PhxTranslateModule } from '@phoenix/ui/translate';

@NgModule({
    imports: [
        FormsModule,
        // ...PHX_COMPONENT_MODULES,
        // PhxTranslateModule.forChild()
    ],
    declarations: [

    ],

    providers: [

    ],

    exports: [
        FormsModule,
        // ...PHX_COMPONENT_MODULES,
        // PhxTranslateModule
    ]
})

export class SharedModule { }

