import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { SearchService } from '../../service/search.service';
import * as SearchActions from '../actions/search.actions';
import { SearchFacade } from '../facade/search.facade';

@Injectable()
export class SearchEffects {
    constructor(
        private actions$: Actions,
        private searchService: SearchService,
        private searchFacade: SearchFacade,
        private router: Router
    ) { }

    loadedEffect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(SearchActions.loadSearchsSuccess),
                tap(() => {
                    console.log('success');
                })
            );
        },
        { dispatch: false }
    );

    getGraphData$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(SearchActions.callSearchAPI),
                tap(() => {
                    console.log('success');
                })
            );
        },
        { dispatch: false }
    );

    callSearchAPI$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(SearchActions.callSearchAPI),
                tap((actions) => {
                    this.searchService.callSearchAPI(actions).subscribe((val) => {
                        this.searchFacade.saveGraphData(val);
                    });
                })
            );
        },
        { dispatch: false }
    );

    saveFormatData$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(SearchActions.saveFormResults),
                //tap(() => { () => {console.log('save form results effect')} })
                tap(() => { })
            );
        },
        { dispatch: false }
    );
}
