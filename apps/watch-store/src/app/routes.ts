import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WatchDetailComponent } from './Views/watch-detail/watch-detail.component';
import { CheckoutComponent } from './Views/checkout/checkout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'watch/:id',
    component: WatchDetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];
