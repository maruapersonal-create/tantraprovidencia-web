export default function TantraProvidencia() {
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
    description: 'Martes a Viernes 17:00 a 20:00',
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
    
      


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/56944127664?text=Hola%20preciosa,%20vi%20tu%20perfil%20en%20tantraprovidencia.cl%20y%20me%20gustaria%20recibir%20mas%20informacion"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:scale-110 transition duration-300 shadow-2xl rounded-full px-6 py-4 font-bold text-black"
      >
        WhatsApp
      </a>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury background"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/60 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.35),transparent_55%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-24">
          <div>
            <div className="inline-block px-5 py-2 rounded-full border border-red-500 bg-red-600/10 text-sm uppercase tracking-[0.25em] mb-6 backdrop-blur">
              Providencia • Las Condes
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              Massage fernanda 
              <span className="block text-red-500 drop-shadow-[0_0_25px_rgba(255,0,60,0.7)]">
                Providencia
              </span>
            </h1>

            <p className="text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Masajes profesionales con atención exclusiva y elegante.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              <a
                href="https://wa.me/56944127664?text=Hola%20preciosa,%20vi%20tu%20perfil%20en%20tantraprovidencia.cl%20y%20me%20gustaria%20recibir%20mas%20informacion"
                className="bg-red-600 hover:bg-red-500 px-8 py-5 rounded-2xl text-lg font-bold transition shadow-2xl shadow-red-900/40"
              >
                Reservar por WhatsApp
              </a>

              <a
                href="https://instagram.com/tantraprovidencia.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500 hover:bg-red-500/20 px-8 py-5 rounded-2xl text-lg font-semibold transition"
              >
                Instagram
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-xl">
              <div className="bg-white/5 border border-red-900/40 rounded-2xl p-5 backdrop-blur">
                <div className="text-3xl font-black text-red-500">Lunes a viernes</div>
                <div className="text-gray-400 mt-1">Atención</div>
              </div>

              <div className="bg-white/5 border border-red-900/40 rounded-2xl p-5 backdrop-blur">
                <div className="text-3xl font-black text-red-500">VIP</div>
                <div className="text-gray-400 mt-1">Experiencia</div>
              </div>

              <div className="bg-white/5 border border-red-900/40 rounded-2xl p-5 backdrop-blur">
                <div className="text-3xl font-black text-red-500">100%</div>
                <div className="text-gray-400 mt-1">Bienestar</div>
              </div>
            </div>
          </div>

        
        </div>
      </section>

    
 <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-5">
            Perfiles Destacados
          </h2>
          <p className="text-gray-400 text-xl">
            Atención elegante y experiencias exclusivas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-red-900/40"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <div className="text-4xl font-black mb-2">{profile.name}</div>
                <div className="text-red-400 mb-3">{profile.age}</div>
                <p className="text-gray-300 mb-6 text-lg">
                  {profile.description}
                </p>

                <a
                  href="https://wa.me/56944127664?text=Hola%20preciosa,%20vi%20tu%20perfil%20en%20tantraprovidencia.cl%20y%20me%20gustaria%20recibir%20mas%20informacion"
                  className="inline-block bg-red-600 hover:bg-red-500 transition px-6 py-4 rounded-2xl font-bold"
                >
                  Contactar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
     
      {/* Pricing */}
      <section className="bg-red-950/10 border-y border-red-900/30 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-5 text-white">Planes y Valores</h2>
          <p className="text-gray-400 text-xl mb-16">
            Atención profesional y experiencias exclusivas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Relajante o Mixto',
                price: '$40.000',
                time: '50 minutos',
                contenido: 'Relaja y libera la tensión acumulada en espalda, brazos y piernas, con técnicas que ayudan a disminuir el estrés y mejorar tu bienestar.'
              },
              {
                title: 'Sens Básico',
                price: '$50.000',
                time: '50 minutos',
                contenido: 'Comienza con un masaje profesional en la zona posterior (espalda, brazos y piernas) y finaliza con una experiencia sensorial manual. (masajista con uniforme)'
              },
              {
                title: 'Sens Avanzado',
                price: '$65.000',
                time: '50 minutos',
                contenido: 'Comienza con un masaje profesional en la zona posterior, incorpora técnicas de deslizamiento corporal para una experiencia de relajación profunda y finaliza con experiencia sensorial manual y oral c/c. (ambos desnudos)'
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-red-900/40 bg-black/60 p-10 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.contenido}</p>
                </div>
                <div className="border-t border-red-900/20 pt-4">
                  <div className="text-3xl font-black text-red-500 mb-1">{plan.price}</div>
                  <div className="text-gray-500 text-xs">{plan.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
