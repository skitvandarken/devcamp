import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  successMessage = false;

  constructor(private router: Router) {}

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