import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/barberData';
import { Scissors, Clock, Check, MessageSquare, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 text-neutral-300" />
            Tabela de Serviços & Preços
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif uppercase tracking-widest text-white leading-tight">
            SERVIÇOS DE <span className="font-serif italic font-normal text-neutral-400">BARBEARIA</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Qualidade profissional com produtos de excelência e máxima atenção aos detalhes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'todos', label: 'Todos os Serviços' },
            { id: 'corte', label: 'Cortes' },
            { id: 'barba', label: 'Barba' },
            { id: 'combo', label: 'Combos Especiais' },
            { id: 'quimica', label: 'Nevou & Química' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-sm text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className={`relative bg-white/[0.02] border rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/30 group ${
                service.popular ? 'border-white/20 bg-white/[0.04]' : 'border-white/10'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-white text-neutral-950 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1 shadow-md font-mono">
                  <Sparkles className="w-3 h-3 text-neutral-950 fill-neutral-950" />
                  Mais Pedido
                </div>
              )}

              <div>
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="text-2xl font-bold text-white font-mono">
                      R$ {service.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mt-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Duração estim.: {service.durationMinutes} min</span>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                  {service.category === 'corte' && 'Corte / Fade'}
                  {service.category === 'barba' && 'Cuidados com Barba'}
                  {service.category === 'combo' && 'Pacote Economia'}
                  {service.category === 'quimica' && 'Nevou / Pigmentação'}
                </span>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="px-3.5 py-2 bg-white/10 hover:bg-emerald-500 text-neutral-200 hover:text-neutral-950 font-bold text-[11px] uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Agendar R$ {service.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Combo Callout */}
        <div className="mt-12 bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">Dúvidas sobre qual serviço escolher?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Converse diretamente conosco pelo WhatsApp e monte seu combo personalizado.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-sm text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-neutral-950" />
            Falar com Barbeiro no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
