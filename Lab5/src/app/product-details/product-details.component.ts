import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { faHeart,faTrashCan } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent{

  @Input() product: any
  @Output() likesUpdate = new EventEmitter<number>();
  @Output() deleteUpdate = new EventEmitter();

  heartIco = faHeart;
  trashIco = faTrashCan;
  clicked: boolean = false;



  handleLike(): void {
    if (this.clicked) {
      this.product.likes--;
      this.likesUpdate.emit(this.product.likes);
      this.clicked = false;
      return;
    }
    this.product.likes++;
    this.likesUpdate.emit(this.product.likes);
    this.clicked = true;
  }

  handleDelete(): void {
    this.deleteUpdate.emit(this.product.id);
  }

}
