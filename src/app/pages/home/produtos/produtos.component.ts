import { Component, OnInit } from '@angular/core';
import { CardBuscaComponent } from '../../../shared/card-busca/card-busca.component';
import { Produto } from '../../../core/types/type';
import { ProdutoService } from '../../../core/services/produto.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CardBuscaComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit{
  produtos!: Produto[];
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
