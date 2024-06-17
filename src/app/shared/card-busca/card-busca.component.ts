import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Produto } from '../../core/types/type';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [
      MatButtonModule,
      MatCardModule
  ],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
  @Input() produto!: Produto;
}
