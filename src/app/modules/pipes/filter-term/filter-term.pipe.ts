import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(value: string[], term: any): string[] {
    return value.filter(item => item.includes(term));
  }

}
