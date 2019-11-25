
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nova-search',
  templateUrl: './nova-search.component.html',
  styleUrls: ['./nova-search.component.css']
})
export class NovaSearchComponent implements OnInit {

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

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClearText: EventEmitter<any> = new EventEmitter();

  constructor() { }

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

  onSelectValue(value: any) {
    this.control.patchValue(value[this.options.display]);
    this.onItemSelected.emit(value);
    this.onCloseDropDown();
  }

  onChangeText(text: string) {
    if (!text && !this.disabled) { this.onClearText.emit(); }
  }

  onCloseDropDown() { this.showDropDown = false; }

  onOpenDropDown() { this.showDropDown = true; }

}
