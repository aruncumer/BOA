import { Component, EventEmitter, Input, OnInit, Output, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@phoenix/ui/dynamic-form-renderer';

@Component({
    selector: 'app-search-ui',
    templateUrl: './search-ui.component.html',
    styleUrls: ['./search-ui.component.scss'],
})
export class SearchUiComponent implements OnInit, AfterContentChecked {
    @Input()
    form: FormGroup;
    @Input()
    fieldList: FieldConfig[];

    @Output()
    formSubmit: EventEmitter<{}> = new EventEmitter<{}>();

    constructor(private cdRef: ChangeDetectorRef) { }

    ngOnInit(): void { }

    ngAfterContentChecked(): void {
        this.cdRef.detectChanges();
    }

    onFormSubmit(evt: Event) {
        evt.preventDefault();
        this.formSubmit.emit(this.form.getRawValue());
    }
}