import { Action, createReducer, on, State } from '@ngrx/store';

import * as SearchActions from '../actions/search.actions';
import { SearchEntity } from '../model/search.model';

export const searchFeatureKey = 'search';

export interface AppPartialState {
    readonly [searchFeatureKey]: State<SearchEntity>;
}

export const initialState = {
    // default values when app starts
    AIT: '',
    CI: [''],
    SEARCH_TEXT: '',
    SEARCH_TAGS: [''],
    DATE: '',
    TABLE_DATA: null,
    GRAPH_DATA: null,
};

// when action happens update the state by making new object with unchanged data then updated data
export const appReducer = createReducer(
    initialState,

    // on(SearchActions.loadSearchs Success),
    on(SearchActions.loadSearchsFailure, (state, { error }) => ({ ...state, error })),
    on(SearchActions.addAIT, (state, { ait }) => ({ ...state, AIT: ait })),
    on(SearchActions.addCI, (state, { ci }) => ({ ...state, CI: ci })),
    on(SearchActions.addSEARCH_TEXT, (state, { search_text }) => ({ ...state, SEARCH_TEXT: search_text })),
    on(SearchActions.addSEARCH_TAGS, (state, { search_tags }) => ({ ...state, SEARCH_TAGS: search_tags })),
    on(SearchActions.addDATE, (state, { date }) => ({ ...state, DATE: date })),
    on(SearchActions.saveGraphData, (state, graphData) => ({ ...state, GRAPH_DATA: graphData })),
    on(SearchActions.saveFormResults, (state, tableData) => ({ ...state, TABLE_DATA: tableData.data }))
);

export function searchReducer(state: any | undefined, action: Action) {
    return appReducer(state, action);
}

