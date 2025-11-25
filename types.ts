
export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  image: string;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  dogName: string;
  text: string;
  rating: number;
}

export interface NavParams {
  service?: string;
  date?: Date;
  message?: string;
}
