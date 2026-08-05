import React from 'react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from '../data/barberData';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 border-t border-white/10 backdrop-blur-lg px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${BARBERSHOP_INFO.phoneClean}`}
          className="p-3 bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 rounded-sm flex items-center justify-center shrink-0 active:scale-95 transition-all"
          aria-label="Ligar para barbearia"
          title="Ligar para a Barbearia"
        >
          <Phone className="w-5 h-5 text-neutral-300" />
        </a>

        {/* Main WhatsApp Booking Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-[0.98] transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-neutral-950 shrink-0" />
          <span>Agendar no WhatsApp</span>
        </button>

      </div>
    </div>
  );
};
