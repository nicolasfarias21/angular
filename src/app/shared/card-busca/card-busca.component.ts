import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit {
  produtos: any[] = [];
  sanitizedProdutos: any[] = [];
  safeImageUrls: SafeUrl[] = [];
  @Input() produto: any;

  constructor(private produtoService: ProdutoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.produtoService.listar().subscribe(data => {
      this.produtos = data;
      this.sanitizeImageUrls();
    });
  }

  sanitizeImageUrls() {
    this.sanitizedProdutos = this.produtos.filter(produto => {
      const cleanUrl = this.cleanImageUrl(produto.images && produto.images.length > 0 ? produto.images[0] : '');
      if (cleanUrl) {
        this.safeImageUrls.push(this.sanitizer.bypassSecurityTrustUrl(cleanUrl));
        return true;
      }
      return false;
    });
  }

  cleanImageUrl(url: string): string {
    const httpsIndex = url.indexOf('https');
    return httpsIndex !== -1 ? url.substring(httpsIndex) : '';
  }
}
