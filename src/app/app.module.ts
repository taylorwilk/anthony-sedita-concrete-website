import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoComponent } from './logo/logo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LucideAngularModule, ChevronRight, ChevronLeft, PhoneCall, X } from 'lucide-angular';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { PortfolioExpandedComponent } from './portfolio/portfolio-expanded/portfolio-expanded.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid/portfolio-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    MainPageComponent,
    FormDialogComponent,
    PortfolioComponent,
    ServicesComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    UnderConstructionComponent,
    PortfolioCardComponent,
    PortfolioExpandedComponent,
    PortfolioGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ChevronRight, ChevronLeft, PhoneCall, X}),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
