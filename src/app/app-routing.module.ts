import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioExpandedComponent } from './portfolio/portfolio-expanded/portfolio-expanded.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid/portfolio-grid.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: 'expanded', component: PortfolioExpandedComponent }, 
      { path: 'grid', component: PortfolioGridComponent } 
    ]
  },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServicesComponent];
