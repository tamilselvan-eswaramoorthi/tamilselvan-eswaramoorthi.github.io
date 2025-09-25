import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'Collection of NLP Articles',
      description: 'Articles on transformers from basic to GPT4 and beyond.',
      image: 'assets/images/blog-1.jpg',
      link: 'https://medium.com/@eswaramoorthi.tamilselvan/list/nlp-3655d167a86b'
    },
    {
      title: 'Vision Transformers',
      description: 'How ViTs transformed Computer Vision',
      image: 'assets/images/blog-2.webp',
      link: 'https://medium.com/@eswaramoorthi.tamilselvan/vision-transformers-3eaae0d1fe95'
    },
    {
      title: 'Alzheimer\'s Disease Classification',
      description: 'EEG Feature Extraction and Classification of Alzheimer\'s Disease using Support Vector Machine Classifier',
      image: 'assets/images/blog-3.jpg',
      link: 'https://www.researchgate.net/publication/325945299_EEG_Feature_Extraction_and_Classification_of_Alzheimer\'s_Disease_using_Support_Vector_Machine_Classifier'
    },
    {
      title: 'Tennis Ball Tracker',
      description: 'Comparison of Yolo, SSD, Faster RCNN for Real Time Tennis Ball Tracking for Action Decision Networks',
      image: 'assets/images/blog-4.jpg',
      link: 'https://www.researchgate.net/publication/341070582_Comparison_of_Yolo_SSD_Faster_RCNN_for_Real_Time_Tennis_Ball_Tracking_for_Action_Decision_Networks?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ'
    }
  ];
}