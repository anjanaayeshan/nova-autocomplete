import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string, labelKey = 'label', skipAccents = false): any {
    if (!search) { return items; }
    return items.filter(item => {
      if (!item) { return; }
      if (skipAccents) {
        return this.normalize(item[labelKey]).toLowerCase().indexOf(this.normalize(search).toLowerCase()) !== -1;
      } else {
        return item[labelKey].toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    });
  }

  private normalize(value: string) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
