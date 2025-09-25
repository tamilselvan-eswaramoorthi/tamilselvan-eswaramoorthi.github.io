import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent {
  education: TimelineItem[] = [
    {
      title: 'Bannari Amman Institute of Tech',
      period: '2015 — 2019',
      description: 'Bachelor\'s in Electronics and Instrumentation Engineering'
    }
  ];

  experience: TimelineItem[] = [
    {
      title: 'Data Scientist at LTIMindtree',
      period: '2021 — Present',
      description: 'Part of iNXT product development team and developed advanced safety, damage detection, and data extraction systems, significantly enhancing operational efficiency and reducing costs across multiple industries.'
    },
    {
      title: 'AI Developer at Hubino',
      period: '2019 — 2021',
      description: 'Developed innovative features for fleet management and medical trials digitization while contributing to facial authentication systems and 3D geometry assessments for industrial applications.'
    },
    {
      title: 'Internships at IIT Madras, Robert Bosch and Artivatic',
      period: 'Total of 12 month from 2017 to 2019',
      description: 'Did Projects on enhancing document extraction accuracy, developing sports biomechanics tools, and advancing medical imaging AI for precise diagnostic applications.'
    }
  ];
}