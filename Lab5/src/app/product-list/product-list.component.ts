import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currentCategory: string = "All";
  allItems: any = products;
  categories: string[] = this.handleCategoriesList(this.allItems);

  constructor(

      private cartService: CartService
  ) { }
  public get getAllItems(): any {
    return this.allItems;
  }

  public set setAllItems(val: any) {
    this.allItems = val;
  }

  share(product: any) {
    window.open("https://t.me/share/url?url=" +encodeURIComponent(product.shopLink)+ "&text="+encodeURIComponent(product.name))
  }

  shareWA(product: any) {
    window.open("whatsapp://send?text="+encodeURIComponent(product.name))
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  openKaspi(shopLink: string){
    window.open(shopLink, '_blank');
  }
  handleCategory(category: string): any {
    this.currentCategory = category;
    return this.currentCategory === "All" ? this.allItems : this.allItems.filter((item: { category: string }) => item.category === category);
  }

  handleCategoriesList(items: Product[]): string[] {
    const categories = new Set<string>();
    categories.add("All");
    items.forEach((item) => categories.add(item.category));
    return Array.from(categories);
  }

  updateLike(likes: number, product: Product) {
    product.likes = likes;
  }

  handleDelete(product: Product): void {
    const index = this.allItems.indexOf(product);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }
}
