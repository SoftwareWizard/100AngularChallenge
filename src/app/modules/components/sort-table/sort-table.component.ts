import { Component, Input, OnInit } from '@angular/core';
import { isDate } from 'util';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Simon 1', dob: '20/05/1975', age: 45, living: true },
    { first: 'Simon 2', dob: '20/05/1969', age: 51, living: false },
    { first: 'Simon 3', dob: '20/05/1973', age: 43, living: true },
    { first: 'Simon 4', dob: '20/05/1976', age: 44, living: false },
    { first: 'Simon 5', dob: '20/05/1961', age: 59, living: false },
  ];

  public sortDirection = true;

  public onSort(headerData: { key: string; value: any }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;

      case typeof value === 'number':
        this.sortNumber(key);
        break;

      case typeof value === 'string':
        this.sortString(key);
        break;

      case isDate(value):
        this.sortDate(key);
        break;
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return (
          new Date(value1[key]).getTime() - new Date(value2[key]).getTime()
        );
      } else {
        return (
          new Date(value2[key]).getTime() - new Date(value1[key]).getTime()
        );
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: boolean, value2: boolean) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortNumber(key: string): void {
    this.tableData.sort((value1: boolean, value2: boolean) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortString(key: string): void {
    this.tableData.sort((value1: string, value2: string) => {
      const value1Upper = value1[key].toUpperCase();
      const value2Upper = value2[key].toUpperCase();

      if (this.sortDirection) {
        if (value1Upper > value2Upper) {
          return -1;
        }

        if (value2Upper > value1Upper) {
          return 1;
        }

        return 0;
      } else {
        if (value2Upper > value1Upper) {
          return -1;
        }

        if (value1Upper > value2Upper) {
          return 1;
        }

        return 0;
      }
    });
  }
}
