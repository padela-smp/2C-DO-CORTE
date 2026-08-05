import React, { useState } from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { MapPin, Phone, Star, Clock, Copy, Check, ExternalLink, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const QuickInfoBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BARBERSHOP_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-black/60 border-b border-white/10 text-neutral-200 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Item 1: Address */}
        <div className="bg-white/[0.02] p-4 rounded-sm border border-white/10 flex items-start gap-3">
          <div className="p-2 bg-white/5 rounded-sm text-neutral-300 shrink-0 mt-0.5 border border-white/10">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Endereço</div>
            <div className="text-xs font-semibold text-white truncate mt-0.5">{BARBERSHOP_INFO.address}</div>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={BARBERSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-neutral-300 hover:text-white underline underline-offset-2 flex items-center gap-1 font-mono uppercase tracking-wider"
              >
                <span>Google Maps</span>
                <Navigation className="w-3 h-3 text-neutral-400" />
              </a>
              <span className="text-neutral-700">•</span>
              <button
                onClick={handleCopyAddress}
                className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer font-mono uppercase tracking-wider"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Item 2: Phone & WhatsApp */}
        <div className="bg-white/[0.03] p-4 rounded-sm border border-emerald-500/30 flex items-start gap-3 shadow-md">
          <div className="p-2.5 bg-emerald-500/20 rounded-sm text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
            <WhatsAppIcon className="w-5 h-5 text-emerald-400 fill-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">WhatsApp / Telefone</div>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-white hover:text-emerald-400 transition-colors mt-0.5 font-mono block"
            >
              {BARBERSHOP_INFO.phoneDisplay}
            </a>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 uppercase font-mono tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"
              >
                <span>Chamar no WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Item 3: Google Rating */}
        <div className="bg-white/[0.02] p-4 rounded-sm border border-white/10 flex items-start gap-3">
          <div className="p-2 bg-amber-400/10 rounded-sm text-amber-400 border border-amber-400/20 shrink-0 mt-0.5">
            <Star className="w-4 h-4 fill-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Avaliações Google</div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5 mt-0.5 font-mono">
              <span>5.0 de 5.0</span>
              <span className="text-amber-400">★★★★★</span>
            </div>
            <div className="mt-2">
              <a
                href={BARBERSHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-neutral-300 hover:text-white underline underline-offset-2 flex items-center gap-1 font-mono uppercase tracking-wider"
              >
                <span>54 opiniões clientes</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Item 4: Business Hours */}
        <div className="bg-white/[0.02] p-4 rounded-sm border border-white/10 flex items-start gap-3">
          <div className="p-2 bg-white/5 rounded-sm text-neutral-300 shrink-0 mt-0.5 border border-white/10">
            <Clock className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Funcionamento</div>
            <div className="text-xs font-semibold text-white mt-0.5 font-mono">Seg a Sáb: 09:00 - 19:00</div>
            <div className="mt-2 text-[11px] text-emerald-400 font-mono font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Aberto Atualmente</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
