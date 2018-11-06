import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    AuthComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
