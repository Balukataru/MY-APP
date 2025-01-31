import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css'],
})
export class FlipcartComponent {
  products: any = [];
  constructor(private _flipcartservice: FlipcartService) {
    _flipcartservice.getproducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
