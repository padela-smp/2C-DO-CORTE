import { ServiceItem, GalleryItem, ReviewItem } from '../types';
import barberLogo from '../assets/images/barber_logo_1785964702110.jpg';
import heroBarbershopImg from '../assets/images/hero_barbershop_1785963306038.jpg';
import fadeBeardImg from '../assets/images/fade_beard_cut_1785963316984.jpg';
import nevouStyleImg from '../assets/images/nevou_style_cut_1785963327416.jpg';

export const BARBERSHOP_INFO = {
  name: "Barbearia 2c do corte",
  brandName: "Borcelle Barbearia",
  logoUrl: barberLogo,
  tagline: "Estilo, Precisão e Elegância em Maricá",
  address: "Estr. Zilto Monteiro de Abreu - Caju, Maricá - RJ, 24918-100",
  shortAddress: "Caju, Maricá - RJ",
  phoneDisplay: "(21) 98319-7728",
  phoneClean: "5521983197728",
  googleRating: 5.0,
  googleReviewCount: 54,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barbearia+2c+do+corte+Estr+Zilto+Monteiro+de+Abreu+Caju+Marica+RJ",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Barbearia+2c+do+corte+Estr+Zilto+Monteiro+de+Abreu+Caju+Marica+RJ#reviews",
  instagramUrl: "https://instagram.com",
  hours: [
    { days: "Segunda a Sábado", time: "09:00 - 19:00" },
    { days: "Domingo", time: "Fechado" }
  ],
  status: "Aberto • Fecha às 19:00"
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'corte-navalha',
    name: 'Corte com Navalha / Degradê',
    description: 'Corte moderno com técnica de degradê (fade) personalizado, finalização com navalha e alinhamento de alta precisão.',
    price: 35,
    durationMinutes: 45,
    category: 'corte',
    popular: true
  },
  {
    id: 'barba-navalha',
    name: 'Barba com Navalha',
    description: 'Modelagem completa da barba com toalha quente, produtos hidratantes e acabamento impecável na navalha.',
    price: 30,
    durationMinutes: 30,
    category: 'barba',
    popular: true
  },
  {
    id: 'combo-corte-barba',
    name: 'Combo Completo (Corte + Barba)',
    description: 'O pacote definitivo de alinhamento visual. Corte degradê com navalha + barba desenhada e hidratação.',
    price: 60,
    durationMinutes: 70,
    category: 'combo',
    popular: true
  },
  {
    id: 'nevou-platinado',
    name: 'Nevou / Platinado',
    description: 'Descoloração global com proteção do couro cabeludo e matização para alcançar o loiro platinado perfeito.',
    price: 80,
    durationMinutes: 120,
    category: 'quimica',
    popular: true
  },
  {
    id: 'coloracao-cabelo',
    name: 'Coloração & Pigmentação',
    description: 'Disfarce de fios brancos ou pigmentação do corte/barba para realçar os contornos e sombras.',
    price: 40,
    durationMinutes: 40,
    category: 'quimica'
  },
  {
    id: 'corte-maquina-tesoura',
    name: 'Corte Clássico Tesoura & Máquina',
    description: 'Corte social clássico ou moderno executado na tesoura e máquina com acabamento refinado.',
    price: 30,
    durationMinutes: 35,
    category: 'corte'
  },
  {
    id: 'sobrancelha-pezinho',
    name: 'Pezinho & Sobrancelha',
    description: 'Manutenção rápida dos contornos do cabelo e design de sobrancelha masculina na navalha.',
    price: 20,
    durationMinutes: 20,
    category: 'barba'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Degradê Navalhado Perfeito',
    category: 'fade',
    imageUrl: fadeBeardImg,
    description: 'Transição suave com acabamento na navalha e barba bem alinhada.'
  },
  {
    id: '2',
    title: 'Estilo Nevou Platinado',
    category: 'nevou',
    imageUrl: nevouStyleImg,
    description: 'Platinado brilhante e uniforme com corte de alta precisão nas laterais.'
  },
  {
    id: '3',
    title: 'Barba Alinhada & Pigmentada',
    category: 'barba',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    description: 'Contorno de barba esculpido com toalha quente e hidratantes premium.'
  },
  {
    id: '4',
    title: 'Low Fade com Risco Lateral',
    category: 'fade',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    description: 'Visual moderno com detalhe em freestyle na lateral.'
  },
  {
    id: '5',
    title: 'Corte Americano / Taper Fade',
    category: 'alinhamento',
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
    description: 'Acabamento limpo na nuca e têmporas, mantendo o topo volumoso.'
  },
  {
    id: '6',
    title: 'Ambiente Elegante 2c do Corte',
    category: 'alinhamento',
    imageUrl: heroBarbershopImg,
    description: 'Estrutura preparada para proporcionar conforto e o melhor atendimento.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Marcos Vinícius',
    rating: 5,
    timeAgo: 'há 1 semana',
    comment: 'Melhor barbearia de Maricá sem dúvidas! Atendimento nota 1000, o corte na navalha fica impecável e o ambiente é muito top.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Lucas Andrade',
    rating: 5,
    timeAgo: 'há 2 semanas',
    comment: 'Fiz o Nevou aqui e ficou surreal de brabo! Fios super preservados e a cor ficou perfeita. Agendamento pelo WhatsApp super rápido.',
    verified: true
  },
  {
    id: 'r3',
    author: 'Rodrigo Silva',
    rating: 5,
    timeAgo: 'há 3 semanas',
    comment: 'O barbeiro manda muito bem no degradê e na barba. Lugar limpo, organizado e no preço justo. Recomendo pra geral no Caju!',
    verified: true
  },
  {
    id: 'r4',
    author: 'Gabriel Santos',
    rating: 5,
    timeAgo: 'há 1 mês',
    comment: 'Nota 5 estrelas merecidíssimas. Barba na toalha quente é outro nível de conforto. Pontualidade e profissionalismo nota dez.',
    verified: true
  }
];

export function buildWhatsAppLink(selectedServices: string[] = [], date = '', time = '', name = ''): string {
  let text = `Olá! Gostaria de agendar um horário na Barbearia 2c do Corte.`;
  
  if (selectedServices.length > 0) {
    const serviceNames = selectedServices.map(id => {
      const s = SERVICES_LIST.find(item => item.id === id);
      return s ? s.name : id;
    }).join(', ');
    text += `\n\n✂️ *Serviço(s)*: ${serviceNames}`;
  }
  
  if (date) {
    text += `\n📅 *Data preferida*: ${date}`;
  }
  
  if (time) {
    text += `\n🕒 *Horário*: ${time}`;
  }
  
  if (name.trim()) {
    text += `\n👤 *Nome do cliente*: ${name.trim()}`;
  }
  
  text += `\n\nQual a disponibilidade de vocês? Obrigado!`;
  
  return `https://wa.me/${BARBERSHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
}
