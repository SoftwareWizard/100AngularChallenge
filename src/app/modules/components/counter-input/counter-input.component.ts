import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;

  public increment(): void {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  public decrement(): void {
    if (this.counter > this.min) {
      this.counter--;
    }
  }
}
