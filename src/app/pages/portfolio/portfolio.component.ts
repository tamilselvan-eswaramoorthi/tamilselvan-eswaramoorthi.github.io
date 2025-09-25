import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Pixel - Image Tagging Platform',
      category: 'Computer Vision Platform',
      image: 'assets/images/project-1.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Yoshi - AI Project Management',
      category: 'Generative AI Platform',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Agentic AI for Digital Twin',
      category: 'Manufacturing AI Solution',
      image: 'assets/images/project-3.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'EHS Safety System',
      category: 'Construction Safety AI',
      image: 'assets/images/project-4.webp',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'AVIS Damage Detection',
      category: 'Real-time Computer Vision',
      image: 'assets/images/project-5.jpeg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Jal Jeevan Water Quality',
      category: 'IoT & Predictive Analytics',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    }
  ];
}