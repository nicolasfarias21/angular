import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { ProdutoService } from '../../core/services/produto.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    FormBuscaComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private servicoProduto: ProdutoService) {

  }
  ngOnInit(): void {
    this.servicoProduto.listar()
    .subscribe(
      resposta => {
        console.log(resposta)
      }
    )
  }
}
