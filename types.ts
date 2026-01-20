export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price?: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}