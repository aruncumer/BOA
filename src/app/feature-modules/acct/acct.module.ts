import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcctUiComponent } from './acct/acct-ui/acct-ui.component';
import { AcctComponent } from './acct/acct.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const Modules: any[] = [
	MatSelectModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	FormsModule,
	ReactiveFormsModule,
	SharedModule
];

const routes: Routes = [
	{
		path: '',
		component: AcctUiComponent,
		pathMatch: 'full',
	}
];

@NgModule({
	declarations: [
		AcctUiComponent,
		AcctComponent
	],
	imports: [
		CommonModule,
		...Modules,
		RouterModule.forChild(routes),
	]
})

export class AcctModule { }
