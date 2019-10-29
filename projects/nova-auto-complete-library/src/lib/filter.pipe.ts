import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string, labelKey = 'label'): any {
    if (!search) { return items; }

    const solution = items.filter(item => {
      if (!item) { return; }
      return this.normalize(item[labelKey]).toLowerCase().indexOf(this.normalize(search).toLowerCase()) !== -1;
    })
    return solution; 
  }

  private normalize(value: string) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
