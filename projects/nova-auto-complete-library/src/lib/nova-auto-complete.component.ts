
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nova-auto-complete',
  templateUrl: './nova-auto-complete.component.html',
  styleUrls: ['./nova-auto-complete.component.css']
})
export class NovaAutoCompleteComponent implements OnInit {

  @Input() options: { key: string, display: string };
  @Input() control: FormControl;
  @Input() optionCss: string;
  @Input() inputCss: string;
  @Input() items: any[];
  @Input() elementId: string;
  @Input() placeholder: string;
  @Input() skipAccents: boolean;

  showDropDown = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();

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

  onCloseDropDown() {
    this.showDropDown = false;
  }

  onOpenDropDown() {
    this.showDropDown = true;
  }
}
