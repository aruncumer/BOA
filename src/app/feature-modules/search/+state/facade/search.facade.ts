import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Isearch } from '../../interface/isearch';
import * as SearchActions from '../actions/search.actions';
import * as fromApp from '../reducer/search.reducer';
import * as SearchSelectors from '../selector/search.selectors';

@Injectable()
export class SearchFacade {
    graphData$ = this.store.pipe(select(SearchSelectors.selectGraphData));
    allFormData$ = this.store.pipe(select(SearchSelectors.selectFornData));
    tableData$ = this.store.pipe(select(SearchSelectors.selectTableData));

    constructor(private store: Store<fromApp.AppPartialState>) { }

    loadSucces = () => {
        this.store.dispatch(SearchActions.loadSearchsSuccess());
    };

    updateAIT = (ait: string) => {
        this.store.dispatch(SearchActions.addAIT({ ait }));
    };
    updateCI = (ci: string[]) => {
        this.store.dispatch(SearchActions.addCI({ ci }));
    };
    updateSEARCH_TEXT = (search_text: string) => {
        this.store.dispatch(SearchActions.addSEARCH_TEXT({ search_text }));
    };
    updateSEARCH_TAGS = (search_tags: string[]) => {
        this.store.dispatch(SearchActions.addSEARCH_TAGS({ search_tags }));
    };
    updateDATE = (date: string) => {
        this.store.dispatch(SearchActions.addDATE({ date }));
    };

    saveGraphData = (graphData: any) => {
        this.store.dispatch(SearchActions.saveGraphData(graphData));
    };

    getGraphData = () => {
        return this.graphData$;
    };

    getAllFormData = () => {
        return this.allFormData$;
    };

    callSearchAPI = (data: Isearch) => {
        this.store.dispatch(SearchActions.callSearchAPI({ data }));
    };

    saveFormResults = (data: any) => {
        this.updateAIT(data.AIT);
        this.updateCI(data.CI.split(' '));
        this.updateSEARCH_TEXT(data.SEARCH_TEXT);
        this.updateSEARCH_TAGS(data.SEARCH_TAGS.split(' '));
        this.updateDATE(data.DATE);
    };

    getTableData = () => {
        return this.tableData$;
    };
}


