import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RefreshCw, MessageSquare } from 'lucide-react';
import { buildWhatsAppLink } from '../data/barberData';

interface StyleRecommendation {
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  recommendedCategory: string;
  image: string;
}

export const StyleGuideQuiz: React.FC = () => {
  const [faceShape, setFaceShape] = useState<string>('');
  const [preference, setPreference] = useState<string>('');

  const RECOMMENDATIONS: Record<string, StyleRecommendation> = {
    'modern-fade': {
      title: 'Degradê Navalhado (Mid/Low Fade) + Alinhamento',
      subtitle: 'Moderno, marcante e limpo',
      description: 'Ideal para destacar os contornos do rosto. A transição navalhada garante um acabamento afiado e muito estiloso.',
      services: ['Corte com Navalha / Degradê'],
      recommendedCategory: 'Fade Navalhado',
      image: '/src/assets/images/fade_beard_cut_1785963316984.jpg'
    },
    'nevou-platinado': {
      title: 'Nevou Platinado + Fade Lateral',
      subtitle: 'O visual dos cria • Máximo estilo',
      description: 'Platinado impecável que chama atenção onde passa, acompanhado de lateral degradê de alta definição.',
      services: ['Nevou / Platinado', 'Corte com Navalha / Degradê'],
      recommendedCategory: 'Nevou & Degradê',
      image: '/src/assets/images/nevou_style_cut_1785963327416.jpg'
    },
    'combo-barba': {
      title: 'Combo Completo: Corte Degradê + Barba Modelada',
      subtitle: 'O pacote definitivo do homem moderno',
      description: 'Barba esculpida na toalha quente com acabamento navalhado combinada com corte degradê personalizado.',
      services: ['Combo Completo (Corte + Barba)'],
      recommendedCategory: 'Corte + Barba',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop'
    },
    'classico': {
      title: 'Corte Social Clássico & Pezinho Afiado',
      subtitle: 'Elegante, discreto e atemporal',
      description: 'Para quem busca sofisticação no dia a dia com acabamento cirúrgico no pezinho e costeletas.',
      services: ['Corte Clássico Tesoura & Máquina'],
      recommendedCategory: 'Social Elegante',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop'
    }
  };

  const getRecommendationKey = (): string => {
    if (preference === 'nevou') return 'nevou-platinado';
    if (preference === 'barba' || faceShape === 'quadrado') return 'combo-barba';
    if (preference === 'classico' || faceShape === 'oval') return 'classico';
    return 'modern-fade';
  };

  const currentResult = (faceShape || preference) ? RECOMMENDATIONS[getRecommendationKey()] : null;

  return (
    <section id="guia-estilo" className="py-16 sm:py-24 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            Guia Interativo de Visual
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif uppercase tracking-widest text-white leading-tight">
            QUAL SEU <span className="font-serif italic font-normal text-neutral-400">CORTE IDEAL?</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Selecione suas preferências e descubra a combinação perfeita para o seu estilo.
          </p>
        </div>

        {/* Quiz Steps */}
        <div className="mt-10 bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-8 space-y-8">
          
          {/* Question 1: Preference */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              1. Qual o seu principal objetivo para o visual hoje?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'fade', label: 'Degradê Navalhado' },
                { id: 'barba', label: 'Corte + Barba' },
                { id: 'nevou', label: 'Nevou / Platinar' },
                { id: 'classico', label: 'Corte Social' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setPreference(opt.label.toLowerCase().includes('nevou') ? 'nevou' : opt.id)}
                  className={`p-3.5 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                    preference === (opt.label.toLowerCase().includes('nevou') ? 'nevou' : opt.id)
                      ? 'bg-white text-neutral-950 border-white shadow-md'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Face Shape */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              2. Qual o formato do seu rosto ou preferência de barba?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: 'oval', label: 'Rosto Oval / Redondo' },
                { id: 'quadrado', label: 'Rosto Quadrado / Marcado' },
                { id: 'sem-barba', label: 'Rosto Fino / Sem Barba' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setFaceShape(opt.id)}
                  className={`p-3.5 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                    faceShape === opt.id
                      ? 'bg-white text-neutral-950 border-white shadow-md'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recommendation Output */}
          {currentResult && (
            <div className="pt-6 border-t border-white/10 animate-in fade-in duration-300">
              <div className="bg-black/60 border border-white/10 rounded-sm p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-5 rounded-sm overflow-hidden aspect-4/3 bg-black">
                  <img
                    src={currentResult.image}
                    alt={currentResult.title}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="md:col-span-7 space-y-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-emerald-400 font-semibold">
                    SUGESTÃO RECOMENDADA
                  </span>

                  <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wider">{currentResult.title}</h3>
                  <div className="text-xs font-semibold text-neutral-300 uppercase font-mono">{currentResult.subtitle}</div>
                  
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {currentResult.description}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-2">
                    <a
                      href={buildWhatsAppLink(currentResult.services)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-neutral-950" />
                      <span>Agendar este estilo no WhatsApp</span>
                    </a>

                    <button
                      onClick={() => { setFaceShape(''); setPreference(''); }}
                      className="px-3 py-3 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-sm text-xs flex items-center gap-1 cursor-pointer border border-white/10"
                      title="Refazer teste"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
