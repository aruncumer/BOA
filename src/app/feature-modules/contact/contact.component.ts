import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer

	) {
		this.matIconRegistry.addSvgIcon(
			"unicorn",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Logos/thumbsup.svg")
		);
	}

	ngOnInit(): void {
	}

}
