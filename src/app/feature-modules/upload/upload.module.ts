import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'env/environment';
import { ENV_CONFIG } from 'env/environmenter.token';
import { UploadService } from './service/upload.service';
import { UploadUiComponent } from './upload/upload-ui/upload-ui.component';

const routes: Routes = [{
	path: '',
	component: UploadUiComponent,
	pathMatch: 'full',
}];


@NgModule({
	declarations: [UploadUiComponent],
	imports: [
		CommonModule,
		[RouterModule.forChild(routes)],
	],
	exports: [RouterModule],
	providers: [
		UploadService,
		{
			provide: ENV_CONFIG,
			useValue: environment
		}
	]
})

export class UploadModule { }
