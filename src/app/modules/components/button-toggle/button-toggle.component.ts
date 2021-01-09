import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonMeta } from './button-meta';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {
  @Input() public options: ButtonMeta[] = [];
  @Output() public selection = new EventEmitter<ButtonMeta>();

  public selected(selectedOption: ButtonMeta): void {
    this.options.forEach((option) => {
      option.isActive = selectedOption === option;
    });

    this.selection.emit(selectedOption);
  }
}
