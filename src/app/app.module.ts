import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MockApiInterceptor } from '@phoenix/ui/common';
// import {
//   BUNDLE_URL_TOKEN,
//   PhxTranslateModule,
//   PhxTranslateService
// } from '@phoenix/ui/translate';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { entityConfig } from './entity-metadata';
import { SharedModule } from './shared/shared.module';

import { searchReducer } from './feature-modules/search/+state/reducer/search.reducer';

// export function mockServerFactory() {
//   return new MockApiInterceptor(environment['mockApiServer']);
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, // replace with 'NoopAnimationsModule' to disable animations
    HttpClientModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    SharedModule,
    // PhxTranslateModule.forRoot(),
    StoreModule.forRoot({ search: searchReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    /*
    {
      provide: HTTP_INTERCEPTORS, 
      useFactory: mockServerFactory,
      multi: true,
    },*/
    // { 
    //   provide: 'LOG_CONFIG', 
    //   useValue: environment.logConfig 
    // },
    // {
    //   provide: BUNDLE_URL_TOKEN, useValue: environment.translationBundleUrl
    // },
  ],
  bootstrap: [AppComponent],
})


export class AppModule {
  constructor(
    // private translateService: PhxTranslateService
  ) {
    // this.translateService.use(('en_US'));
  }
}