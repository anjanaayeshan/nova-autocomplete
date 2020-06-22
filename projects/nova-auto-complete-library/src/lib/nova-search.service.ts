import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovaSearchService {

  currentItemList = [];

  constructor() { }

  focus(element: string) {
    const input = document.getElementById(element);
    if (input) { input.focus(); }
  }
}
