import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: string[], isAscending: boolean): string[] {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by pipe requires an array');
    }

    return value.sort((a, b) => {
      const upperCasedA = a.toUpperCase();
      const upperCasedB = b.toUpperCase();

      if (upperCasedA < upperCasedB) {
        return isAscending ? -1 : +1;
      }

      if (upperCasedA > upperCasedB) {
        return isAscending ? +1 : -1;
      }

      return 0;
    });
  }
}
