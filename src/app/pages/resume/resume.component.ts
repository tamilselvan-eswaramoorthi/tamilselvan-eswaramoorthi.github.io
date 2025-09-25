import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem, Skill, Achievement } from '../../interfaces/portfolio.interface';

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
      title: 'Bannari Amman Institute of Technology',
      period: '2015 — 2019',
      description: 'BE Electronics and Instrumentation Engineering (CGPA: 8.48). Relevant courses: Sensors and Actuators, Data Science, Data Structures, Control Systems and Time Series Forecasting.'
    }
  ];

  experience: TimelineItem[] = [
    {
      title: 'Specialist Data Scientist at LTIMindtree',
      period: 'Sep 2021 — Present',
      description: 'Designed self-service ML platforms for computer vision and data analytics. Led 5-member team building end-to-end products for Hindustan Unilever generating €400K revenue. Won Eaton AI Challenge with agentic AI solution, securing $2M deal. Developed EHS systems, damage detection for AVIS (60% cost reduction), and water quality forecasting for government projects.'
    },
    {
      title: 'AI Developer at Hubino Solutions',
      period: 'Oct 2019 — Sep 2021',
      description: 'Developed camera health checks and driver behavior analysis for fleet management (5% sales boost). Built in-house OCR platform with higher accuracy than commercial solutions, deployed across 3 hospitals. Created face authentication systems and 3D geometry solutions using stereo cameras.'
    },
    {
      title: 'Computer Vision Trainee at Artivatic',
      period: 'Jun 2019 — Sep 2019',
      description: 'Developed KYC document extraction platform for M&M Insurance with skew correction and ROI separation. Built POC using random forest to predict insurance claim likelihood.'
    },
    {
      title: 'Project Trainee at HTIC – IIT Madras',
      period: 'Dec 2018 — Jun 2019',
      description: 'Developed body mapping POC for inverse kinematics in sports applications, now used in Netrin. Created tennis serve analysis system for player posture mapping and coaching feedback.'
    },
    {
      title: 'Data Science Intern at Robert Bosch Labs',
      period: 'Dec 2017 — Feb 2018',
      description: 'Developed detection and segmentation models for retinal fundus camera images for automated detection of diabetic retinopathy and hypertensive retinopathy.'
    }
  ];

  skills: Skill[] = [
    {
      category: 'Programming Languages',
      items: ['Python', 'HTML', 'JavaScript', 'PostgreSQL']
    },
    {
      category: 'AI/ML Tools',
      items: ['OpenCV', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Langgraph', 'Langchain']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure', 'AWS', 'Docker', 'Triton', 'MLflow', 'CI/CD']
    },
    {
      category: 'Data & Web Technologies',
      items: ['AngularJS', 'Superset', 'Time Series Forecasting', 'Predictive Modeling']
    },
    {
      category: 'AI Specializations',
      items: ['Computer Vision', 'Generative AI', 'Agentic AI', 'NLP', 'Edge Computing']
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Patents & Publications',
      description: 'Method for identifying incremental vehicle damages (2025), Multimodal product catalogue system (2024), EEG Feature Extraction for Alzheimer\'s Detection (2017), OCR Processing for Examinations (2017)'
    },
    {
      title: 'Awards & Recognition',
      description: 'Won Eaton AI Challenge (2024), Pioneer Squad Award (2025), Star Award (2023), Accountability Award (2024), Spot-On Award (2021) from LTIMindtree'
    },
    {
      title: 'Competition Victories',
      description: '1st place in IDP Hackathon by Pricol (2017), 4th place in State-level Robotic Championship (2016)'
    },
    {
      title: 'Business Impact',
      description: 'Generated €400K revenue for LTIM through Hindustan Unilever projects, Secured $2M deal through Eaton AI Challenge, 60% cost reduction in AVIS inspection processes'
    }
  ];
}