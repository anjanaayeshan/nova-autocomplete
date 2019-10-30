import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bold' })
export class LetterBoldPipe implements PipeTransform {
  transform(value: any, search: any): any {
    if (!search) { return value; }
    const searchLength = search.length;
    const holder = value.split('');
    let indexAdder = 0;
    let indexs = this.locations(search.toLowerCase(), value.toLowerCase());
    indexs = indexs.map((x) => {
      const solution = x + indexAdder;
      indexAdder += 2;
      return solution;
    });
    indexs.forEach((i) => {
      holder.splice(i, 0, '<span class=\'bold\'>');
      holder.splice(i + searchLength + 1, 0, '</span>');
    });
    return holder.join('');
  }

  private locations(substring: string, searchValue: string) {
    const indexs = []; let i = -1;
    while ((i = this.normalize(searchValue).indexOf(this.normalize(substring), i + 1)) >= 0) {
      indexs.push(i);
    }
    return indexs;
  }

  private normalize(value: string) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
