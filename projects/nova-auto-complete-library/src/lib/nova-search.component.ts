
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NovaSearchService } from './nova-search.service';

@Component({
  selector: 'nova-search',
  templateUrl: './nova-search.component.html',
  styleUrls: ['./nova-search.component.css']
})
export class NovaSearchComponent implements OnInit, AfterViewChecked {

  @Input() options: { key: string, display: string };
  @Input() control: FormControl;
  @Input() optionCss: string;
  @Input() inputCss: string;
  @Input() items: any[];
  @Input() elementId: string;
  @Input() placeholder: string;
  @Input() skipAccents: boolean;
  @Input() disabled: boolean;
  @Input() showDropDown: boolean;
  @Input() allowQuoteSearch: boolean;
  @Input() skipCharactersCount: number;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClearText: EventEmitter<any> = new EventEmitter();

  selected = -1;
  currentIndex = -1;
  @ViewChild('novaSearch') private novaSearchElement: ElementRef;
  ignoredKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

  constructor(private novaSearchService: NovaSearchService) { }

  ngOnInit() {
    if (!this.elementId) { this.elementId = 'nova-auto-complete'; }
    if (this.control) {
      this.control.valueChanges.subscribe(changedValue => {
        if (changedValue) {
          this.onOpenDropDown();
        }
      });
    }
  }

  ngAfterViewChecked() {
    this.onScroll();
  }

  onSelectValue(value: any) {
    this.control.patchValue(value[this.options.display]);
    this.onItemSelected.emit(value);
    this.onCloseDropDown();
  }

  onChangeText(key: string, text: string) {
    const included = this.ignoredKeys.indexOf(key) > -1;
    if (!included) {
      if (!text && !this.disabled) {
        this.novaSearchService.currentItemList = this.items;
        this.onClearText.emit();
      } else {
        if (this.novaSearchService.currentItemList.length === 1) {
          this.selected = this.currentIndex = 0;
        }
      }
    }
  }

  onCloseDropDown() { this.selected = -1; this.currentIndex = -1; this.showDropDown = false; }

  onOpenDropDown() { this.selected = -1; this.currentIndex = -1; this.showDropDown = true; }

  onUp() { if (this.currentIndex !== 0) { this.selected = this.currentIndex = this.currentIndex - 1; } }

  onDown() {
    if ((this.novaSearchService.currentItemList.length - 1) !== this.currentIndex) {
      this.selected = this.currentIndex = this.currentIndex + 1;
    }
  }

  onEnter() {
    if (this.novaSearchService.currentItemList.length > 0 && this.currentIndex > -1) {
      const selectItem = this.novaSearchService.currentItemList[this.currentIndex];
      if (selectItem) {
        this.control.patchValue(selectItem[this.options.display]);
        this.onItemSelected.emit(selectItem);
      }
    }
    this.onCloseDropDown();
  }

  onScroll() {
    if (this.novaSearchElement) {
      const selectElements = this.novaSearchElement.nativeElement
        .getElementsByClassName('search-results-select');
      if (selectElements.length === 1) {
        selectElements[0].scrollIntoView(false);
      }
    }
  }
}
