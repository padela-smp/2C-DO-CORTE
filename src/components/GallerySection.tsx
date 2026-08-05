import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/barberData';
import { GalleryItem } from '../types';
import { Camera, ZoomIn, X, MessageSquare, Star, CheckCircle2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="trabalhos" className="py-16 sm:py-24 bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-neutral-300" />
            Galeria de Resultados Realizados
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif uppercase tracking-widest text-white leading-tight">
            NOSSOS <span className="font-serif italic font-normal text-neutral-400">TRABALHOS</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Fotos reais dos clientes atendidos na Barbearia 2c do corte em Maricá-RJ.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'todos', label: 'Todos os Trabalhos' },
            { id: 'fade', label: 'Degradê / Fade' },
            { id: 'barba', label: 'Barba & Navalha' },
            { id: 'nevou', label: 'Nevou / Platinados' },
            { id: 'alinhamento', label: 'Alinhamento & Pezinho' }
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

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white/[0.02] rounded-sm overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-black relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Zoom Icon Overlay */}
                <div className="absolute top-3 right-3 p-2 bg-[#0A0A0A]/80 rounded-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 relative">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-neutral-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-sm bg-white/5 text-neutral-300 uppercase border border-white/10 tracking-widest">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="relative max-w-3xl w-full bg-[#0A0A0A] border border-white/20 rounded-sm overflow-hidden shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/80 hover:bg-white/10 rounded-sm border border-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[70vh]">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="max-h-[70vh] w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="md:col-span-4 p-6 flex flex-col justify-between bg-[#0A0A0A] space-y-4">
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest px-2 py-1 bg-white/5 rounded-sm border border-white/10">
                      BARBEARIA 2C DO CORTE
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wide">{selectedImage.title}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedImage.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Corte 100% autêntico</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        onOpenBooking();
                      }}
                      className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-neutral-950" />
                      Quero este corte (WhatsApp)
                    </button>

                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-full py-2 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                    >
                      Fechar Visualização
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
