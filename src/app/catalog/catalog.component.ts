import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, NgStyle, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  productList: Product[] = [
    {
      id: 1,
      name: "Machine a café",
      price: 49,
      isPromoted: false,
      promotion: 0, 
      expirationPromo: null
    },
    {
      id: 2,
      name: "Machine a popcorn",
      price: 79,
      isPromoted: true,
      promotion: 10, 
      expirationPromo: null
    },
    {
      id: 3,
      name: "Machine a vapeur",
      price: 179,
      isPromoted: true,
      promotion: 25, 
      expirationPromo: null
    }
  ]



}
