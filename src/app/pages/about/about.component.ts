import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  services: Service[] = [
    {
      icon: 'assets/images/icon-photo.svg',
      title: 'Computer Vision',
      description: 'Building AI solutions with computer vision for real-world applications, from damage detection to quality assurance systems.'
    },
    {
      icon: 'assets/images/icon-dev.svg',
      title: 'Generative AI & LLMs',
      description: 'Developing agentic AI solutions and leveraging large language models for data extraction and intelligent automation.'
    },
    {
      icon: 'assets/images/icon-app.svg',
      title: 'MLOps & Platform Development',
      description: 'Designing self-service ML platforms and end-to-end AI pipelines with CI/CD integration using Azure and AWS.'
    },
    {
      icon: 'assets/images/icon-design.svg',
      title: 'Data Science & Analytics',
      description: 'Turning complex data into actionable insights through machine learning, deep learning, and predictive modeling.'
    }
  ];
}