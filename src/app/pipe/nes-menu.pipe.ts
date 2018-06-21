import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nesMenu'
})
export class NesMenuPipe implements PipeTransform {

  transform(value: any, arg: String): any {
    if (arg != null && arg !== undefined && arg !== '') {
      return value.filter(item => {
        return Object.values(item).find(entry => {
          if (typeof  entry === 'string' || typeof  entry === 'number') {
            return String(entry).toUpperCase().includes(arg.toUpperCase());
          }
          return entry === arg;
        });
      });
    }
    return value;

  }

}
