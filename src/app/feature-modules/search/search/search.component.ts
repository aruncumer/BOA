import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@phoenix/ui/dynamic-form-renderer';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchFacade } from '../+state/facade/search.facade';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: "app-search",
    template: `<app-search-ui 
            [form]="form" 
            [fieldList]="fieldList" 
            [appData]="appData" 
            (formSubmit)="onFormSubmit($event)">
        </app-search-ui>`,
})

export class SearchComponent implements OnInit, OnDestroy {
    form: FormGroup;
    fieldList: FieldConfig[];
    debounceTime = 500;
    private jsonChanged: Subject<FieldConfig[]> = new Subject<FieldConfig[]>();
    private subscription: Subscription;
    tempData: FieldConfig[];


    constructor(
        private cdr: ChangeDetectorRef,
        private searchFacade: SearchFacade,
        private cookieService: CookieService
    ) { }


    ngOnInit() {
        const allCookies: {} = this.cookieService.getAll();
        console.log('allCookies', allCookies)
        this.tempData = this.fieldList = [...fields] as FieldConfig[];
        this.subscription = this.jsonChanged.pipe(
            debounceTime(this.debounceTime))
            .subscribe((data: FieldConfig[]) => {
                this.fieldList = [...data];
                this.cdr.markForCheck();
            });


        // examples of how move data in and out of the app data store 
        this.searchFacade.loadSucces();
        this.searchFacade.getAllFormData().subscribe((value) => {
            // console.log('getAllFormData', value);
        });

        this.searchFacade.getTableData().subscribe((value) => {
            // console.log('getTableData', value); values are updated when the store is updated
        });

        this.searchFacade.getGraphData();
        // this.searchFacade, saveGraphData({AIT: 'SAVE GRAPH DATA'})
    }

    inputChanged(data: FieldConfig[]) {
        this.jsonChanged.next(data);
        console.log(data);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onFormSubmit(formValues) {
        //this.search Facade.saveFrom Results (formValues);
        this.searchFacade.saveGraphData(formValues);
        this.searchFacade.callSearchAPI(formValues);
    }


    //NEED TO MAKE AN API CALL TO GET REAL AIT DATA
    appData = {
        aits: [
            'CASHPRO TRADE',
            'Iron Man',
            'Wasp',
            'Ant-Man',
            'Hulk',
            'Captain America',
            'Quicksilver',
            'Scarlet Witch',
            'Avenger X',
            'Swordsman',
            'Hercules',
            'Black Panther',
            'Vision',
            'Black Knight',

        ],
        ci: [
            'CASHPRO TRADE',
            'Iron Man 2',
            'Wasp',
            'Ant-Man',
            'Hulk',
            'Captain America: The Winter Soldier',
            'Quicksilver',
            'Scarlet Witch',
            'Avenger x',
            'Swordsman',
            'Hercules',
            'Black Panther',
            'Vision',
            "Black Knight"
        ]
    }
}







const fields = [
    {
        "type": 'input',
        "label": 'Enter AIT',
        "name": 'AIT',
        "width": 6,
        "options": ['Firewall', 'Esupport', 'Global Cash Position', 'AMRS'],
    }, {
        "type": 'datepicker',
        "label": 'Lookback Date',
        "name": 'DATE',
        "inline": true,
        "dateFormat": 'MMM DD, YYYY',
        "placeholder": 'Select a Date',
        "width": 6,
        "dateOptions": {
            "position": ' bottom',
            "hideFooter": true,
            "inline": true,
        },
        "validations": [
            {
                "name": 'required',
                "errorMessage": 'Field is Required',
            },
        ],
    }, {
        "type": 'input',
        "label": 'Enter CI',
        "subType": 'text',
        "name": 'CI',
        "width": 6,
    }, {
        "type": 'textarea',
        "label": 'Enter Notes',
        "subType": "text",
        "name": 'SEARCH_TEXT',
        "height": '15',
        "width": '3',
    }, {
        "type": 'dropdown',
        "label": 'Search Tags',
        "name": 'SEARCH_TAGS',
        "options": ['Application', 'Data', 'Database', 'Facilities', 'Mainframe'],
        "validations": [
            {
                "name": 'required',
                "errorMessage": 'Fieldis Required',
            },
        ],
    },
];