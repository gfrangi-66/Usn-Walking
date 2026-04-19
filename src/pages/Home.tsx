import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Mountain, Accessibility } from 'lucide-react';

export default function Home() {
  const disciplines = [
    {
      id: 'nordic-walking',
      name: 'Nordic Walking',
      icon: Mountain,
      color: 'from-[#3DA535] to-emerald-600',
      description: 'Camminata dinamica con bastoncini per un allenamento completo',
      image: 'https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'camminata-sportiva',
      name: 'Camminata Sportiva',
      icon: Heart,
      color: 'from-[#00838F] to-cyan-600',
      description: 'Camminata veloce a braccia libere, accessibile a tutti',
      image: 'https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'trekking-sportivo',
      name: 'Lunghi Cammini e Trekking',
      icon: Mountain,
      color: 'from-[#FFB300] to-orange-500',
      description: 'Cammini e escursioni con zaino e attrezzatura adeguata',
      image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'walking-adattato',
      name: 'Walking Adattato',
      icon: Accessibility,
      color: 'from-[#0D3B5E] to-blue-700',
      description: 'Camminata inclusiva per persone con diverse abilità',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B5E]/95 to-[#0D3B5E]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-6 leading-tight">
            Cammina · Cresci<br />Appartieni
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Il comitato walking dell'Unione Sportiva Acli per la promozione dello sport del cammino in tutte le sue forme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/trova-istruttore"
              className="px-8 py-4 bg-[#FFB300] hover:bg-[#FFA000] text-[#0D3B5E] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Trova il tuo Istruttore
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/discipline"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg border-2 border-white backdrop-blur-sm transition-all inline-flex items-center justify-center"
            >
              Scopri le Discipline
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic text-[#0D3B5E] mb-4">
              Le Nostre Discipline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quattro modi diversi di camminare, un'unica passione per il movimento e il benessere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disciplines.map((discipline) => {
              const Icon = discipline.icon;
              return (
                <Link
                  key={discipline.id}
                  to={`/discipline/${discipline.id}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
                >
                  <div className="aspect-[16/9] relative">
                    <img
                      src={discipline.image}
                      alt={discipline.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${discipline.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 transform transition-transform group-hover:translate-y-[-8px]">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${discipline.color} rounded-full flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-black italic text-[#0D3B5E]">
                          {discipline.name}
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        {discipline.description}
                      </p>
                      <div className="mt-4 flex items-center text-[#3DA535] font-semibold group-hover:translate-x-2 transition-transform">
                        Scopri di più
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#3DA535] to-[#00838F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black mb-2">5000+</h3>
              <p className="text-lg text-white/90">Praticanti Attivi</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black mb-2">200+</h3>
              <p className="text-lg text-white/90">Istruttori Certificati</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black mb-2">4</h3>
              <p className="text-lg text-white/90">Discipline Ufficiali</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black italic text-[#0D3B5E] mb-6">
              Pronto a Iniziare?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Trova un istruttore certificato nella tua zona e inizia il tuo percorso nel mondo del walking sportivo
            </p>
            <Link
              to="/trova-istruttore"
              className="inline-flex items-center px-8 py-4 bg-[#FFB300] hover:bg-[#FFA000] text-[#0D3B5E] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Trova il tuo Istruttore
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
