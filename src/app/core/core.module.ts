/* external Modules imports*/
import {
    ModuleWithProviders, NgModule, Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Internal Modules imports */
import { SharedModule } from "../shared/shared.module";

/* Services imports */
import { AppService } from './services/app.service';

/* Components imports */
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

// component, directive, pipes declarations in the following variable
const MY_DECLARATIONS = [
    HomeComponent,
    HeaderComponent,
    FooterComponent
];

@NgModule({
    declarations: [...MY_DECLARATIONS],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [...MY_DECLARATIONS],
    providers: [],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}