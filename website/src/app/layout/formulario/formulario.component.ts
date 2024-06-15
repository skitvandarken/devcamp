import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  selectedOption: string;
  prefilledValue: string;

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];



  //email
  formData = {
    name: '',
    email: '',
    message: '',
  };
  successMessage = false;

  constructor(private router: Router) {
   
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

  

  public sendEmail(e: Event) {
    e.preventDefault();

   
    emailjs
      .sendForm('service_janacmv', 'template_3i9ry0y', e.target as HTMLFormElement, {
        publicKey: 'oT4Vp8OvVm40Rg-oA',
        ...this.formData
      })
      .then(
        () => {
          this.successMessage = true;
          console.log('SUCCESS!');
          this.formData = { // Reset form data to empty object
            name: '',
            email: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
