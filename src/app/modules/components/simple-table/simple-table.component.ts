import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
    { first: 'Simon', last: 'Bauer', dob: '20/05/1975' },
  ];

  @Output() public headerSelected = new EventEmitter<{
    key: string;
    value: any;
  }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ key, value });
  }
}
