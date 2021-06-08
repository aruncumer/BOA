import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { MatListModule } from '@angular/material/list';


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
