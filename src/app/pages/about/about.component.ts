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
      description: 'I excel at unlocking the world through the camera lens'
    },
    {
      icon: 'assets/images/icon-dev.svg',
      title: 'Natural Language Processing',
      description: 'I\'m skilled at bridging the gap between human language and machine understanding'
    },
    {
      icon: 'assets/images/icon-app.svg',
      title: 'API Development',
      description: 'I build robust and scalable web applications with Django, Flask, and FastAPI.'
    },
    {
      icon: 'assets/images/icon-dev.svg',
      title: 'Data Science',
      description: 'I turn data into actionable insights with advanced analytics and machine learning.'
    }
  ];
}