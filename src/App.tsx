import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { StyleGuideQuiz } from './components/StyleGuideQuiz';
import { BookingModal } from './components/BookingModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { BARBERSHOP_INFO, buildWhatsAppLink } from './data/barberData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white antialiased">
      
      {/* Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Quick Contact & Google Info Bar */}
        <QuickInfoBar />

        {/* Services & Pricing Menu */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Work / Haircuts Gallery */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 5.0 Google Reviews Showcase */}
        <ReviewsSection />

        {/* Interactive Style Quiz */}
        <StyleGuideQuiz />

        {/* Address & Google Maps Location */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all items-center gap-2 group cursor-pointer border border-emerald-400/40"
        title="Agendar via WhatsApp"
        aria-label="Agendar via WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-neutral-950" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-1">
          Agendar Horário
        </span>
      </a>

      {/* Sticky Mobile Bar for Smartphones */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* WhatsApp Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

    </div>
  );
}
