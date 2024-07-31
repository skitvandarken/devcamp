import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { BeneficiosComponent } from '../../layout/beneficios/beneficios.component';
import { TecnologiasComponent } from '../../layout/tecnologias/tecnologias.component';
import { ParceirosComponent } from '../../layout/parceiros/parceiros.component';
import { FaqComponent } from '../../layout/faq/faq.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { GaleriaComponent } from "../../layout/galeria/galeria.component";
import { GaleriaFotosComponent } from '../../layout/galeria-fotos/galeria-fotos.component';
import { CalendarioComponent } from '../../layout/calendario/calendario.component';

@Component({
  selector: 'app-bemvindo',
  standalone: true,
  imports: [
    NavbarComponent,
    BeneficiosComponent,
    TecnologiasComponent,
    ParceirosComponent,
    FaqComponent,
    RodapeComponent,
    GaleriaComponent,
    GaleriaFotosComponent,
    CalendarioComponent
],
  templateUrl: './bemvindo.component.html',
  styleUrl: './bemvindo.component.css'
})
export class BemvindoComponent {

}
