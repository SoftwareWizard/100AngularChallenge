import {
  Directive,
  Output,
  OnInit,
  OnDestroy,
  HostListener,
  EventEmitter,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
const DEBOUNCE_TIME_IN_MS = 500;

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Output() debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.clicks
      .pipe(debounceTime(DEBOUNCE_TIME_IN_MS))
      .subscribe((value: any) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
