import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { ParceirosComponent } from '../../layout/parceiros/parceiros.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    RodapeComponent,
    ParceirosComponent
    
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
