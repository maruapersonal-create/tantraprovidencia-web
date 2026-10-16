'use client';

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';

interface Masajista {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
}

const BASE_WHATSAPP_URL = 'https://wa.me/56944127664?text=';
const INSTAGRAM_URL = 'https://www.instagram.com/massage_fernanda';

// 1. MASAJE EXPRESS (30 MINUTOS)
const PLANES_EXPRESS = [
  {
    id: 'express-basico',
    title: 'Express Básico',
    priceNeto: 35000,
    time: '30 min',
    popular: false,
    tag: 'Rápido & Eficaz',
    contenido:
      'Masaje en una zona (espalda o piernas) + estimulación manual (masajista con ropa).',
  },
  {
    id: 'express-avanzado',
    title: 'Express Avanzado',
    priceNeto: 45000,
    time: '30 min',
    popular: true,
    tag: 'MÁS SOLICITADO 30 MIN',
    contenido:
      'Masaje en una zona (espalda o piernas) + estimulación oral c/c (masajista en lencería).',
  },
  {
    id: 'express-full',
    title: 'Express Full',
    priceNeto: 70000,
    time: '30 min',
    popular: false,
    tag: 'Exclusivo Express',
    contenido:
      'Masaje en una zona (espalda o piernas) + contacto.',
  },
];

// 2. MASAJE PREMIUM (60 MINUTOS)
const PLANES_PREMIUM = [
  {
    id: 'premium-basico',
    title: 'Premium Básico',
    priceNeto: 50000,
    time: '60 min',
    popular: false,
    tag: 'Relajación Completa',
    contenido:
      'Masaje cuerpo completo + estimulación manual (masajista con ropa).',
  },
  {
    id: 'premium-avanzado',
    title: 'Premium Avanzado',
    priceNeto: 65000,
    time: '60 min',
    popular: true,
    tag: 'RECOMENDADO ⭐',
    contenido:
      'Masaje cuerpo completo + estimulación oral c/c (masajista en lencería).',
  },
  {
    id: 'premium-full',
    title: 'Premium Full',
    priceNeto: 100000,
    time: '60 min',
    popular: false,
    tag: 'Exclusivo VIP',
    contenido:
      'Masaje cuerpo completo + contacto.',
  },
];

const MASAJISTAS: Masajista[] = [
  {
    id: 'fernanda',
    name: 'Fernanda',
    coverImage: '/IMAGES/OCTUBREFERNANDA11.jpeg',
    photos: ['/IMAGES/OCTUBREFERNANDA11.jpeg'],
  },
  {
    id: 'daniela',
    name: 'Daniela',
    coverImage: '/IMAGES/OCTUBREDANIELA11.jpeg',
    photos: ['/IMAGES/OCTUBREDANIELA11.jpeg'],
  },
  {
    id: 'mara',
    name: 'Mara',
    coverImage: '/IMAGES/MARA2.jpeg',
    photos: ['/IMAGES/MARA2.jpeg'],
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    coverImage: '/IMAGES/TATIANA3.jpeg',
    photos: ['/IMAGES/TATIANA3.jpeg'],
  },
  {
    id: 'nikki',
    name: 'Nikki',
    coverImage: '/IMAGES/NIKKI.jpeg',
    photos: ['/IMAGES/NIKKI.jpeg'],
  },
];

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C9.284 2 8.944 2.012 7.877 2.06 6.812 2.108 6.086 2.278 5.45 2.525A5.143 5.143 0 003.586 3.586C2.937 4.235 2.525 4.962 2.278 5.998C2.012 7.064 2 7.404 2 10.12V13.88C2 16.596 2.012 16.936 2.06 18.003C2.108 19.068 2.278 19.794 2.525 20.43C2.772 21.066 3.184 21.793 3.833 22.442C4.482 23.091 5.209 23.503 6.245 23.75C7.311 24.016 7.651 24.028 10.367 24.028H14.127C16.843 24.028 17.183 24.016 18.25 23.968C19.315 23.92 20.041 23.75 20.677 23.503A5.143 5.143 0 0022.541 22.442C23.19 21.793 23.602 21.066 23.849 20.03C24.115 18.964 24.127 18.624 24.127 15.908V12.148C24.127 9.432 24.115 9.092 24.067 8.025C24.019 6.96 23.849 6.234 23.602 5.598C23.355 4.962 22.943 4.235 22.294 3.586A5.143 5.143 0 0020.43 2.525C19.394 2.278 18.668 2.108 17.602 2.06C16.535 2.012 16.195 2 13.479 2H12zm0 1.983c2.67 0 2.987.01 4.042.058 1.002.046 1.546.213 1.908.354.48.186.822.408 1.182.768.36.36.582.702.768 1.182.141.362.308.906.354 1.908.048 1.055.058 1.372.058 4.042v3.382c0 2.67-.01 2.987-.058 4.042-.046 1.002-.213 1.546-.354 1.908a3.16 3.16 0 01-.768 1.182 3.16 3.16 0 01-1.182.768c-.362.141-.906.308-1.908.354-1.055.048-1.372.058-4.042.058h-3.382c-2.67 0-2.987-.01-4.042-.058-1.002-.046-1.546-.213-1.908-.354a3.16 3.16 0 01-1.182-.768 3.16 3.16 0 01-.768-1.182c-.141-.362-.308-.906-.354-1.908-.048-1.055-.058-1.372-.058-4.042V9.891c0-2.67.01-2.987.058-4.042.046-1.002.213-1.546.354-1.908a3.16 3.16 0 01.768-1.182 3.16 3.16 0 011.182-.768c.362-.141.906-.308 1.908-.354 1.055-.048 1.372-.058 4.042-.058H12zm0 3.392a5.96 5.96 0 100 11.92 5.96 5.96 0 000-11.92zm0 1.983a3.977 3.977 0 110 7.954 3.977 3.977 0 010-7.954zm6.406-3.845a1.392 1.392 0 100 2.784 1.392 1.392 0 000-2.784z"
      fill="currentColor"
    />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function TantraProvidencia() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    // Bloquear menú contextual, arrastre y copiado
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    const handleSelectStart = (e: Event) => e.preventDefault();

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey || e.metaKey) &&
        ['s', 'p', 'u', 'c', 'x', 'a', 'i', 'j', 'k', '+', '-', '0', '='].includes(key)
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12' || e.key === 'PrintScreen') {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleGesture = (e: Event) => e.preventDefault();
    
    let lastTouchEnd = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('gesturestart', handleGesture);
    document.addEventListener('gesturechange', handleGesture);
    document.addEventListener('gestureend', handleGesture);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('gesturestart', handleGesture);
      document.removeEventListener('gesturechange', handleGesture);
      document.removeEventListener('gestureend', handleGesture);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070708] text-[#E2E2E6] font-sans selection:bg-transparent selection:text-inherit overflow-x-hidden relative select-none touch-pan-x touch-pan-y">
      {/* Botón flotante de Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram"
        className="fixed bottom-6 left-6 z-50 group flex items-center gap-3 bg-zinc-900/90 border border-[#C5A059]/50 hover:border-[#D4AF37] px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-[0_0_12px_rgba(220,39,67,0.5)]">
          <InstagramIcon className="w-4 h-4" />
        </div>
        <span className="hidden sm:inline text-xs sm:text-sm font-medium tracking-wide text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
          @massage_fernanda
        </span>
      </a>

      {/* Botón flotante de WhatsApp */}
      <a
        href={`${BASE_WHATSAPP_URL}${encodeURIComponent('Hola, me gustaría recibir información para agendar un servicio.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-zinc-900/90 border border-[#C5A059]/50 hover:border-[#D4AF37] px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_12px_rgba(37,211,102,0.5)]">
          <WhatsAppIcon className="w-4 h-4" />
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
          Agendar Reserva
        </span>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/15 rounded-full blur-[150px] pointer-events-none z-10"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#8C232B]/20 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/IMAGES/TANTRA1.jpeg"
            alt="Massage Providencia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 filter brightness-90 contrast-110 pointer-events-none select-none scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/90 via-[#070708]/75 to-[#070708]"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C5A059]/60 bg-[#070708]/80 text-[#D4AF37] text-[11px] sm:text-xs font-light tracking-[0.25em] uppercase backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Providencia • Sector Tobalaba
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-serif font-light text-[#F3EFE0] tracking-tight leading-[1.1] drop-shadow-2xl">
              Massage <span className="font-normal italic bg-gradient-to-r from-[#D4AF37] via-[#F3EFE0] to-[#9E7D3B] bg-clip-text text-transparent">Providencia</span>
            </h1>
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed px-4 drop-shadow">
              Santuario de relajación, bienestar integral y discreción absoluta en el corazón de Providencia.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4">
            <a
              href={`${BASE_WHATSAPP_URL}${encodeURIComponent('Hola, me gustaría agendar una hora en Massage Providencia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[210px] bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold px-8 py-4 rounded-2xl shadow-[0_4px_35px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center text-xs sm:text-sm uppercase tracking-widest"
            >
              Consultar Horarios
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[210px] bg-zinc-900/90 hover:bg-zinc-800 border border-[#C5A059]/60 hover:border-[#D4AF37] text-[#F3EFE0] font-light px-8 py-4 rounded-2xl transition-all duration-300 text-center text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md shadow-lg flex items-center justify-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE TARIFAS */}
      <section id="servicios" className="py-20 px-4 relative z-20 scroll-mt-6">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* TÍTULO PRINCIPAL GENERAL */}
          <div className="text-center space-y-3">
            <span className="text-[#C5A059] text-xs font-semibold tracking-[0.35em] uppercase">
              Carta de Servicios
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#F3EFE0] tracking-tight">
              Planes & Experiencias
            </h2>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto pt-1"></div>
          </div>

          {/* MASAJE EXPRESS 30 MINUTOS */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent flex-1"></div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#D4AF37] tracking-wide uppercase">
                  Masaje Express 30 Minutos
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-1">Sesiones breves e intensas en zonas específicas</p>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PLANES_EXPRESS.map((plan) => {
                const whatsappMsg = `Hola, me interesa agendar el servicio ${plan.title} ($${plan.priceNeto.toLocaleString('es-CL')}).`;

                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 backdrop-blur-xl ${
                      plan.popular
                        ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950 border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.15)] scale-[1.02]'
                        : 'bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    {plan.tag && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap block ${
                            plan.popular
                              ? 'bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] text-black'
                              : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                          }`}
                        >
                          {plan.tag}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex justify-between items-center mb-6 pt-2">
                        <h4 className="text-2xl font-serif text-[#F3EFE0] tracking-wide">
                          {plan.title}
                        </h4>
                        <span className="text-xs font-mono text-zinc-200 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full whitespace-nowrap">
                          ⏱️ {plan.time}
                        </span>
                      </div>

                      {/* Texto de contenido con alto contraste y visibilidad garantizada */}
                      <p className="text-[#F3EFE0] text-xs sm:text-sm leading-relaxed mb-8 font-normal">
                        {plan.contenido}
                      </p>
                    </div>

                    <div className="space-y-5 pt-6 border-t border-zinc-800">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                          Valor
                        </span>
                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] font-bold">
                            ${plan.priceNeto.toLocaleString('es-CL')}
                          </span>
                          <span className="block text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                            CLP Neto
                          </span>
                        </div>
                      </div>

                      <a
                        href={`${BASE_WHATSAPP_URL}${encodeURIComponent(whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest font-semibold text-center ${
                          plan.popular
                            ? 'bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black shadow-lg hover:scale-[1.02] active:scale-95'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:scale-[1.02] active:scale-95'
                        }`}
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Agendar 30 Min</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MASAJE PREMIUM 60 MINUTOS */}
          <div className="space-y-8 pt-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent flex-1"></div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#D4AF37] tracking-wide uppercase">
                  Masaje Premium 60 Minutos
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-1">Experiencia completa cuerpo entero para una desconexión total</p>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PLANES_PREMIUM.map((plan) => {
                const whatsappMsg = `Hola, me interesa agendar el servicio ${plan.title} ($${plan.priceNeto.toLocaleString('es-CL')}).`;

                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 backdrop-blur-xl ${
                      plan.popular
                        ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950 border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)] scale-[1.02]'
                        : 'bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    {plan.tag && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap block ${
                            plan.popular
                              ? 'bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] text-black'
                              : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                          }`}
                        >
                          {plan.tag}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex justify-between items-center mb-6 pt-2">
                        <h4 className="text-2xl font-serif text-[#F3EFE0] tracking-wide">
                          {plan.title}
                        </h4>
                        <span className="text-xs font-mono text-zinc-200 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full whitespace-nowrap">
                          ⏱️ {plan.time}
                        </span>
                      </div>

                      {/* Texto de contenido con alto contraste y visibilidad garantizada */}
                      <p className="text-[#F3EFE0] text-xs sm:text-sm leading-relaxed mb-8 font-normal">
                        {plan.contenido}
                      </p>
                    </div>

                    <div className="space-y-5 pt-6 border-t border-zinc-800">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                          Valor
                        </span>
                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] font-bold">
                            ${plan.priceNeto.toLocaleString('es-CL')}
                          </span>
                          <span className="block text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                            CLP Neto
                          </span>
                        </div>
                      </div>

                      <a
                        href={`${BASE_WHATSAPP_URL}${encodeURIComponent(whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest font-semibold text-center ${
                          plan.popular
                            ? 'bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-95'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:scale-[1.02] active:scale-95'
                        }`}
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Agendar 60 Min</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. GALERÍA & MASAJISTAS */}
      <section id="masajistas" className="py-16 px-4 relative z-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Staff Exclusivo</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#F3EFE0]">Galería & Masajistas</h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MASAJISTAS.map((masajista) => (
              <div
                key={masajista.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-2xl flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-xl font-serif text-[#F3EFE0] tracking-wide">{masajista.name}</h3>
                  <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black px-2.5 py-1 rounded-full border border-[#C5A059]/30">
                    Disponible
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner pointer-events-none select-none">
                    <Image
                      src={masajista.coverImage}
                      alt={masajista.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover pointer-events-none select-none"
                    />
                  </div>
                </div>

                <a
                  href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me gustaría agendar una hora con ${masajista.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold py-3 px-3 rounded-xl shadow-md transition-all text-[11px] uppercase tracking-widest text-center flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Agendar</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INFORMACIÓN DE UBICACIÓN Y POLÍTICAS */}
      <section id="informacion" className="py-16 px-4 relative z-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center mb-8 space-y-2">
              <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Información Importante</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#F3EFE0]">Ubicación & Políticas de Reserva</h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-zinc-200 text-sm">
              <div className="space-y-4 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Ubicación</h4>
                    <p className="font-light text-zinc-200">Metro Tobalaba / Providencia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-zinc-800">
                  <span className="text-xl">🚗</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Estacionamiento</h4>
                    <p className="font-light text-zinc-200">$3.000 por hora</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💳</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Reserva de Hora</h4>
                    <p className="font-light text-zinc-200">Reservas únicamente con abono de <strong className="text-[#D4AF37] font-semibold">$10.000</strong>.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-zinc-800">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Puntualidad y Cancelación</h4>
                    <ul className="space-y-1 font-light text-zinc-200 text-xs sm:text-sm list-disc list-inside">
                      <li>Abono <strong className="text-red-400 font-normal">no reembolsable</strong> si no asistes.</li>
                      <li>No se permiten atrasos (el tiempo de atraso se descuenta de tu servicio).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`${BASE_WHATSAPP_URL}${encodeURIComponent('Hola, leí las políticas y me gustaría consultar disponibilidad para agendar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Entendido, Agendar Reserva</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNER INSTAGRAM */}
      <section className="py-12 px-4 relative z-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-none select-none">
            <Image
              src="/IMAGES/TANTRA2.jpeg"
              alt="Instalaciones Massage Providencia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center pointer-events-none select-none hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Síguenos en Redes</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F3EFE0]">Conoce más de nuestro trabajo en Instagram</h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Publicamos contenidos exclusivos, promociones e información detallada de nuestras instalaciones y masajistas disponibles.
            </p>
            <div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 text-xs uppercase tracking-widest"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Ver Perfil @massage_fernanda</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-900 text-center text-[11px] text-zinc-400 font-light space-y-4 relative z-20 bg-zinc-950">
        <div className="flex items-center justify-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#D4AF37] transition-colors bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800"
          >
            <InstagramIcon className="w-4 h-4" />
            <span className="font-medium text-xs">@massage_fernanda</span>
          </a>
        </div>
        <p>© {currentYear} Massage Providencia. Todos los derechos reservados.</p>
        <p className="text-zinc-500">Atención profesional bajo cita previa.</p>
      </footer>
    </div>
  );
}