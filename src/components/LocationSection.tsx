import React, { useState } from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { MapPin, Phone, Clock, Copy, Check, Navigation, Star, MessageSquare, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BARBERSHOP_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-neutral-300" />
            Localização & Atendimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif uppercase tracking-widest text-white leading-tight">
            ONDE ESTAMOS <span className="font-serif italic font-normal text-neutral-400">EM MARICÁ</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Fácil acesso no bairro Caju, com ambiente climatizado e preparado para o seu conforto.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Panel */}
          <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Address Highlight */}
              <div className="p-4 bg-white/5 rounded-sm border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                    Endereço Oficial
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded-sm cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-base sm:text-lg font-serif font-bold text-white pt-1">
                  {BARBERSHOP_INFO.address}
                </div>
                <div className="text-xs text-neutral-400">
                  Caju, Maricá - Rio de Janeiro • CEP 24918-100
                </div>
              </div>

              {/* Phone & WhatsApp Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-sm border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-neutral-300" />
                    Telefone
                  </div>
                  <a
                    href={`tel:${BARBERSHOP_INFO.phoneClean}`}
                    className="text-base font-bold font-mono text-white hover:underline block pt-1"
                  >
                    {BARBERSHOP_INFO.phoneDisplay}
                  </a>
                  <span className="text-[10px] text-neutral-500 font-mono">Clique para ligar</span>
                </div>

                <div className="p-4 bg-white/5 rounded-sm border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    WhatsApp
                  </div>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold font-mono text-emerald-400 hover:underline block pt-1"
                  >
                    {BARBERSHOP_INFO.phoneDisplay}
                  </a>
                  <span className="text-[10px] text-neutral-500 font-mono">Agendamento direto</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-4 bg-white/5 rounded-sm border border-white/10 space-y-2">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-300" />
                  Horários de Atendimento
                </div>

                <div className="space-y-1.5 text-xs pt-1">
                  <div className="flex justify-between items-center text-white font-medium">
                    <span>Segunda a Sábado</span>
                    <span className="font-mono bg-white/10 px-2 py-0.5 rounded-sm text-neutral-300">09:00 às 19:00</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Domingo</span>
                    <span className="font-mono text-neutral-500">Fechado</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{BARBERSHOP_INFO.status}</span>
                </div>
              </div>

            </div>

            {/* Quick Action Links */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={BARBERSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 fill-neutral-950" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={BARBERSHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 rounded-sm text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Google Reviews 5.0</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden relative min-h-[350px] lg:min-h-full flex flex-col justify-end p-6">
            
            {/* Visual Dark Map Background styling */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-75"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')`
              }}
            ></div>
            <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[2px]"></div>

            {/* Map Pin Marker Callout */}
            <div className="relative z-10 my-auto text-center space-y-3 p-6 bg-[#0A0A0A]/90 border border-white/20 rounded-sm max-w-md mx-auto shadow-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/60 animate-bounce">
                <MapPin className="w-6 h-6 fill-neutral-950" />
              </div>
              
              <div>
                <h3 className="font-serif font-bold text-lg text-white uppercase tracking-wider">Barbearia 2c do corte</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Estr. Zilto Monteiro de Abreu - Caju, Maricá - RJ
                </p>
                <div className="inline-flex items-center gap-1 bg-amber-400/10 text-amber-300 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-sm mt-2 border border-amber-400/20">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>5.0 ★ (54 Avaliações no Google)</span>
                </div>
              </div>

              <a
                href={BARBERSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Note */}
            <div className="relative z-10 text-center text-[10px] text-neutral-500 font-mono uppercase tracking-widest mt-4">
              Clique acima para visualizar a rota direto no seu GPS
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
