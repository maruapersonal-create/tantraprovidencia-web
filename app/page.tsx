'use client';

import React from 'react';

export default function TantraProvidencia() {
  const planes = [
    {
      id: 'relajante',
      title: 'Relajante o Mixto',
      price: '$45.000',
      time: '50 minutos',
      contenido: 'Relaja y libera la tensión acumulada en espalda, brazos y piernas, con técnicas que ayudan a disminuir el estrés y mejorar tu bienestar.'
    },
    {
      id: 'sens-basico',
      title: 'Sens Básico',
      price: '$50.000',
      time: '50 minutos',
      contenido: 'Comienza con un masaje profesional en la zona posterior (espalda, brazos y piernas) y finaliza con una experiencia sensorial manual. (masajista con uniforme)'
    },
    {
      id: 'sens-avanzado',
      title: 'Sens Avanzado',
      price: '$65.000',
      time: '50 minutos',
      contenido: 'Comienza con un masaje profesional en la zona posterior, incorpora técnicas de deslizamiento corporal para una experiencia de relajación profunda y finaliza con experiencia sensorial manual y oral c/c. (ambos desnudos)'
    }
  ];

  const baseWhatsappUrl = "https://wa.me/56944127664?text=";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-red-600 selection:text-white">
      {/* Botón flotante de WhatsApp */}
      <a
        href={`${baseWhatsappUrl}${encodeURIComponent("Hola, me gustaría recibir información para agendar un servicio.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-sm md:text-base"
      >
        <span>💬 WhatsApp Directo</span>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop"
            alt="Fondo Spa Luxury"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-red-950/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/50 bg-red-950/40 text-red-400 text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur">
            Providencia • Las Condes
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Massage <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">Providencia</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Masajes profesionales y experiencias exclusivas en una ubicación privada y discreta.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={`${baseWhatsappUrl}${encodeURIComponent("Hola, me gustaría agendar una reserva.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-950/80 transition-all hover:scale-105 text-center"
            >
              Agendar Reserva
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-gray-200 font-semibold px-8 py-4 rounded-xl transition text-center"
            >
              Ver Servicios y Tarifas
            </a>
          </div>
        </div>
      </section>

      {/* 2. PLANES Y VALORES (SERVICIOS) */}
      <section id="servicios" className="py-16 px-4 bg-zinc-950/80 border-y border-zinc-900 scroll-mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Servicios y Tarifas</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Atención personalizada de alta calidad diseñada para tu confort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {planes.map((plan, index) => (
              <div
                key={index}
                className="bg-black/90 border border-zinc-800 hover:border-red-600/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition">{plan.title}</h3>
                    <span className="text-xs bg-red-950/80 border border-red-800/50 text-red-300 px-2.5 py-1 rounded-full font-medium">
                      {plan.time}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {plan.contenido}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <div className="text-3xl font-black text-red-500">
                    {plan.price}
                  </div>

                  <a
                    href={`${baseWhatsappUrl}${encodeURIComponent(`Hola, me gustaría reservar el servicio: ${plan.title} (${plan.price}). ¿Tienen disponibilidad?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-red-600 text-gray-200 hover:text-white font-bold py-3 px-4 rounded-xl transition duration-200 border border-zinc-700 hover:border-red-500 text-sm"
                  >
                    <span>Reservar este Servicio</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESERVA TU HORA */}
<section className="py-14 px-4 bg-black">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
        Reserva tu hora
      </h2>

      <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
        Atención personalizada, privada y discreta.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-5">

      {/* RESERVA */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition">
        <div className="text-2xl mb-3">📅</div>

        <h3 className="text-lg font-bold text-white mb-3">
          Reserva
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          Para confirmar tu hora se solicita un abono previo de
          <span className="text-white font-bold"> $10.000</span>.
        </p>
      </div>

      {/* PUNTUALIDAD */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition">
        <div className="text-2xl mb-3">⏰</div>

        <h3 className="text-lg font-bold text-white mb-3">
          Puntualidad
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          Te recomendamos llegar a la hora acordada para disfrutar
          de tu sesión con tranquilidad.
        </p>
      </div>

      {/* UBICACIÓN */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition">
        <div className="text-2xl mb-3">📍</div>

        <h3 className="text-lg font-bold text-white mb-3">
          Ubicación
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          Providencia · Sector privado
        </p>

        <div className="mt-3 pt-3 border-t border-zinc-800">
          <p className="text-sm text-gray-300">
            🚗 <span className="font-semibold text-white">
              Estacionamiento disponible
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-1">
            $3.000 · Consultar disponibilidad previamente
          </p>
        </div>
      </div>

    </div>

    {/* BOTÓN WHATSAPP */}
    <div className="text-center mt-8">
      <a
        href={`${baseWhatsappUrl}${encodeURIComponent(
          "Hola, me gustaría reservar una hora. Quisiera consultar disponibilidad."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-red-950/50 transition-all hover:scale-105"
      >
        💬 Confirmar Reserva por WhatsApp
      </a>
    </div>

  </div>
</section>
      {/* 4. CONTENIDO EXCLUSIVO */}
<section className="py-14 px-4 bg-zinc-950 border-t border-zinc-900">
  <div className="max-w-3xl mx-auto">
    
    <div className="bg-black border border-zinc-800 rounded-3xl p-7 sm:p-10 text-center shadow-xl">

      <span className="inline-block mb-4 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
        Contenido exclusivo
      </span>

      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
        Fernanda
      </h3>

      <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed mb-7">
        Conoce el contenido exclusivo de Fernanda en su perfil oficial.
      </p>

      <a
        href="https://arsmate.com/Fershiiss"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-950/50 transition-all hover:scale-105"
      >
        Ver perfil de Fernanda →
      </a>

    </div>

  </div>
</section>
      {/* FOOTER */}
      <footer className="py-6 border-t border-zinc-900 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Tantra Providencia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}