import React from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { Scissors, MapPin, Phone, Star, MessageSquare, Heart, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-neutral-400 text-xs border-t border-white/10 pb-20 md:pb-8 pt-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black border border-amber-400/30 shrink-0">
                <img 
                  src={BARBERSHOP_INFO.logoUrl} 
                  alt={BARBERSHOP_INFO.brandName} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2">
                  <span>BORCELLE</span>
                  <span className="text-xs font-mono font-normal text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded">2C</span>
                </div>
                <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">BARBEARIA 2C DO CORTE • MARICÁ-RJ</div>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Sua barbearia de confiança no Caju, Maricá - RJ. Atendimento com pontualidade, cortes degradê modernos e alinhamento de alta precisão.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={BARBERSHOP_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase tracking-wider hover:bg-amber-400/20 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 de 5.0 estrelas no Google (54 avaliações)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
              CONTATO & ENDEREÇO
            </div>
            
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{BARBERSHOP_INFO.address}</div>
                  <div className="text-[10px] font-mono text-neutral-500">Caju, Maricá - RJ</div>
                </div>
              </div>

              {/* Prominent WhatsApp Phone row */}
              <div className="p-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded-sm inline-block">
                <a 
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono font-bold text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>{BARBERSHOP_INFO.phoneDisplay}</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded uppercase font-semibold">Whats</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href={`tel:${BARBERSHOP_INFO.phoneClean}`} className="hover:text-white font-mono font-semibold">
                  {BARBERSHOP_INFO.phoneDisplay} (Ligação)
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
              LINKS RÁPIDOS
            </div>

            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Tabela de Serviços</a>
              </li>
              <li>
                <a href="#trabalhos" className="hover:text-white transition-colors">Galeria de Trabalhos</a>
              </li>
              <li>
                <a href={BARBERSHOP_INFO.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Avaliações no Google</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href={BARBERSHOP_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Google Maps / Rotas</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} {BARBERSHOP_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com elegância e alta performance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
