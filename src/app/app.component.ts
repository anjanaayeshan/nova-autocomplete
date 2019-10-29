import { Component } from '@angular/core';
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
  // states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  //   'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  //   , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  //   , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  //   'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  //   'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  //   'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
  //   'West Virginia', 'Wisconsin', 'Wyoming'];


  states = [
    { id: 1, value: 'Anna Patiño Tarín' },
    { id: 2, value: 'Victoria Camila' },
    { id: 3, value: 'Mercedes Vélez Alcántara' },
    { id: 4, value: 'Luis Ferrer Suarez' },
    { id: 5, value: 'Miguel Ángel Paya Vera' },
    { id: 6, value: 'Rebecca Sen' }
  ];

  // states = ['Anna Patiño Tarín', 'Victoria Camila', 'Mercedes Vélez Alcántara', 'Luis Ferrer Suarez', 'Miguel Ángel Paya Vera', 'Rebecca Sen'];



  constructor(private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }


  ngOnInit() {
  }

  onItemSelected(value: any) {
    console.log(value);
  }
}
