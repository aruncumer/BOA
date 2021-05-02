import { MomentDateAdapter } from '@angular/material-moment-adapter';
export class CustomDateHeader extends MomentDateAdapter {
     getDayOfWeekNames(style: 'long' | 'short' | 'narrow') {
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     }
}

export const MATERIAL_DATEPICKER_FORMATS = {
     parse: {
          dateInput: 'DD/MMM/YYYY',
     },
     display: {
          dateInput: 'DD/MMM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'DD/MMM/YYYY',
          monthYearA11yLabel: 'MMMM YYYY',
     },
};
