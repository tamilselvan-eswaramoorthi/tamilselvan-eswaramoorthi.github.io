import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import services
import { PortfolioService } from '../../services/portfolio.service';

// Import components
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

// Import page components
import { AboutComponent } from '../../pages/about/about.component';
import { ResumeComponent } from '../../pages/resume/resume.component';
import { PortfolioComponent } from '../../pages/portfolio/portfolio.component';
import { BlogComponent } from '../../pages/blog/blog.component';
import { ContactComponent } from '../../pages/contact/contact.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class MainLayoutComponent implements AfterViewInit {
  activePage: string = 'About';

  constructor(private portfolioService: PortfolioService) {}

  ngAfterViewInit() {
    // Initialize portfolio interactions after view is loaded
    setTimeout(() => {
      this.portfolioService.initializePortfolioInteractions();
    }, 100);
  }

  onPageChange(page: string) {
    this.activePage = page;
    // Handle page navigation with service
    this.portfolioService.handlePageNavigation(page);
  }
}