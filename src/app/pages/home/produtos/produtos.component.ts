import { Component, OnInit } from '@angular/core';
import { CardBuscaComponent } from '../../../shared/card-busca/card-busca.component';
import { ProdutoService } from '../../../core/services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CardBuscaComponent,
    CommonModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit{
  produtos!: any[];
  constructor(private service: ProdutoService){
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.produtos = res;
      }
    )
  }

}
