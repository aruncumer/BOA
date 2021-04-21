import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'search';

export interface FeatureState {
    AIT: string;
    CI: Array<string>;
    NOTES: string;
    PRODUCT: string;
    DATE: string;
    TABLE_DATA: any;
    GRAPH_DATA: any;
}

export interface AppState {
    feature: FeatureState;
}

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

export const selectGraphData = createSelector(selectFeature, (state: FeatureState) => state.GRAPH_DATA);
export const selectAITData = createSelector(selectFeature, (state: FeatureState) => state.AIT);
export const selectFornData = createSelector(selectFeature, (state: FeatureState) => state);
export const selectTableData = createSelector(selectFeature, (state: FeatureState) => state.TABLE_DATA);



