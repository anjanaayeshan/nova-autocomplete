import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stateForm: FormGroup;
  showDropDown = false;

  states = [
    { id: 1, value: 'Anna Patiño Tarín' },
    { id: 2, value: 'Victoria Camila' },
    { id: 3, value: 'Mercedes Vélez Alcántara' },
    { id: 4, value: 'Luis Ferrer Suarez' },
    { id: 5, value: 'Miguel Ángel Paya Vera' },
    { id: 6, value: 'Rebecca Sen' }
  ];
  @ViewChild('novaSearch') novaSearch: any;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.stateForm = this.fb.group({
      search: []
    });
  }

  onItemSelected(value: any) {
    console.log(value);
  }

  onClearText() {
    console.log('cleared');
  }

  onClick() {
    if (this.novaSearch) {
      this.novaSearch.focus();
    }
  }
}
