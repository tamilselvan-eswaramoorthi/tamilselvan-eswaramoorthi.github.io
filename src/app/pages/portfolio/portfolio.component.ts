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
    // Document Processing & AI Solutions
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
      title: 'Eaton AI Challenge Winner',
      category: 'Agentic AI Solution - $2M Deal',
      image: 'assets/images/project-1.jpg',
      link: 'https://www.linkedin.com/in/tamilselvan-eswaramoorthy/'
    },
    {
      title: 'KYC Document Extraction',
      category: 'M&M Insurance Platform',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'In-House OCR Platform',
      category: 'Hospital Deployment - 3 Locations',
      image: 'assets/images/project-3.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    
    // Computer Vision & Healthcare
    {
      title: 'Diabetic Retinopathy Detection',
      category: 'Medical AI - Bosch Labs',
      image: 'assets/images/project-4.webp',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Alzheimer\'s Disease Classification',
      category: 'EEG Signal Analysis',
      image: 'assets/images/project-5.jpeg',
      link: 'https://www.researchgate.net/publication/325945299_EEG_Feature_Extraction_and_Classification_of_Alzheimer\'s_Disease_using_Support_Vector_Machine_Classifier'
    },
    {
      title: 'AVIS Damage Detection',
      category: 'Vehicle Inspection - 60% Cost Reduction',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Camera Health Monitoring',
      category: 'Fleet Management System',
      image: 'assets/images/project-1.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Face Authentication System',
      category: 'Security & Access Control',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    
    // Sports & Motion Analysis
    {
      title: 'Tennis Ball Tracker',
      category: 'Real-time Sports Analytics',
      image: 'assets/images/project-3.jpg',
      link: 'https://www.researchgate.net/publication/341070582_Comparison_of_Yolo_SSD_Faster_RCNN_for_Real_Time_Tennis_Ball_Tracking_for_Action_Decision_Networks'
    },
    {
      title: 'Body Mapping for Sports',
      category: 'Inverse Kinematics - HTIC IIT Madras',
      image: 'assets/images/project-4.webp',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Tennis Serve Analysis',
      category: 'Player Posture Coaching System',
      image: 'assets/images/project-5.jpeg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Driver Behavior Analysis',
      category: 'Fleet Safety - 5% Sales Boost',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    
    // Robotics & Automation
    {
      title: 'Robotic House Cleaner',
      category: 'Obstacle Avoidance for Vacuum Robot',
      image: 'assets/images/project-1.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/house_cleaning_robot'
    },
    {
      title: 'Aerial Mapper',
      category: 'Drone-based Area Mapping',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/shape-detection-for-drone-images'
    },
    {
      title: 'Traffic Control System',
      category: 'Adaptive Traffic Light Control',
      image: 'assets/images/project-3.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi/adaptive-traffic-light-control'
    },
    {
      title: '3D Geometry Solutions',
      category: 'Stereo Camera Applications',
      image: 'assets/images/project-4.webp',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    
    // Business & Analytics Solutions
    {
      title: 'Hindustan Unilever Projects',
      category: 'End-to-End ML Products - €400K Revenue',
      image: 'assets/images/project-5.jpeg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'People Counter Analytics',
      category: 'Footfall Counter and Business Analytics',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi/person-counter'
    },
    {
      title: 'Water Quality Forecasting',
      category: 'Government Project - Time Series',
      image: 'assets/images/project-1.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'EHS Safety Systems',
      category: 'Environmental Health & Safety Platform',
      image: 'assets/images/project-2.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    {
      title: 'Self-Service ML Platform',
      category: 'MLOps Platform Development',
      image: 'assets/images/project-3.jpg',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    },
    
    // Research & Innovation
    {
      title: 'Multimodal Product Catalogue',
      category: 'Patent - AI-driven Cataloguing',
      image: 'assets/images/project-4.webp',
      link: 'https://patents.google.com/'
    },
    {
      title: 'Incremental Vehicle Damage Detection',
      category: 'Patent - Insurance Technology',
      image: 'assets/images/project-5.jpeg',
      link: 'https://patents.google.com/'
    },
    {
      title: 'Insurance Claim Prediction',
      category: 'Random Forest ML Model',
      image: 'assets/images/project-6.png',
      link: 'https://github.com/tamilselvan-eswaramoorthi'
    }
  ];
}