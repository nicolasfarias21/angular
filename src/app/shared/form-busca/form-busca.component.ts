import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../core/services/categoria.service';
import { ProdutoService } from '../../core/services/produto.service'; // Importar o serviço de produtos
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent implements OnInit {
  formBusca: FormGroup;
  categorias: any[] = [];
  produtos: any[] = [];
  produtosFiltrados: any[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {
    this.formBusca = this.fb.group({
      disponiveis: [''],
      titulo: [''],
      categoria: ['']
    });
  }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe(
      (data) => {
        this.categorias = data;
        console.log('Categorias obtidas:', data);
      },
      (error) => {
        console.error('Erro ao obter categorias:', error);
      }
    );

    this.produtoService.listar().subscribe(
      (data) => {
        this.produtos = data;
        this.produtosFiltrados = data;
        console.log('Produtos obtidos:', data);
      },
      (error) => {
        console.error('Erro ao obter produtos:', error);
      }
    );
  }

  buscar(): void {
    const categoriaId = this.formBusca.get('categoria')?.value;
    this.produtosFiltrados = this.produtos.filter(produto => produto.categoriaId === categoriaId);
  }
}
