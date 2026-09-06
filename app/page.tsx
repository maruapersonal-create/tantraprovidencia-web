'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Masajista {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
}

const PLANES = [
  {
    id: 'relajante',
    title: 'Relajante o Mixto',
    price: '$45.000',
    time: '50 min',
    popular: false,
    tag: 'Bienestar Integral',
    contenido: 'Desconexión total para liberar la tensión acumulada en espalda, brazos y piernas. Utiliza técnicas fluidas que disminuyen el estrés y restauran tu vitalidad.'
  },
  {
    id: 'sens-basico',
    title: 'Sens Básico',
    price: '$50.000',
    time: '50 min',
    popular: false,
    tag: 'Experiencia Recomendada',
    contenido: 'Comienza con un masaje profesional en la zona posterior (espalda, brazos y piernas) y finaliza con una experiencia sensorial manual. (masajista con uniforme)'
  },
  {
    id: 'sens-avanzado',
    title: 'Sens Avanzado',
    price: '$65.000',
    time: '50 min',
    popular: true,
    tag: 'MÁS SOLICITADO',
    contenido: 'Comienza con un masaje profesional en la zona posterior, incorpora técnicas de deslizamiento corporal para una experiencia de relajación profunda y finaliza con experiencia sensorial manual y oral c/c. (ambos desnudos)'
  },
  {
    id: 'masaje-exclusivo-vip',
    title: 'Masaje Exclusivo VIP',
    price: '$100.000',
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
    photos: ['/IMAGES/MFERNANDA.jpeg']
  },
  {
    id: 'daniela',
    name: 'Daniela',
    coverImage: '/IMAGES/MDANIELA.jpeg',
    photos: ['/IMAGES/MDANIELA.jpeg']
  },
  {
    id: 'mara',
    name: 'Mara',
    coverImage: '/IMAGES/MMARA.jpeg',
    photos: ['/IMAGES/MMARA.jpeg']
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    coverImage: '/IMAGES/MTATIANA.jpeg',
    photos: ['/IMAGES/MTATIANA.jpeg']
  },
  {
    id: 'josefa',
    name: 'Josefa',
    coverImage: '/IMAGES/MJOSEFA.jpeg',
    photos: ['/IMAGES/MJOSEFA.jpeg']
  }
];

const BASE_WHATSAPP_URL = "https://wa.me/56944127664?text=";
const SPA_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop";

export default function TantraProvidencia() {
  const currentYear = new Date().getFullYear();
  const [selectedMasajista, setSelectedMasajista] = useState<Masajista | null>(null);

  return (
    <div className="min-h-screen bg-[#070708] text-[#E2E2E6] font-sans selection:bg-[#C5A059]/30 selection:text-[#F3EFE0] overflow-x-hidden relative">
      
      {/* Botón flotante de WhatsApp */}
      <a
        href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría recibir información para agendar un servicio.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-zinc-900/90 border border-[#C5A059]/40 hover:border-[#D4AF37] px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black font-bold text-base shadow-[0_0_12px_rgba(37,211,102,0.5)]">
          💬
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
          Agendar por WhatsApp
        </span>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none z-10"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-[#8C232B]/20 rounded-full blur-[100px] pointer-events-none z-10"></div>

        <div className="absolute inset-0 z-0">
          <Image
            src={SPA_BACKGROUND_IMAGE}
            alt="Centro de Spa Tranquilo con Camilla y Velas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/90 via-[#070708]/65 to-[#070708]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#070708]/80 text-[#D4AF37] text-[11px] sm:text-xs font-light tracking-[0.25em] uppercase backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Providencia • Sector Exclusivo
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extralight text-[#F3EFE0] tracking-tight leading-[1.15] drop-shadow-md">
            Massage <span className="font-normal italic bg-gradient-to-r from-[#D4AF37] via-[#F3EFE0] to-[#9E7D3B] bg-clip-text text-transparent">Providencia</span>
          </h1>

          <p className="text-sm sm:text-lg text-zinc-200 max-w-xl mx-auto font-light leading-relaxed px-4 drop-shadow">
            Un santuario privado de relajación, discreción y revitalización sensorial diseñado minuciosamente para tu bienestar.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4">
            <a
              href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría agendar una reserva.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold px-8 py-4 rounded-xl shadow-[0_4px_25px_rgba(197,160,89,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center text-xs sm:text-sm uppercase tracking-widest"
            >
              Consultar Horarios
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto min-w-[200px] bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#C5A059]/60 text-zinc-200 font-light px-8 py-4 rounded-xl transition-all duration-300 text-center text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md shadow-lg"
            >
              Explorar Menú
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS Y TARIFAS */}
      <section id="servicios" className="py-14 px-4 relative z-20 scroll-mt-6">
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
                  
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                    {plan.contenido}
                  </p>
                </div>

                <div className="space-y-5 pt-6 border-t border-zinc-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-light">Inversión</span>
                    <span className="text-3xl font-serif text-[#D4AF37] tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <a
                    href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me gustaría reservar el servicio: ${plan.title} (${plan.price}). ¿Tienen disponibilidad?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest font-medium ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#C5A059] to-[#9E7D3B] hover:brightness-110 text-black shadow-md'
                        : 'bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/60'
                    }`}
                  >
                    <span>Reservar Servicio</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN MASAJISTAS (ORDEN DE LAS 5 CHICAS) */}
      <section id="masajistas" className="py-14 px-4 relative z-20 border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.3em] uppercase">Staff</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#F3EFE0]">Nuestras Masajistas</h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-3"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {MASAJISTAS.map((masajista) => (
              <div
                key={masajista.id}
                onClick={() => setSelectedMasajista(masajista)}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 hover:border-[#C5A059]/60 transition-all duration-500 cursor-pointer shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={masajista.coverImage}
                    alt={masajista.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-2xl font-serif text-[#F3EFE0] group-hover:text-[#D4AF37] transition-colors">
                      {masajista.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE FOTOS DE MASAJISTA */}
      {selectedMasajista && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-900 border border-[#C5A059]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header del Modal */}
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
              <h3 className="text-2xl font-serif text-[#F3EFE0]">{selectedMasajista.name}</h3>
              <button
                onClick={() => setSelectedMasajista(null)}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-lg transition-colors"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Galería de Fotos */}
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedMasajista.photos.map((photo, idx) => (
                  <div key={idx} className="relative h-64 rounded-xl overflow-hidden border border-zinc-800">
                    <Image
                      src={photo}
                      alt={`Foto ${idx + 1} de ${selectedMasajista.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 flex justify-end">
              <a
                href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me gustaría agendar una hora con ${selectedMasajista.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7D3B] hover:brightness-110 text-black font-semibold px-6 py-3 rounded-xl transition-all text-xs uppercase tracking-widest text-center"
              >
                Agendar con {selectedMasajista.name}
              </a>
            </div>

          </div>
        </div>
      )}

      {/* 3. PROTOCOLO DE AGENDA Y POLÍTICAS */}
      <section className="py-14 px-4 bg-gradient-to-b from-transparent via-zinc-950/90 to-transparent border-y border-zinc-900/80 relative z-20">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Bloque: Protocolo de Reserva */}
          <div>
            <div className="text-center mb-8 space-y-2">
              <span className="text-[#C5A059] text-[11px] font-medium tracking-[0.25em] uppercase">Condiciones del Servicio</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE0]">Protocolo de Agenda</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2.5 text-center backdrop-blur-md">
                <span className="text-2xl block">🗓️</span>
                <h3 className="text-sm font-serif text-[#F3EFE0]">Abono Confirmatorio</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Para asegurar la disponibilidad en agenda se solicita un abono previo de <span className="text-[#D4AF37] font-medium">$10.000</span>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2.5 text-center backdrop-blur-md">
                <span className="text-2xl block">⏳</span>
                <h3 className="text-sm font-serif text-[#F3EFE0]">Puntualidad</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Recomendamos asistir con puntualidad para disfrutar de la totalidad de su tiempo reservado.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2.5 text-center backdrop-blur-md">
                <span className="text-2xl block">📍</span>
                <h3 className="text-sm font-serif text-[#F3EFE0]">Ubicación & Parking</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Sector Providencia privado. Estacionamiento previo requerimiento (<span className="text-[#D4AF37]">$3.000</span>).
                </p>
              </div>
            </div>
          </div>

          {/* Bloque: Reprogramaciones e Inasistencias */}
          <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-zinc-900/80 via-zinc-900/95 to-zinc-900/80 border border-[#C5A059]/40 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-xl shrink-0">
                🔄
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-serif text-[#F3EFE0]">
                  Reprogramaciones e Inasistencias
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Las reservaciones pueden reprogramarse avisando con al menos <span className="text-[#D4AF37] font-medium">2 horas de anticipación</span>.
                </p>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Si el cliente no asiste sin previo aviso, el abono no es reembolsable.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque: Pilares de Excelencia */}
          <div className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: '🔒', title: 'Absoluta Discreción', desc: 'Atención 100% privada e individual' },
                { icon: '🕯️', title: 'Ambiente Climatizado', desc: 'Aromaterapia y climatización' },
                { icon: '🚿', title: 'Ducha Privada', desc: 'Instalaciones equipadas para confort' },
                { icon: '🚗', title: 'Estacionamiento', desc: 'Acceso reservado y seguro' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md text-center space-y-1.5 shadow-lg hover:border-zinc-700 transition-colors"
                >
                  <span className="text-xl sm:text-2xl block">{item.icon}</span>
                  <h4 className="text-xs sm:text-sm font-medium text-[#F3EFE0]">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-light leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN PERFIL EXCLUSIVO */}
      <section className="py-14 px-4 relative z-20">
        <div className="max-w-xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 text-center bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 border border-[#C5A059]/40 shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-block mb-4 px-3.5 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#D4AF37] text-[10px] font-medium uppercase tracking-[0.2em]">
              Contenido Oficial
            </span>

            <h3 className="text-3xl font-serif text-[#F3EFE0] mb-3">
              Fernanda
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8 max-w-sm mx-auto">
              Accede al perfil profesional y contenido exclusivo oficial.
            </p>

            <a
              href="https://arsmate.com/Fershiiss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-zinc-800/90 hover:bg-zinc-700/80 text-[#D4AF37] border border-[#C5A059]/40 hover:border-[#D4AF37] font-medium px-8 py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest"
            >
              Ver perfil en Arsmate →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-zinc-900 text-center text-[11px] text-zinc-400 font-light space-y-1 relative z-20">
        <p>© {currentYear} Tantra Providencia. Todos los derechos reservados.</p>
        <p className="text-zinc-500">Atención profesional bajo cita previa.</p>
      </footer>
    </div>
  );
}