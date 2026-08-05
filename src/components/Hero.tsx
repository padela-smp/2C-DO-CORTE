import React from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { Star, MapPin, Phone, MessageSquare, ChevronDown, CheckCircle2, Clock, Navigation } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden pt-8 pb-16 md:py-24 border-b border-white/10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img
          src="/src/assets/images/hero_barbershop_1785963306038.jpg"
          alt="Barbearia 2c do corte interior"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
      </div>

      {/* Grid Line Pattern Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Rating & Location Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/10 rounded-sm p-1.5 pr-4 text-[11px] font-mono tracking-wider uppercase backdrop-blur-sm">
              <a 
                href={BARBERSHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2.5 py-1 rounded-sm hover:bg-amber-400/20 transition-colors"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0</span>
                <span className="text-amber-300 text-[10px] underline">({BARBERSHOP_INFO.googleReviewCount} avaliações)</span>
              </a>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                Caju, Maricá - RJ
              </span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white uppercase leading-[0.95]">
                O CORTE QUE <br />
                <span className="font-serif italic font-normal text-neutral-400">
                  DEFINE SEU ESTILO.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
                Barbearia especializada em cortes degradê de alta precisão, alinhamento na navalha, barba tratada e platinado (nevou). Experiência completa com pontualidade e estilo em Maricá.
              </p>
            </div>

            {/* Quick Contact Specs Card */}
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm space-y-3 text-xs sm:text-sm text-neutral-300 max-w-lg backdrop-blur-md">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-xs uppercase tracking-wider">Endereço Visível:</div>
                  <div className="text-neutral-400 text-xs mt-0.5">{BARBERSHOP_INFO.address}</div>
                </div>
              </div>
              
              <div className="pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-medium text-white font-mono text-xs">{BARBERSHOP_INFO.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Seg a Sáb: 09h às 19h</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-neutral-950 font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg flex items-center justify-center gap-3 text-xs sm:text-sm group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-neutral-950 group-hover:scale-110 transition-transform" />
                <span>AGENDAR PELO WHATSAPP</span>
              </button>

              <a
                href={BARBERSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 text-xs"
              >
                <Navigation className="w-4 h-4 text-neutral-400" />
                <span>Abrir Google Maps</span>
              </a>
            </div>

            {/* Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>Navalha Descartável</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>Ambiente Climatizado</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <img
                src="/src/assets/images/fade_beard_cut_1785963316984.jpg"
                alt="Corte Degradê na Barbearia 2c do corte"
                className="w-full h-[400px] object-cover object-top filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>

              {/* Float Badge 1: Google Rating */}
              <a 
                href={BARBERSHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md rounded-sm p-3 text-left shadow-lg hover:border-white/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>5.0 / 5.0</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-1 font-mono uppercase tracking-wider">54 Avaliações Google</div>
              </a>

              {/* Float Badge 2: Location Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md rounded-sm p-3.5 text-left">
                <div className="text-xs font-bold text-white uppercase tracking-widest flex justify-between items-center font-mono">
                  <span>TRABALHO EM DEGRADÊ</span>
                  <span className="text-[10px] text-emerald-400 font-normal">BARBEARIA 2C</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Precisão nos detalhes e acabamento perfeito na navalha.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
