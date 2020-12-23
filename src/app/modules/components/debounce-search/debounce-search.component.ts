import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent {
  public searchTerm = '';
  @Input() public placeholder = 'search';
  @Output() public searchUpdate = new EventEmitter();

  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        this.searchUpdate.emit(value);
      });
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
