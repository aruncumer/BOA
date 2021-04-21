import { Component, OnInit } from '@angular/core';
import { UploadService } from 'feature/upload/service/upload.service';

@Component({
	selector: 'app-upload-ui',
	templateUrl: './upload-ui.component.html',
	styleUrls: ['./upload-ui.component.scss']
})

export class UploadUiComponent implements OnInit {
	percentDone: number;
	uploadSuccess: boolean;

	constructor(
		private us: UploadService
	) { }

	ngOnInit(): void {

	}

	upload(files: File[]) {
		this.uploadAndProgress(files);
	}



	uploadAndProgress(files: File[]) {
		var formData = new FormData();
		console.log(files);
		Array.from(files).forEach(f => formData.append('file', f))
		this.us.getUpload(formData).subscribe(resp => {
			console.log(resp);
		});
	}

}
