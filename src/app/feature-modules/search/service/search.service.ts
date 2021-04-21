import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const graphData = {
    "nodes": [
        {
            "id": "Myriel",
            "group": 1
        },
        {
            "id": "Napoleon",
            "group": 1
        },
        {
            "id": "Mlle.Baptistine",
            "group": 1
        },
        {
            "id": "Mme.Magloire",
            "group": 1
        },
        {
            "id": "Countessdelo",
            "group": 1
        },
        {
            "id": "Geborand",
            "group": 1
        },
        {
            "id": "Champtercier",
            "group": 1
        },
        {
            "id": "Cravatte",
            "group": 1
        },
        {
            "id": "Count",
            "group": 1
        },
        {
            "id": "Oldman",
            "group": 1
        },
        {
            "id": "Labarre",
            "group": 2
        },
        {
            "id": "Valjean",
            "group": 2
        },
        {
            "id": "Marguerite",
            "group": 3
        },
        {
            "id": "Mme.deR",
            "group": 2
        },
        {
            "id": "Isabeau",
            "group": 2
        },
        {
            "id": "Gervais",
            "group": 2
        },
        {
            "id": "Tholomyes",
            "group": 3
        },
        {
            "id": "Listolier",
            "group": 3
        },
        {
            "id": "Fameuil",
            "group": 3
        },
        {
            "id": "Blacheville",
            "group": 3
        },
        {
            "id": "Favourite",
            "group": 3
        },
        {
            "id": "Dahlia",
            "group": 3
        },
        {
            "id": "Zephine",
            "group": 3
        },
        {
            "id": "Fantine",
            "group": 3
        },
        {
            "id": "Mme. Thenardier",
            "group": 4
        },
        {
            "id": "Thenardier",
            "group": 4
        },
        {
            "id": "Cosette",
            "group": 5
        },
        {
            "id": "Javert",
            "group": 4
        },
        {
            "id": "Fauchelevent",
            "group": 0
        },
        {
            "id": "Bamatabois",
            "group": 2
        },
        {
            "id": "Perpetue",
            "group": 3
        },
        {
            "id": "Simplice",
            "group": 2
        },
        {
            "id": "Scaufflaire",
            "group": 2
        },
        {
            "id": "Woman1",
            "group": 2
        },
        {
            "id": "Judge",
            "group": 2
        },
        {
            "id": "Champmathieu",
            "group": 2
        },
        {
            "id": "Brevet",
            "groun": 2
        },
        {
            "id": "Chenildieu",
            "group": 2
        },
        {
            "id": "Cochepaille",
            "group": 2
        },
        {
            "id": "Pontmercy",
            "group": 4
        },
        {
            "id": "Boulatruelle",
            "group": 6
        },
        {
            "id": "Eponine",
            "group": 4
        },
        {
            "id": "Anzelma",
            "group": 4
        },
        {
            "id": "Woman2",
            "group": 5
        },
        {
            "id": "MotherInnocent",
            "group": 0
        },
        {
            "id": "Gribier",
            "group": 0
        },
        {
            "id": "Jondrette",
            "group": 7
        },
        {
            "id": "Mme. Burgon",
            "group": 7
        },
        {
            "id": "Gavroche",
            "group": 8
        },
        {
            "id": "Gillenormand",
            "group": 5
        },
        {
            "id": "Magnon",
            "group": 5
        },
        {
            "id": "Mlle.Gillenormand",
            "group": 5
        },
        {
            "id": "Me. Pontmercy",
            "group": 5
        },
        {
            "id": "Mlle.Vaubois",
            "group": 5
        },
        {
            "id": "Lt.Gillenormand",
            "group": 5
        },
        {
            "id": "Marius",
            "group": 8
        },
        {
            "id": "Baronesst",
            "group": 5
        },
        {
            "id": "Mabeuf",
            "group": 8
        },
        {
            "id": "Enjolras",
            "group": 8
        },
        {
            "id": "Combeferre",
            "group": 8
        },
        {
            "id": "Prouvaire",
            "group": 8
        },
        {
            "id": "Feuilly",
            "group": 8
        },
        {
            "id": "Courfeyrac",
            "group": 8
        },
        {
            "id": "Bahorel",
            "group": 8
        },
        {
            "id": "Bossuet",
            "group": 8
        },
        {
            "id": "Joly",
            "group": 8
        },
        {
            "id": "Grantaire",
            "group": 8
        },
        {
            "id": "MotherPlutarch",
            "group": 9
        },
        {
            "id": "Gueulemer",
            "group": 4
        },
        {
            "id": "Babet",
            "group": 4
        },
        {
            "id": "Claquesous",
            "group": 4
        }
    ]
}
@Injectable({
    providedIn: 'root',
})

export class SearchService {
    constructor(private http: HttpClient) { }

    getGraphData = () => {
        return graphData;
    };

    callSearchAPI = (action) => {
        return this.http.get(`http://localhost:7878/search/`);
    };

    callForGraphData = (action) => {
        // dont know format of data yet
        // return this.http.get(`http://api server/${action.data})
        return graphData;
    };
}