import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DynamicFormRendererModule } from '@phoenix/ui/dynamic-form-renderer';
import { GraphComponent } from './graph/graph.component';
import { SearchUiComponent } from './search/search-ui/search-ui.component';
import { SearchComponent } from './search/search.component';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './+state/effect/search.effects';
import { SearchFacade } from './+state/facade/search.facade';

const routes: Routes = [
    {
        path: 'graph',
        component: GraphComponent,
        pathMatch: 'full',
    },
    {
        path: '',
        component: SearchComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [
        GraphComponent,
        // SearchUiComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        // DynamicFormRendererModule,
        EffectsModule.forFeature([SearchEffects])
    ],
    providers: [SearchFacade]
})

export class SearchModule { }