import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappComponent } from './layout/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhatsappComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
