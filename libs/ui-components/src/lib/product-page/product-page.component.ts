import { Component, OnInit, Input } from '@angular/core';
import { Watch } from '@practice/api-interfaces';

@Component({
  selector: 'practice-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() watch: Watch;
  constructor() {}

  ngOnInit(): void {}
}
