'use client';

import React from 'react';
import Image from 'next/image';

const PLANES = [
  {
    id: 'relajante',
    title: 'Relajante o Mixto',
    price: '$45.000',
    time: '50 min',
    popular: false,
    contenido: 'Relaja y libera la tensión acumulada en espalda, brazos y piernas con técnicas profesionales orientadas a renovar tu vitalidad y reducir el estrés.'
  },
  {
    id: 'sens-basico',
    title: 'Sens Básico',
    price: '$50.000',
    time: '50 min',
    popular: true,
    contenido: 'Inicia con un masaje terapéutico profesional en zona posterior (espalda, brazos y piernas) y culmina con una refinada experiencia sensorial manual. (Atención en uniforme elegante).'
  },
  {
    id: 'sens-avanzado',
    title: 'Sens Avanzado',
    price: '$65.000',
    time: '50 min',
    popular: false,
    contenido: 'Masaje posterior integrativo con técnicas de deslizamiento corporal para una relajación absoluta, finalizando con una experiencia sensorial manual y oral c/c. (Ambos al descubierto).'
  }
];

const BASE_WHATSAPP_URL = "https://wa.me/56944127664?text=";

export default function TantraProvidencia() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E5E5E7] font-sans selection:bg-[#C5A059] selection:text-black overflow-x-hidden">
      
      {/* Botón flotante WhatsApp - Optimizado Móvil */}
      <a
        href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría recibir información para agendar un servicio.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs sm:text-sm tracking-wide"
      >
        <span className="text-base sm:text-lg">💬</span>
        <span className="font-semibold">WhatsApp Directo</span>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 py-16 sm:py-24 border-b border-[#2A2620]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
            alt="Ambiente Spa De Lujo"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/90 via-[#0A0A0B]/60 to-[#0A0A0B]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5 sm:space-y-7">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#D4AF37] text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md">
            <span>✨</span> Providencia · Experiencia Exclusiva
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#F3EFE0] tracking-tight leading-tight">
            Massage <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3EFE0] to-[#C5A059]">Providencia</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed px-2">
            El arte del bienestar, la relajación profunda y la privacidad absoluta en un entorno diseñado para tus sentidos.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <a
              href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría agendar una reserva.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#C5A059] to-[#9E7D3B] hover:from-[#D4AF37] hover:to-[#B38F48] text-black font-semibold px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(197,160,89,0.25)] transition-all hover:scale-[1.02] active:scale-95 text-center text-sm sm:text-base"
            >
              Agendar Cita Privada
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-medium px-8 py-3.5 sm:py-4 rounded-xl transition-all text-center text-sm sm:text-base backdrop-blur-sm"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* 2. POR QUÉ ELEGIRNOS (VALOR AGREGADO) */}
      <section className="py-10 px-4 bg-[#0D0D0E] border-b border-zinc-800/60 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40">
            <span className="text-xl sm:text-2xl block mb-1">🔒</span>
            <h4 className="text-xs sm:text-sm font-semibold text-[#D4AF37]">100% Discreto</h4>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Atención privada individual</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40">
            <span className="text-xl sm:text-2xl block mb-1">🌿</span>
            <h4 className="text-xs sm:text-sm font-semibold text-[#D4AF37]">Espacio Climatizado</h4>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Ambiente cálido y aromas</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40">
            <span className="text-xl sm:text-2xl block mb-1">🚿</span>
            <h4 className="text-xs sm:text-sm font-semibold text-[#D4AF37]">Ducha Disponible</h4>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Máximo confort e higiene</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40">
            <span className="text-xl sm:text-2xl block mb-1">🚗</span>
            <h4 className="text-xs sm:text-sm font-semibold text-[#D4AF37]">Estacionamiento</h4>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Acceso seguro y fácil</p>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS Y TARIFAS */}
      <section id="servicios" className="py-16 sm:py-20 px-4 bg-[#0A0A0B] scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14 space-y-2">
            <span className="text-[#C5A059] text-xs font-semibold tracking-widest uppercase">Experiencias Exclusivas</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F3EFE0]">Servicios y Tarifas</h2>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 opacity-60"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {PLANES.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-b from-zinc-900/90 to-zinc-950 border ${
                  plan.popular ? 'border-[#C5A059] shadow-[0_0_25px_rgba(197,160,89,0.15)]' : 'border-zinc-800/80 hover:border-zinc-700'
                } rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black font-semibold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Más Solicitado
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-serif text-[#F3EFE0] group-hover:text-[#D4AF37] transition">
                      {plan.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 px-2.5 py-1 rounded-full font-mono whitespace-nowrap">
                      ⏱ {plan.time}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {plan.contenido}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Valor Sesión</span>
                    <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37]">
                      {plan.price}
                    </span>
                  </div>

                  <a
                    href={`${BASE_WHATSAPP_URL}${encodeURIComponent(`Hola, me gustaría reservar el servicio: ${plan.title} (${plan.price}). ¿Tienen disponibilidad?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 ${
                      plan.popular 
                        ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold' 
                        : 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-medium'
                    } py-3 px-4 rounded-xl transition duration-200 text-xs sm:text-sm tracking-wide`}
                  >
                    <span>Reservar Servicio</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESERVA TU HORA */}
      <section className="py-14 sm:py-16 px-4 bg-[#0D0D0E] border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE0]">Información de Reserva</h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto font-light">
              Proceso sencillo y transparente para garantizar tu horario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* RESERVA */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-lg">
                📅
              </div>
              <h3 className="text-base font-serif text-[#F3EFE0] mb-2">Abono de Reserva</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Para agendar y asegurar tu hora requerimos un abono de <span className="text-[#D4AF37] font-semibold">$10.000</span>.
              </p>
            </div>

            {/* PUNTUALIDAD */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-lg">
                ⏰
              </div>
              <h3 className="text-base font-serif text-[#F3EFE0] mb-2">Puntualidad</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Agradecemos llegar a la hora exacta convenida para disfrutar íntegramente de tu sesión.
              </p>
            </div>

            {/* UBICACIÓN */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-lg">
                📍
              </div>
              <h3 className="text-base font-serif text-[#F3EFE0] mb-2">Ubicación Privada</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Providencia · Sector exclusivo.
              </p>
              <div className="mt-3 pt-3 border-t border-zinc-800/60 text-xs text-zinc-400">
                <span>🚗 Estacionamiento opcional: </span>
                <span className="text-[#D4AF37]">$3.000</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`${BASE_WHATSAPP_URL}${encodeURIComponent("Hola, me gustaría reservar una hora. Quisiera consultar disponibilidad.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C5A059] to-[#9E7D3B] hover:from-[#D4AF37] hover:to-[#B38F48] text-black font-semibold px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(197,160,89,0.2)] transition-all hover:scale-105 text-xs sm:text-sm tracking-wide"
            >
              <span>💬 Consultar Disponibilidad por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. PERFIL EXCLUSIVO */}
      <section className="py-14 sm:py-16 px-4 bg-[#0A0A0B] border-t border-zinc-800/60">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-[#C5A059]/30 rounded-3xl p-7 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none"></div>

            <span className="inline-block mb-3 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#D4AF37] text-[10px] sm:text-xs font-medium uppercase tracking-widest">
              Perfil Exclusivo
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#F3EFE0] mb-2">
              Fernanda
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto font-light leading-relaxed mb-6">
              Descubre contenido exclusivo y perfiles oficiales.
            </p>

            <a
              href="https://arsmate.com/Fershiiss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-[#D4AF37] border border-[#C5A059]/40 font-medium px-8 py-3.5 rounded-xl transition-all text-xs sm:text-sm tracking-wide"
            >
              Ver perfil oficial →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-zinc-800/60 text-center text-[11px] sm:text-xs text-zinc-500 font-light">
        <p>© {currentYear} Tantra Providencia · Todos los derechos reservados.</p>
        <p className="mt-1 text-zinc-600">Atención privada bajo previa reserva.</p>
      </footer>
    </div>
  );
}