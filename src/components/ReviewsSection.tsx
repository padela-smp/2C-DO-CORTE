import React from 'react';
import { BARBERSHOP_INFO } from '../data/barberData';
import { REVIEWS_LIST } from '../data/barberData';
import { Star, ExternalLink, Quote, ShieldCheck, MessageSquarePlus } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Banner Box */}
        <div className="bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Pontuação Máxima no Google Maps</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif uppercase text-white tracking-widest leading-tight">
              5.0 ESTRELAS <span className="font-serif italic font-normal text-neutral-400">NO GOOGLE</span>
            </h2>
            
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl">
              Mais de <strong className="text-white">54 clientes satisfeitos</strong> avaliaram com nota máxima a Barbearia 2c do corte no Google Meu Negócio em Maricá-RJ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={BARBERSHOP_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold rounded-sm text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>Ver 54 Avaliações</span>
              <ExternalLink className="w-4 h-4 text-neutral-950" />
            </a>

            <a
              href={BARBERSHOP_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 font-semibold rounded-sm text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-400" />
              <span>Avaliar no Google</span>
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.map(review => (
            <div
              key={review.id}
              className="bg-white/[0.02] border border-white/10 rounded-sm p-6 relative flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />

              <div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-white/10 border border-white/10 flex items-center justify-center text-xs font-serif font-bold text-white uppercase">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5 font-serif">
                      <span>{review.author}</span>
                      {review.verified && (
                        <ShieldCheck className="w-4 h-4 text-emerald-400" title="Cliente Verificado no Google" />
                      )}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{review.timeAgo} • Google</div>
                  </div>
                </div>

                <div className="flex text-amber-400 gap-1 my-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[9px] text-neutral-500 font-mono uppercase tracking-widest flex items-center justify-between">
                <span>AVALIAÇÃO VERIFICADA</span>
                <span className="text-emerald-400 font-semibold">★ 5.0 RECOMENDADO</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
