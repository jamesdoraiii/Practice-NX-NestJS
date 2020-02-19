import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductCardComponent, ProductPageComponent],
  exports: [ProductCardComponent, ProductPageComponent]
})
export class UiComponentsModule {}
