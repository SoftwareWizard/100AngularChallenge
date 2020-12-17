import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public title = '';
  public isHidden = true;

  open(): void {
    this.isHidden = false;
  }

  close() : void {
    this.isHidden = true;
  }
}
