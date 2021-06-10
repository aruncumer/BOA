import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [{
	path: '',
	component: ContactComponent,
	pathMatch: 'full',
}];

/**
 * Modules
 */
const Modules: any[] = [
	MatCardModule,
	MatIconModule,
	CommonModule,
	MatListModule,
	MatChipsModule,
	MatAutocompleteModule,
	FormsModule,
	ReactiveFormsModule,
	MatInputModule,
	[RouterModule.forChild(routes)],
];

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		...Modules,
	]
})
export class ContactModule { }
