import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerCustomHeaderComponent } from './datepicker-custom-header/datepicker-custom-header.component';
// import { PHX_COMPONENT_MODULES } from './phoenix-components.const';
// import { PhxTranslateModule } from '@phoenix/ui/translate';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CustomDateHeader, MATERIAL_DATEPICKER_FORMATS } from './custom-dateheader/custom-dateheader.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
    imports: [
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule
        // ...PHX_COMPONENT_MODULES,
        // PhxTranslateModule.forChild()
    ],

    declarations: [
        DatepickerCustomHeaderComponent
    ],

    providers: [
        {
            provide: DateAdapter,
            useClass: CustomDateHeader,
            deps: [MAT_DATE_LOCALE]
        }, {
            provide: MAT_DATE_FORMATS,
            useValue: MATERIAL_DATEPICKER_FORMATS
        },
    ],

    exports: [
        FormsModule,
        DatepickerCustomHeaderComponent,
        MatChipsModule,
        MatIconModule
        // ...PHX_COMPONENT_MODULES,
        // PhxTranslateModule
    ]
})

export class SharedModule { }

