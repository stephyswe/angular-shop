import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ) { }

  products: Product[] = [];

  totalRecords: number = 0;
  rows: number = 5;

  onProductOutput(product: Product) {
    console.log(product, "Output");
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService.getProducts('http://localhost:3000/clothes', {
      page,
      perPage
    }).subscribe((products) => {
      this.products = products.items;
      this.totalRecords = products.total;
    })
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
