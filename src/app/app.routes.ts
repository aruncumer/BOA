import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "search",
        loadChildren: () => import(
            './feature-modules/acct/acct.module')
            .then((m) => m.AcctModule
            )
    },
    {
        path: 'upload',
        loadChildren: () => import(
            './feature-modules/upload/upload.module'
        ).then((m) => m.UploadModule)
    }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];