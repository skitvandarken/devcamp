import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-programa',
  standalone: true,
  imports: [

    NavbarComponent,
    RodapeComponent
  ],
  templateUrl: './programa.component.html',
  styleUrl: './programa.component.css'
})
export class ProgramaComponent {

}
