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
      title: 'DocGen',
      category: 'Document Dataset Generator',
      image: 'assets/images/project-1.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/idp_data_generator'
    },
    {
      title: 'AquaDoc',
      category: 'End to End IDP Solution',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/idp'
    },
    {
      title: 'Robotic House Cleaner',
      category: 'Obstacle Avoidance for Vacuum Robot',
      image: 'assets/images/project-3.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/house_cleaning_robot'
    },
    {
      title: 'Aerial Mapper',
      category: 'Maps area through drones',
      image: 'assets/images/project-4.webp',
      link: 'https://github.com/tamilselvan-eswaramoorthi/shape-detection-for-drone-images'
    },
    {
      title: 'Traffic Control',
      category: 'Adaptive Traffic Light Control',
      image: 'assets/images/project-5.jpeg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/adaptive-traffic-light-control'
    },
    {
      title: 'People Counter',
      category: 'Footfall counter and analytics',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi/person-counter'
    }
  ];
}