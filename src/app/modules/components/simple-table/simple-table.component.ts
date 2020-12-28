import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  @Input() public tableData: any [] = [
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
  ];
}
