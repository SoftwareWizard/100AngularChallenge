import { Component, Input } from '@angular/core';

const X_PATTERN = 'xxxx';
const REGEX = '^[0-9]{16}$';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent {
  @Input() public creditCardNumber = '';

  private readOnly = false;

  public get isReadOnly() {
    return this.readOnly;
  }

  @Input() public set isReadOnly(isReadOnly: boolean) {
    this.creditCardNumber = isReadOnly
      ? this.formatReadOnlyCreditCardNumber(this.creditCardNumber)
      : this.creditCardNumber;

    this.readOnly = isReadOnly;
  }

  private formatReadOnlyCreditCardNumber(creditCardNumber: string): string {
    const result = creditCardNumber.match(REGEX);

    if (!result) {
      console.log('illegal format');
    }

    const block: string[] = [];

    for (let index = 0; index < 3; index++) {
      block[index] = X_PATTERN;
    }

    block[3] = creditCardNumber.substr(12, 4);

    return block.join('-');
  }
}
