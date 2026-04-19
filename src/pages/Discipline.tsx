import { Link } from 'react-router-dom';
import { Mountain, Heart, Backpack, Accessibility, ArrowRight } from 'lucide-react';

export default function Discipline() {
  const disciplines = [
    {
      id: 'nordic-walking',
      name: 'Nordic Walking',
      tagline: 'Tecnica, Potenza, Natura',
      icon: Mountain,
      color: 'from-[#3DA535] to-emerald-600',
      description: 'Il Nordic Walking è una camminata dinamica con bastoncini che coinvolge oltre l\'85% dei muscoli del corpo. Nato nei paesi nordici come allenamento estivo per sciatori di fondo.',
      benefits: ['Allenamento completo', 'Riduce carico su ginocchia', 'Migliora postura', 'Brucia 40% calorie in più'],
      image: 'https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'camminata-sportiva',
      name: 'Camminata Sportiva',
      tagline: 'Veloce, Dinamico, Accessibile',
      icon: Heart,
      color: 'from-[#00838F] to-cyan-600',
      description: 'Una camminata veloce e dinamica a braccia libere, accessibile a tutti. Perfetto per chi vuole migliorare la forma fisica senza attrezzatura particolare.',
      benefits: ['Nessuna attrezzatura', 'Adatto a principianti', 'Migliora sistema cardiovascolare', 'Tonifica tutto il corpo'],
      image: 'https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'trekking-sportivo',
      name: 'Lunghi Cammini e Trekking',
      tagline: 'Avventura, Natura, Gruppo',
      icon: Backpack,
      color: 'from-[#FFB300] to-orange-500',
      description: 'Cammini e escursioni con zaino e attrezzatura adeguata. Unisce il piacere della montagna con l\'allenamento sportivo programmato.',
      benefits: ['Esplorazione territoriale', 'Allenamento completo', 'Socializzazione', 'Contatto con la natura'],
      image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'walking-adattato',
      name: 'Walking Adattato',
      tagline: 'Inclusione, Supporto, Dignità',
      icon: Accessibility,
      color: 'from-[#0D3B5E] to-blue-700',
      description: 'Camminata adattata e inclusiva per persone con diverse abilità. Con supporto di bastoni, accompagnatori e percorsi studiati per garantire sicurezza e benessere.',
      benefits: ['Totalmente inclusivo', 'Supporto personalizzato', 'Percorsi sicuri', 'Autonomia e dignità'],
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Le Nostre Discipline
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Quattro modi diversi di camminare per ogni esigenza, età e livello di preparazione
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={discipline.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={discipline.image}
                        alt={discipline.name}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${discipline.color} opacity-20`}></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${discipline.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-black italic text-[#0D3B5E]">
                          {discipline.name}
                        </h2>
                        <p className="text-[#3DA535] font-semibold text-lg">
                          {discipline.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {discipline.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Benefici Principali</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {discipline.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${discipline.color}`}></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/discipline/${discipline.id}`}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${discipline.color} text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                    >
                      Scopri di più
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black italic text-[#0D3B5E] mb-4">
            Non sai quale disciplina scegliere?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contatta un nostro istruttore certificato per una consulenza gratuita
          </p>
          <Link
            to="/trova-istruttore"
            className="inline-flex items-center px-8 py-4 bg-[#FFB300] hover:bg-[#FFA000] text-[#0D3B5E] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Trova un Istruttore
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
