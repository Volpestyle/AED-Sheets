import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelize',
})
export class CamelizePipe implements PipeTransform {
  transform(value: any, args?: any): string {
    return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
