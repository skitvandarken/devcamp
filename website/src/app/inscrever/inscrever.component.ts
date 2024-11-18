
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inscrever',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    RodapeComponent,
    FormsModule,
    CommonModule,
    NgFor

  ],

  templateUrl: './inscrever.component.html',
  styleUrl: './inscrever.component.css'
})
export class InscreverComponent implements OnInit {

  countryCodes: { name: string, dialCode: string }[] = [
    { name: 'Angola', dialCode: '244' },



    // Add more countries as needed
  ];

  // Component class name updated
  selectedOption: string;
  prefilledValue: string;

  options = [
    { value: '40.000 Kz', label: 'PRESENCIAL' },
    { value: '20.000 Kz / 19$', label: 'ONLINE' },
  ];



  //email
  formData = {
    name: '',
    email: '',
    message: '',
    prefilled: ''
  };
  successMessage = false;


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
            prefilled: '',
          };

           // Redirect to Google Form after successful email sending
        window.location.href = "https://forms.gle/K7uU3CiTJxuz8VKs9";

        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
