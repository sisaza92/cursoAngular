import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nuevoPipe'
})
export class NuevoPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
