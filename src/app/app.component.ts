import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { NovaSearchService } from '../../projects/nova-auto-complete-library/src/lib/nova-search.service';
import { NovaSearchService } from 'dist/nova-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stateForm: FormGroup;
  showDropDown = false;

  list = [
    { id: 1, value: 'Anna Patiño Tarín' },
    { id: 2, value: 'Victoria Camila' },
    { id: 3, value: 'Mercedes Vélez Alcántara' },
    { id: 4, value: 'Luis Ferrer Suarez' },
    { id: 5, value: 'Miguel Ángel Paya Vera' },
    { id: 6, value: 'Rebecca Sen' }
  ];

  constructor(private fb: FormBuilder, private service: NovaSearchService) {
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
    // console.log('cleared');
  }

  onClick() {
    this.service.focus('nova-search-element-2');
  }
}
