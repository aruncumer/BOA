import { Component, OnInit } from '@angular/core';
// import { SearchFacade } from '../+state/facade/search.facade';
import { SearchFacade } from '../+state/facade/search.facade';


@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
    constructor(private searchFacade: SearchFacade) { }

    ngOnInit(): void {
        this.searchFacade.getGraphData().subscribe((result) => {
            console.log('getGraphData', result)
        })
    }

}