'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface Masajista {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
  video: string;
}

const PLANES = [
  {
    id: 'relajante',
    title: 'Relajante o Mixto',
    priceNeto: 45000,
    time: '50 min',
    popular: false,
    tag: 'Bienestar Integral',
    contenido: 'Desconexión total para liberar la tensión acumulada en espalda, brazos y piernas. Utiliza técnicas fluidas que disminuyen el estrés y restauran tu vitalidad.'
  },
  {
    id: 'sens-basico',
    title: 'Sens Básico',
    priceNeto: 50000,
    time: '50 min',
    popular: false,
    tag: 'Experiencia Recomendada',
    contenido: 'Comienza con un masaje profesional en la zona posterior (espalda, brazos y piernas) y finaliza con una experiencia sensorial manual. (masajista con uniforme)'
  },
  {
    id: 'sens-avanzado',
    title: 'Sens Avanzado',
    priceNeto: 65000,
    time: '50 min',
    popular: true,
    tag: 'MÁS SOLICITADO',
    contenido: 'Comienza con un masaje profesional en la zona posterior, incorpora técnicas de deslizamiento corporal para una experiencia de relajación profunda y finaliza con experiencia sensorial manual y oral c/c. (ambos desnudos)'
  },
  {
    id: 'masaje-full',
    title: 'Masaje Full',
    priceNeto: 100000,
    time: '50 min',
    popular: false,
    tag: 'Exclusivo',
    contenido: '(Información de este servicio solo de manera presencial)'
  }
];

const MASAJISTAS: Masajista[] = [
  {
    id: 'fernanda',
    name: 'Fernanda',
    coverImage: '/IMAGES/MFERNANDA.jpeg',
    photos: ['/IMAGES/MFERNANDA.jpeg'],
    video: '/VIDEOS/FERNANDA.mp4'
  },
  {
    id: 'daniela',
    name: 'Daniela',
    coverImage: '/IMAGES/MDANIELA.jpeg',
    photos: ['/IMAGES/MDANIELA.jpeg'],
    video: '/VIDEOS/DANIELA.mp4'
  },
  {
    id: 'mara',
    name: 'Mara',
    coverImage: '/IMAGES/MMARA.jpeg',
    photos: ['/IMAGES/MMARA.jpeg'],
    video: '/VIDEOS/MARA.mp4'
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    coverImage: '/IMAGES/MTATIANA.jpeg',
    photos: ['/IMAGES/MTATIANA.jpeg'],
    video: '/VIDEOS/TATIANA.mp4'
  }
];

const BASE_WHATSAPP_URL = "https://wa.me/56944127664?text=";
const INSTAGRAM_URL = "https://www.instagram.com/massage_fernanda";

export default function TantraProvidencia() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // 1. Bloqueo de Clic Derecho en toda la página
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Bloqueo de Arrastre de contenido
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 3. Bloqueo de Zoom táctil y por rueda
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) e.preventDefault();
    };

    const handleGestureStart = (e: Event) => {
      e.preventDefault();
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
    };

    // 4. Bloqueo de Atajos de Teclado (Guardar, Imprimir, Capturas, Zoom, Inspeccionar)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['s', 'p', 'u', 'c', '+', '-', '0'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
      if (e.key === 'PrintScreen') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('touchstart', handleTouchMove, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('gesturestart', handleGestureStart, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070708] text-[#E2E2E6] font-sans selection:bg-transparent selection:text-inherit overflow-x-hidden relative select-none touch-manipulation">
      
      {/* Botón flotante de Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram"
        className="fixed bottom-6 left-6 z-50 group flex items-center gap-3 bg-zinc-900/90 border border-[#C5A059]/50 hover:border-[#D4AF37] px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_12px_rgba(220,39,67,0.5)]">
          📸
        </div>
        <span className="hidden sm:inline text-xs sm:text-sm font-medium tracking-wide text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
          @massage_fernanda
        </span>
      </a>

      {/* Botón flotante de WhatsApp */}
      <a
        href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría recibir información para agendar un servicio.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-zinc-900/90 border border-[#C5A059]/50 hover:border-[#D4AF37] px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black font-bold text-base shadow-[0_0_12px_rgba(37,211,102,0.5)]">
          💬
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
          Agendar Reserva
        </span>
      </a>

      {/* 1. HERO SECTION DINÁMICO */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/15 rounded-full blur-[150px] pointer-events-none z-10"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#8C232B]/20 rounded-full blur-[120px] pointer-events-none z-10"></div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/IMAGES/TANTRA1.jpeg"
            alt="Massage Providencia - Ambiente Exclusivo"
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
              href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría agendar una hora en Massage Providencia.")}`}
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
              <span>📸 Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-8 border-t border-zinc-800/80">
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
              <span className="block text-xl mb-1">🌿</span>
              <span className="block text-xs uppercase tracking-wider text-[#D4AF37] font-medium">Ambiente</span>
              <span className="text-[11px] text-zinc-400 font-light">Privado & Climatizado</span>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
              <span className="block text-xl mb-1">📍</span>
              <span className="block text-xs uppercase tracking-wider text-[#D4AF37] font-medium">Ubicación</span>
              <span className="text-[11px] text-zinc-400 font-light">Metro Tobalaba</span>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 text-center backdrop-blur-sm">
              <span className="block text-xl mb-1">⭐</span>
              <span className="block text-xs uppercase tracking-wider text-[#D4AF37] font-medium">Atención</span>
              <span className="text-[11px] text-zinc-400 font-light">Bajo Cita Previa</span>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER INSTAGRAM CON TANTRA2 */}
      <section className="py-12 px-4 relative z-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <Image
              src="/IMAGES/TANTRA2.jpeg"
              alt="Instalaciones Massage Providencia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center pointer-events-none select-none hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs border border-[#C5A059]/30">
                Tantra Providencia
              </span>
            </div>
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
                <span>Ver Perfil @massage_fernanda</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS Y TARIFAS */}
      <section id="servicios" className="py-16 px-4 relative z-20 scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Carta de Servicios</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#F3EFE0]">Experiencias & Tarifas</h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANES.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 group backdrop-blur-xl ${
                  plan.popular
                    ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950 border border-[#C5A059]/80 shadow-[0_10px_40px_rgba(197,160,89,0.2)]'
                    : 'bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] text-black font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {plan.tag}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4 gap-2 pt-2">
                    <h3 className="text-xl font-serif text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.time}
                    </span>
                  </div>
                  
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {plan.contenido}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-zinc-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Valor</span>
                    <span className="text-2xl font-serif text-[#D4AF37] font-bold">
                      ${plan.priceNeto.toLocaleString('es-CL')}
                    </span>
                  </div>

                  <a
                    href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me interesa agendar el servicio ${plan.title} ($${plan.priceNeto.toLocaleString('es-CL')}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest font-medium text-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#C5A059] to-[#9E7D3B] hover:brightness-110 text-black shadow-md'
                        : 'bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/60'
                    }`}
                  >
                    <span>Agendar por WhatsApp</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GALERÍA VISIBLE COMPLETAMENTE CON PROTECCIÓN MÁXIMA */}
      <section id="masajistas" className="py-16 px-4 relative z-20 border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Staff Exclusivo</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#F3EFE0]">Galería & Masajistas</h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {MASAJISTAS.map((masajista) => (
              <div
                key={masajista.id}
                className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <h3 className="text-2xl font-serif text-[#F3EFE0] tracking-wide">{masajista.name}</h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black/50 px-3 py-1 rounded-full border border-[#C5A059]/30">
                    Disponible
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Fotografía Protegida */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium block text-center">Fotografía</span>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                      <Image
                        src={masajista.coverImage}
                        alt={masajista.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain pointer-events-none select-none"
                      />
                      <div className="absolute bottom-2 right-2 pointer-events-none select-none text-[9px] tracking-widest font-mono text-[#F3EFE0]/40 bg-black/50 px-2 py-0.5 rounded uppercase">
                        Tantra Providencia
                      </div>
                    </div>
                  </div>

                  {/* Video de Presentación Protegido */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium block text-center">Video Presentación</span>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                      <video
                        src={masajista.video}
                        controls
                        controlsList="nodownload"
                        disablePictureInPicture
                        playsInline
                        className="w-full h-full object-cover pointer-events-auto"
                      />
                    </div>
                  </div>
                </div>

                <a
                  href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me gustaría agendar una hora con ${masajista.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
                >
                  <span>Agendar con {masajista.name}</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INFORMACIÓN DE UBICACIÓN Y POLÍTICAS DE RESERVA */}
      <section id="informacion" className="py-16 px-4 relative z-20 border-t border-zinc-900/80">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center mb-8 space-y-2">
              <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Información Importante</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#F3EFE0]">Ubicación & Políticas de Reserva</h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-zinc-300 text-sm">
              <div className="space-y-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Ubicación</h4>
                    <p className="font-light text-zinc-300">Metro Tobalaba / Providencia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-zinc-800">
                  <span className="text-xl">🚗</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Estacionamiento</h4>
                    <p className="font-light text-zinc-300">$3.000 por hora</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💳</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Reserva de Hora</h4>
                    <p className="font-light text-zinc-300">Reservas únicamente con abono de <strong className="text-[#D4AF37] font-semibold">$10.000</strong>.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-zinc-800">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-[#F3EFE0] uppercase tracking-wider text-xs mb-1">Puntualidad y Cancelación</h4>
                    <ul className="space-y-1 font-light text-zinc-300 text-xs sm:text-sm list-disc list-inside">
                      <li>Abono <strong className="text-red-400 font-normal">no reembolsable</strong> si no asistes.</li>
                      <li>No se permiten atrasos (el tiempo de atraso se descuenta de tu servicio).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, leí las políticas y me gustaría consultar disponibilidad para agendar.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
              >
                <span>Entendido, Agendar Reserva</span>
                <span>→</span>
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
            <span className="text-sm">📸</span>
            <span className="font-medium text-xs">@massage_fernanda</span>
          </a>
        </div>
        <p>© {currentYear} Massage Providencia. Todos los derechos reservados.</p>
        <p className="text-zinc-500">Atención profesional bajo cita previa.</p>
      </footer>
    </div>
  );
}