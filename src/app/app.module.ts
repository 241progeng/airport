import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { ActiveFlightsComponent } from './active-flights/active-flights.component';
import { TicketsHistoryComponent } from './tickets-history/tickets-history.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';

const appRoutes: Routes = [
  { path: '', component: SearchFlightComponent },
  { path: 'all-flights', component: AllFlightsComponent },
  { path: 'active-tickets',      component: ActiveFlightsComponent },
  { path: 'tickets-history', component: TicketsHistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    AuthComponent,
    MenuComponent,
    AllFlightsComponent,
    ActiveFlightsComponent,
    TicketsHistoryComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
