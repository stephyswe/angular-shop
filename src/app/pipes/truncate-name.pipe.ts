import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLength: number = 16, ellipsis: string = "..."): unknown {
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + ellipsis;
    } else {
      return value;
    }
  }

}
