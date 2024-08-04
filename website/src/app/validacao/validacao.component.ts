import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';
import { Certificado } from '../models/certificado';
import { BrowserModule } from '@angular/platform-browser';
import { ResultadoComponent } from '../layout/resultado/resultado.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacao',
  standalone: true,
  imports: [
    NavbarComponent,
    RodapeComponent,
    ResultadoComponent,
    ReactiveFormsModule
  ],
  templateUrl: './validacao.component.html',
  styleUrl: './validacao.component.css'

})




export class ValidacaoComponent {
 formValidacao: FormGroup;

 constructor(private fb: FormBuilder) {
  this.formValidacao = this.fb.group({
    id:['',Validators.required],
    nome:['',Validators.required]
  });
 }

 onSubmit() {
  
    console.log('Formulário submetido')
  
 }


}
