export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface NavItem {
  name: string;
  active: boolean;
}

export interface ContactForm {
  fullname: string;
  email: string;
  message: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}