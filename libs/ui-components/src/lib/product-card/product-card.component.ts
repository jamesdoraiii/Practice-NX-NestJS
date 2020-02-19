import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Watch } from '@practice/api-interfaces';

@Component({
  selector: 'practice-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() watch: Watch;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(id): void {
    this.router.navigate([`/watch/${id}`]);
  }
}
