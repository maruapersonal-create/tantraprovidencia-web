import React, { useState } from 'react';

export default function TantraProvidencia() {
  // Estado para la reserva rápida interactiva
  const [selectedProfile, setSelectedProfile] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const profiles = [
    {
      name: 'DANIELA',
      age: '36 años',
      image: '/IMAGES/DANIELA.1.jpeg',
      description: 'Lunes a Viernes · 11:00 a 18:00',
    },
    {
      name: 'Fernanda',
      age: '28 años',
      image: '/IMAGES/FERNANDA.1.jpeg',
      description: 'Martes a Viernes · 17:00 a 20:00',
    },
    {
      name: 'Tatiana',
      age: '32 años',
      image: '/IMAGES/TATIANA.1.jpeg',
      description: 'Martes a Viernes · 17:00 a 20:00',
    },
    {
      name: 'Sofía',
      age: '32 años',
      image: '/IMAGES/SOFIA.1.jpeg',
      description: 'Sábados · 12:00 a 17:00',
    },
  ];

  const planes = [
    {
      id: 'relajante',
      title: 'Relajante o Mixto',
      price: '$40.000',
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

  // Generador dinámico de enlace de reserva
  const generateBookingLink = () => {
    let msg = "¡Hola! Quisiera realizar una reserva:";
    if (selectedProfile) msg += `\n• Masajista: ${selectedProfile}`;
    if (selectedPlan) msg += `\n• Servicio: ${selectedPlan}`;
    if (bookingDate) msg += `\n• Fecha: ${bookingDate}`;
    if (bookingTime) msg += `\n• Hora preferida: ${bookingTime}`;
    
    return `${baseWhatsappUrl}${encodeURIComponent(msg)}`;
  };

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
              href="#reservar"
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-950/80 transition-all hover:scale-105"
            >
              Agendar Reserva
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-gray-200 font-semibold px-8 py-4 rounded-xl transition"
            >
              Ver Servicios y Tarifas
            </a>
          </div>
        </div>
      </section>

      {/* 2. FORMULARIO INTERACTIVO DE RESERVA */}
      <section id="reservar" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-10">
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-red-900/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600"></div>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Reserva tu Experiencia</h2>
            <p className="text-sm text-gray-400">Selecciona tus preferencias y confirma disponibilidad al instante por WhatsApp.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {/* Selección de Masajista */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                1. Selecciona Masajista
              </label>
              <select
                value={selectedProfile}
                onChange={(e) => setSelectedProfile(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 text-sm"
              >
                <option value="">Cualquier masajista disponible</option>
                {profiles.map((p, idx) => (
                  <option key={idx} value={p.name}>{p.name} ({p.age})</option>
                ))}
              </select>
            </div>

            {/* Selección de Plan */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                2. Selecciona Servicio
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 text-sm"
              >
                <option value="">Selecciona un plan...</option>
                {planes.map((p, idx) => (
                  <option key={idx} value={`${p.title} (${p.price})`}>{p.title} - {p.price}</option>
                ))}
              </select>
            </div>

            {/* Día */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                3. Fecha deseada
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 text-sm"
              />
            </div>

            {/* Hora */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                4. Horario aproximado
              </label>
              <input
                type="time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 text-sm"
              />
            </div>
          </div>

          <a
            href={generateBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-950 text-base"
          >
            Enviar Solicitud de Reserva por WhatsApp
          </a>
        </div>
      </section>

      {/* 3. PLANES Y VALORES (SERVICIOS) */}
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

                  {/* BOTÓN SOLICITADO EN LA DESCRIPCIÓN DE CADA SERVICIO */}
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

      {/* 4. REQUISITOS Y CONDICIONES DE RESERVA */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="border border-red-900/30 bg-red-950/10 rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <h3 className="text-xl font-bold text-red-400">Condiciones para la Reserva</h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Para confirmar tu hora solicitamos un abono previo de <span className="text-white font-bold">$10.000</span>.
            Agradecemos puntualidad en tu cita para brindar la mejor atención.
          </p>
          <div className="pt-2 text-xs text-gray-400 flex flex-wrap justify-center gap-4">
            <span>📍 Cerca de Metro Tobalaba / Providencia</span>
            <span>🔒 Sector Privado y Discreto</span>
          </div>
        </div>
      </section>

      {/* 5. PERFILES DESTACADOS */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">Masajistas Disponibles</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Consulta los horarios y disponibilidad de nuestras profesionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-red-600/50 transition duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                  <span className="text-xs text-red-400 font-semibold">{profile.age}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {profile.description}
                </p>
                <a
                  href={`${baseWhatsappUrl}${encodeURIComponent(`Hola, quisiera consultar por la disponibilidad de ${profile.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-zinc-900 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition text-xs border border-zinc-800"
                >
                  Consultar por {profile.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTENIDO EXCLUSIVO ARSMATE */}
      <section className="py-12 px-4 text-center bg-zinc-950 border-t border-zinc-900">
        <h3 className="text-xl font-bold mb-2">Contenido Exclusivo de Fernanda</h3>
        <p className="text-xs text-gray-400 mb-6">Accede al perfil oficial haciendo clic en la imagen.</p>
        <a
          href="https://arsmate.com/Fershiiss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:scale-105 transition duration-300"
        >
          <img
            src="/IMAGES/LOGO2.PNG"
            alt="Arsmate"
            className="w-44 mx-auto"
          />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t border-zinc-900 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Tantra Providencia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}