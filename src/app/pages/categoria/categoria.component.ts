import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../shared/container/container.component';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit{

  categorias!: any[];
  constructor(private service: CategoriaService){
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.categorias = res;
      }
    )
  }

}


