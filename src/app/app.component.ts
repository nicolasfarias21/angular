import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './core/services/produto.service';
import { CategoriaService } from './core/services/categoria.service';
import { ContainerComponent } from './shared/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent, FooterComponent, HttpClientModule,ContainerComponent],
  providers: [ProdutoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste1';
  
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
