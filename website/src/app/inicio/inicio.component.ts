import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ParceirosComponent } from '../layout/parceiros/parceiros.component';
import { TecnologiasComponent } from '../layout/tecnologias/tecnologias.component';
import { BeneficiosComponent } from '../layout/beneficios/beneficios.component';
import { WhatsappComponent } from '../layout/whatsapp/whatsapp.component';
import { FaqComponent } from '../layout/faq/faq.component';



@Component({
  selector: 'app-inicio', // Selector updated to 'app-teste'
  templateUrl: './inicio.component.html', // Template path updated
  styleUrls: ['./inicio.component.css'], // Stylesheet path updated
  imports: [FormsModule,
    NavbarComponent,
    RodapeComponent,
    ParceirosComponent,
    TecnologiasComponent,
    BeneficiosComponent,
    NgFor,
    WhatsappComponent,
    FaqComponent
  
  ],
  standalone: true
})
export class InicioComponent implements OnInit { 
  
  
  countryCodes: { name: string, dialCode: string }[] = [
    { name: 'Angola', dialCode: '244' },
    
 
    // Add more countries as needed
  ];
  
  // Component class name updated
  selectedOption: string;
  prefilledValue: string;

  options = [
    { value: '40.000,00', label: 'PRESENCIAL' },
    { value: '20.000 Kz', label: 'ONLINE' },
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
