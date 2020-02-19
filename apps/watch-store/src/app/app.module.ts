import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiComponentsModule } from '@practice/ui-components';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/shell/header/header.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { WatchDetailComponent } from './Views/watch-detail/watch-detail.component';
import { CheckoutComponent } from './Views/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WatchDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiComponentsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
