import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';



@Component({
  selector: 'app-teste', // Selector updated to 'app-teste'
  templateUrl: './teste.component.html', // Template path updated
  styleUrls: ['./teste.component.css'], // Stylesheet path updated
  imports: [FormsModule,
    NavbarComponent,
    RodapeComponent,

    NgFor],
  standalone: true
})
export class TesteComponent implements OnInit { // Component class name updated
  selectedOption: string;
  prefilledValue: string;

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  constructor() {
    this.prefilledValue = 'Initial Value'; // Or any other initial value you prefer
    this.selectedOption = 'Initial Value'; // Or any other initial value you prefer

  }


  ngOnInit() {
    // Set initial prefilled value (optional)
    this.prefilledValue = 'Initial Value';
  }

  onSelectionChange(event: any) {
    // Update prefilled value based on selected option
    this.prefilledValue = event.target.value;
  }
}
