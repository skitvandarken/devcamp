import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  successMessage = false;

  constructor(private router: Router) {}

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_janacmv', 'template_cixs6zb', e.target as HTMLFormElement, {
        publicKey: 'oT4Vp8OvVm40Rg-oA',
        ...this.formData // Spread operator to include form data
      })
      .then(
        () => {
          this.successMessage = true; // Set message to true on success
          console.log('SUCCESS!');
          this.formData = { // Reset form data to empty object
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }


}
