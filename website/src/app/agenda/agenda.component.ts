import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [
    NavbarComponent,
    RodapeComponent
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

}
