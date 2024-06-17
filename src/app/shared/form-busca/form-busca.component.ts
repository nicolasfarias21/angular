import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; // Certifique-se de importar MatInputModule


@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule // Import MatInputModule
  ],
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  
}
