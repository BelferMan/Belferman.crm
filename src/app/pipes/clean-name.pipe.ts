import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanName'
})
export class CleanNamePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.trim().replace(/[^A-Za-z\s]/g, '');
  }

}
