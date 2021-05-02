import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatepickerCustomHeaderComponent } from 'src/app/shared/datepicker-custom-header/datepicker-custom-header.component';
import { Data, Fruit, Fruits } from '../../interface';

@Component({
	selector: 'app-acct-ui',
	templateUrl: './acct-ui.component.html',
	styleUrls: ['./acct-ui.component.scss'],
})

export class AcctUiComponent implements OnInit {

	public selectedDate: string;
	public range: FormGroup;
	public custumHeader: any;
	public searchFormGroup: FormGroup;

	selectable = true;
	removable = true;
	fruits: Array<any>;
	ClsFruits: Array<any>;
	Aitdata: Array<any>;
	Cls: Array<any>;
	data: Array<any>;

	constructor(
		private formBuilder: FormBuilder
	) {
		this.formBuild();
	}


	ngOnInit(): void {
		this.selectedDate = null;
		this.fruits = Fruits;
		this.Aitdata = Data;
		this.ClsFruits = Fruits;
		this.data = Data;
		this.Cls = Data;
		this.custumHeader = DatepickerCustomHeaderComponent;
		this.setUpCalendar();
	}


	formBuild = (): void => {
		const { formBuilder } = this;
		this.searchFormGroup = formBuilder.group({
			Ait: [''],
			Cls: [''],
			Notes: [''],
			Catgories: [''],
			DateRang: [''],
			SelRange: formBuilder.group({
				start: [null],
				end: [null]
			})
		});
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

	/**
	 * Calendar Start and End 
	 * Date
	 */
	setUpCalendar = (): any => {
		this.range = new FormGroup({
			start: new FormControl(),
			end: new FormControl()
		});
	}

	streamOpened(event: any): void {
		let elements = document.querySelectorAll('.endDate');
		let x = elements[0].querySelectorAll('.mat-calendar-body-cell-content');
		x.forEach(y => y.classList.add('newClass'));
	}

	/**
	 * Remove items from the 
	 * Pannel
	 * @param type string
	 * @param fruit Fruit array object
	 */
	remove(type: string, fruit: Fruit): void {
		const { searchFormGroup } = this;
		const val = searchFormGroup.get(type).value;
		searchFormGroup.patchValue({
			[type]: [...val].filter(i => i !== fruit.id)
		});
		if (type === 'Ait') {
			this.fruits = this.fruits.filter(i => i.name !== fruit.name);
			this.Aitdata = [...this.Aitdata, { ...fruit }];
		}
		if (type === 'Cls') {
			this.ClsFruits = this.ClsFruits.filter(i => i.name !== fruit.name);
			this.Cls = [...this.Cls, { ...fruit }];
		}
	}

	onSubmit = () => {
		console.log(this.searchFormGroup.getRawValue())
	}

	/**
	 * 
	 * @param type string
	 * @param val string
	 */
	getInnerText = (type: string, val: object) => {
		if (type === 'Ait') {
			this.fruits = [...this.fruits, { ...val }];
		}
		if (type === 'Cls') {
			this.ClsFruits = [...this.ClsFruits, { ...val }];
		}
	}

	/**
	 * On drop down change
	 * @param type string
	 * @param e any
	 */
	onChange = (type: string, e: any): void => {
		const { searchFormGroup } = this;
		const val = searchFormGroup.get(type).value;
		this.getFilterData(type, e);
		searchFormGroup.patchValue({ [type]: [...val, e.value] });
	}

	/**
	 * Filter data and reasggin 
	 * to orginal data
	 * @param type string
	 * @param e any
	 */
	getFilterData = (type: string, e: any) => {
		if (type === 'Ait') {
			this.Aitdata = this.Aitdata.filter(i => i.id !== e.value);
		}
		if (type === 'Cls') {
			this.Cls = this.Cls.filter(i => i.id !== e.value);
		}
	}
}
