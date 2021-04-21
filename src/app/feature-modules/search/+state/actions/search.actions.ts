import { createAction, props } from '@ngrx/store';

export const loadSearchs = createAction('[Search] Load Searchs');

export const loadSearchsSuccess = createAction(
    '[Search] Load Searchs Success'
    // props<{ data: any }>()
);

export const loadSearchsFailure = createAction('[Search] Load Searchs Failure', props<{ error: any }>());

export const getGraphData = createAction(
    '[Search] Request Graph Data'
    // we may need props
    // props<{ ait: string }>()
);

export const addAIT = createAction('[Search] addAITs', props<{ ait: string }>());
export const addCI = createAction('[Search] addCIs', props<{ ci: string[] }>());
export const addSEARCH_TEXT = createAction('[Search] addSEARCH_TEXT', props<{ search_text: string }>());
export const addSEARCH_TAGS = createAction('[Search] addSEARCH_TAGS', props<{ search_tags: string[] }>());
export const addDATE = createAction('[Search] addDATE', props<{ date: string }>());

export const saveFormResults = createAction(
    '[Search] Save Form Results',
    // we should change data type
    props<{ data: any }>()
);

export const saveGraphData = createAction(
    '[Search] Save Graph Data',
    // we should change data type
    props<{ data: any }>()
);

export const callSearchAPI = createAction('[Search] Call Search API', props<{ data: any }>());