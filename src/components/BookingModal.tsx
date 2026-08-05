import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, buildWhatsAppLink, BARBERSHOP_INFO } from '../data/barberData';
import { X, MessageSquare, Calendar, Clock, User, Check, Scissors, ChevronRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('Hoje');
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [clientName, setClientName] = useState<string>('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServices([initialServiceId]);
    } else if (selectedServices.length === 0) {
      setSelectedServices(['corte-navalha']);
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const totalPrice = selectedServices.reduce((acc, id) => {
    const s = SERVICES_LIST.find(item => item.id === id);
    return acc + (s ? s.price : 0);
  }, 0);

  const totalDuration = selectedServices.reduce((acc, id) => {
    const s = SERVICES_LIST.find(item => item.id === id);
    return acc + (s ? s.durationMinutes : 0);
  }, 0);

  const whatsappUrl = buildWhatsAppLink(selectedServices, selectedDate, selectedTime, clientName);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/20 rounded-sm overflow-hidden shadow-2xl my-auto text-[#F5F5F5]">
        
        {/* Modal Header */}
        <div className="bg-white/5 px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                AGENDAMENTO VIA WHATSAPP
              </h2>
              <p className="text-[10px] font-mono text-neutral-400">
                {BARBERSHOP_INFO.name} • {BARBERSHOP_INFO.shortAddress}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Step 1: Select Services */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-neutral-400" />
                1. Escolha o(s) Serviço(s):
              </label>
              <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                {selectedServices.length} selecionado(s)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES_LIST.map(service => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    type="button"
                    className={`p-3 rounded-sm border text-left flex items-start justify-between gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-emerald-400 text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/30 hover:text-neutral-200'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-serif font-bold text-xs text-white truncate uppercase tracking-wider">{service.name}</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        R$ {service.price} • {service.durationMinutes} min
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-emerald-500 border-emerald-400 text-neutral-950' : 'border-white/20'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Date & Time Slot */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              2. Preferência de Data & Horário:
            </label>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {['Hoje', 'Amanhã', 'Sexta', 'Sábado'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  type="button"
                  className={`py-2 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                    selectedDate === d
                      ? 'bg-white text-neutral-950 border-white'
                      : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-1">
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  type="button"
                  className={`py-1.5 rounded-sm border text-xs font-mono transition-all text-center cursor-pointer ${
                    selectedTime === t
                      ? 'bg-emerald-500 text-neutral-950 font-bold border-emerald-400'
                      : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Client Name (Optional) */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-neutral-400" />
              3. Seu Nome (Opcional):
            </label>
            <input
              type="text"
              placeholder="Ex: Gabriel Silva"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-white/40 text-white rounded-sm px-4 py-2.5 text-xs focus:outline-none transition-colors"
            />
          </div>

          {/* Summary Box */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm space-y-2">
            <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
              <span>ESTIMATIVA TOTAL</span>
              <span>DURAÇÃO ~{totalDuration} MIN</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-serif font-bold text-white uppercase tracking-wider">Valor Total Previsto:</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">R$ {totalPrice}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-white/5 p-5 border-t border-white/10 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClose()}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/60 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-neutral-950" />
            <span>Confirmar e Enviar no WhatsApp</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mensagem direta no WhatsApp oficial da Barbearia 2c do corte</span>
          </div>
        </div>

      </div>
    </div>
  );
};
