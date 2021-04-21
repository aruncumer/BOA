import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctUiComponent } from './acct-ui.component';

describe('AcctUiComponent', () => {
  let component: AcctUiComponent;
  let fixture: ComponentFixture<AcctUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
