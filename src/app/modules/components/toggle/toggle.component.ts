import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() public isOn = false;
  @Output() public isOnChange = new EventEmitter<boolean>();

  toggle(): void {
    this.isOn = !this.isOn;
    this.isOnChange.emit(this.isOn);
  }
}
