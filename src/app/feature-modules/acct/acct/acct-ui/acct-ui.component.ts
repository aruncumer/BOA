import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-acct-ui',
	templateUrl: './acct-ui.component.html',
	styleUrls: ['./acct-ui.component.scss'],
})
export class AcctUiComponent implements OnInit {
	public selectedDate: string;

	constructor() { }

	ngOnInit(): void {
		this.selectedDate = null;
	}

	myFilter = (d: Date | null): boolean => {
		const day = (d || new Date()).getDay();
		return day !== 0 && day !== 6;
	}

	/**
	 * On select date
	 * from the calendar
	 * @param event 
	 * @returns formated date
	 */
	onSelectDate = (event: any): void => this.selectedDate = this.formatDate(event);



	/**
	 * Pass date to format
	 * @param d Date
	 * @returns String
	 */
	formatDate = (d: any): any => {
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
		return `Selected Date (${mo} ${da}, ${ye})`;
	}

}
