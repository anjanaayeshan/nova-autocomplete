import { Pipe, PipeTransform } from '@angular/core';
import { NovaSearchService } from './nova-search.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private novaSearchService: NovaSearchService) { }

  transform(
    items: any[], search: string, labelKey = 'label',
    skipAccents = false, allowQuoteSearch = false, skipCharactersCount = 0): any {
    if (!search) { return items; }
    let list = [];
    if (allowQuoteSearch && this.validateForQuoteSearch(search)) {
      const sk = search.substring(1, search.length - 1);
      list = this.quoteSearch(items, sk, labelKey, skipAccents);
    } else {
      if (search.length >= skipCharactersCount) { // skips x number of characters to start the search
        list = items.filter(item => {
          if (!item) { return; }
          if (skipAccents) {
            return this.normalize(item[labelKey]).toLowerCase().indexOf(this.normalize(search).toLowerCase()) !== -1;
          } else {
            return item[labelKey].toLowerCase().indexOf(search.toLowerCase()) !== -1;
          }
        });
      }
    }
    this.novaSearchService.currentItemList = list;
    return list;
  }

  private normalize(value: string) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private quoteSearch(items: any[], search: string, labelKey = 'label', skipAccents = false, skipCharactersCount = 0) {
    if (skipAccents) {
      return items.filter(item => this.normalize(item[labelKey]).toLowerCase() === this.normalize(search.toLowerCase()));
    }
    return items.filter(item => item[labelKey].toLowerCase() === search.toLowerCase());
  }

  private validateForQuoteSearch(text: string) {
    return text.length > 1 &&
      (text.startsWith('\'') || text.startsWith('"')) &&
      (text.endsWith('\'') || text.endsWith('"'));
  }
}
