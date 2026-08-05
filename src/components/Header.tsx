import React, { useState } from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { Scissors, Star, MapPin, Phone, Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 text-[#F5F5F5] transition-all">
      {/* Top Banner Bar */}
      <div className="bg-black/80 border-b border-white/5 py-2 px-4 text-[11px] text-neutral-400 font-mono tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href={BARBERSHOP_INFO.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span className="truncate">{BARBERSHOP_INFO.shortAddress}</span>
            </a>
            <span className="hidden sm:inline text-neutral-700">•</span>
            {/* Prominent WhatsApp / Phone Link in Top Bar */}
            <a 
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 font-bold hover:text-emerald-300 transition-colors bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span className="text-xs font-mono">{BARBERSHOP_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={BARBERSHOP_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-neutral-200 px-2.5 py-0.5 rounded text-[11px] border border-white/10 transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">{BARBERSHOP_INFO.googleRating.toFixed(1)}</span>
              <span className="text-neutral-400">({BARBERSHOP_INFO.googleReviewCount} avaliações)</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {BARBERSHOP_INFO.status.split('•')[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo with attached brand logo image */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-black border border-amber-400/30 shadow-md group-hover:border-amber-400/80 transition-colors shrink-0">
            <img 
              src={BARBERSHOP_INFO.logoUrl} 
              alt={BARBERSHOP_INFO.brandName} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl tracking-wider text-white uppercase font-bold leading-tight flex items-center gap-2">
              <span>BORCELLE</span>
              <span className="text-xs font-mono font-normal text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded">2C</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 tracking-[0.2em] uppercase font-serif italic">
              Barbearia 2c do corte
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
          <a href="#servicos" className="hover:text-white transition-colors py-1 hover:border-b hover:border-white">Serviços</a>
          <a href="#trabalhos" className="hover:text-white transition-colors py-1 hover:border-b hover:border-white">Trabalhos</a>
          <a href="#avaliacoes" className="hover:text-white transition-colors py-1 flex items-center gap-1.5 hover:border-b hover:border-white">
            Avaliações <span className="text-[9px] bg-amber-400/10 text-amber-300 border border-amber-400/20 px-1.5 py-0.5 rounded-sm">5.0 ★</span>
          </a>
          <a href="#localizacao" className="hover:text-white transition-colors py-1 hover:border-b hover:border-white">Onde Estamos</a>
          <a href="#guia-estilo" className="hover:text-white transition-colors py-1 hover:border-b hover:border-white">Guia de Estilo</a>
        </nav>

        {/* Action Buttons: Prominent WhatsApp Phone Badge + Booking */}
        <div className="hidden md:flex items-center gap-3">
          {/* Highly Visible WhatsApp Phone Button */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs sm:text-sm font-bold font-mono text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 rounded-sm transition-all shadow-md flex items-center gap-2 group"
            title="Chamar no WhatsApp"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            </div>
            <span className="text-sm font-bold tracking-tight text-emerald-300">{BARBERSHOP_INFO.phoneDisplay}</span>
          </a>
          
          <button
            onClick={() => onOpenBooking()}
            className="px-4 sm:px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-950 bg-white hover:bg-neutral-200 active:bg-neutral-300 rounded-sm transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            Agendar
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-neutral-300 text-xs uppercase tracking-widest">
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 flex justify-between items-center"
            >
              <span>Serviços & Preços</span>
              <span className="text-[10px] text-neutral-600 font-mono">01</span>
            </a>
            <a 
              href="#trabalhos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 flex justify-between items-center"
            >
              <span>Nossos Trabalhos</span>
              <span className="text-[10px] text-neutral-600 font-mono">02</span>
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <span>Avaliações Google</span>
                <span className="bg-amber-400/10 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-sm border border-amber-400/20">5.0 ★</span>
              </div>
              <span className="text-[10px] text-neutral-600 font-mono">03</span>
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 flex justify-between items-center"
            >
              <span>Endereço & Contato</span>
              <span className="text-[10px] text-neutral-600 font-mono">04</span>
            </a>
            <a 
              href="#guia-estilo" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 flex justify-between items-center"
            >
              <span>Descubra seu Corte Ideal</span>
              <span className="text-[10px] text-neutral-600 font-mono">05</span>
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors text-xs"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950" />
              Agendar pelo WhatsApp
            </button>

            <a
              href={BARBERSHOP_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors text-[11px]"
            >
              <MapPin className="w-4 h-4 text-neutral-400" />
              Ver no Google Maps / Traçar Rota
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
