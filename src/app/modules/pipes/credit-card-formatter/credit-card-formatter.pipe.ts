import { Pipe, PipeTransform } from '@angular/core';

const REGEX = '^[0-9]{16}$';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    const result = cardNumber.match(REGEX);

    if (!result) {
      return 'invalid Credit Card format';
    }

    const block: string[] = [];

    for (let index = 0; index < 4; index++) {
      const startIndex = index * 4;
      block[index] = cardNumber.substr(startIndex, 4);
    }

    return block.join('-');
  }
}
