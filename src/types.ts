export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  category: 'corte' | 'barba' | 'combo' | 'quimica';
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fade' | 'barba' | 'nevou' | 'alinhamento';
  imageUrl: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface BookingState {
  services: string[];
  date: string;
  time: string;
  clientName: string;
  barberPreference: string;
  notes: string;
}
