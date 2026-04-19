import { Heart, Target, Users, Award, Shield, Compass } from 'lucide-react';

export default function ChiSiamo() {
  const values = [
    {
      icon: Heart,
      title: 'Passione',
      description: 'Amiamo lo sport del cammino e crediamo nei suoi benefici per tutti',
    },
    {
      icon: Target,
      title: 'Professionalità',
      description: 'Formazione continua e standard elevati per i nostri istruttori',
    },
    {
      icon: Users,
      title: 'Inclusione',
      description: 'Il walking è per tutti, senza barriere di età o capacità',
    },
    {
      icon: Award,
      title: 'Eccellenza',
      description: 'Certificazioni riconosciute e qualità nell\'insegnamento',
    },
    {
      icon: Shield,
      title: 'Sicurezza',
      description: 'La sicurezza dei praticanti è la nostra priorità assoluta',
    },
    {
      icon: Compass,
      title: 'Innovazione',
      description: 'Aggiorniamo costantemente metodi e tecniche di allenamento',
    },
  ];

  const team = [
    {
      name: 'Giovanni Rossi',
      role: 'Presidente',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Maestro di Nordic Walking con 15 anni di esperienza nel settore',
    },
    {
      name: 'Maria Bianchi',
      role: 'Direttore Tecnico',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Responsabile della formazione istruttori e dello sviluppo tecnico',
    },
    {
      name: 'Paolo Verdi',
      role: 'Coordinatore Regioni Nord',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Coordina le attività degli istruttori nelle regioni del Nord Italia',
    },
    {
      name: 'Laura Neri',
      role: 'Coordinatore Regioni Centro-Sud',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Coordina le attività degli istruttori nelle regioni del Centro e Sud Italia',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#3DA535] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Il comitato walking dell'Unione Sportiva Acli per la promozione dello sport del cammino
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              La Nostra Storia
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              USN Walking nasce nel 2010 come comitato specializzato dell'Unione Sportiva Acli, ente di promozione sportiva riconosciuto dal CONI. La nostra missione è promuovere la pratica del walking in tutte le sue forme come strumento di salute, benessere e socializzazione per persone di ogni età e condizione fisica.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              In oltre un decennio di attività, abbiamo formato più di 200 istruttori certificati distribuiti in tutta Italia, organizzato centinaia di eventi e manifestazioni, e coinvolto migliaia di praticanti nel mondo del walking sportivo. La nostra rete continua a crescere grazie alla passione e alla professionalità dei nostri istruttori.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Siamo orgogliosamente parte della famiglia delle Acli, movimento associativo che da oltre 75 anni lavora per la promozione sociale, culturale e sportiva su tutto il territorio nazionale. Questa appartenenza ci permette di beneficiare di una struttura solida e di valori condivisi di solidarietà, inclusione e democrazia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              La Nostra Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "Rendere il walking accessibile a tutti, promuovendo uno stile di vita attivo e sano attraverso la formazione di istruttori qualificati, l'organizzazione di attività inclusive e la diffusione della cultura del movimento all'aria aperta."
              </p>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#3DA535]">
                <h3 className="text-2xl font-bold text-[#0D3B5E] mb-4">I Nostri Obiettivi</h3>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Formare istruttori competenti e preparati in tutte le discipline del walking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Promuovere l'attività fisica come strumento di prevenzione e benessere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Garantire l'inclusione e l'accessibilità a persone con diverse abilità</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Organizzare eventi e manifestazioni per diffondere la cultura del walking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Creare una comunità nazionale di appassionati e professionisti del settore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DA535] mr-3 text-xl">•</span>
                    <span>Collaborare con istituzioni sanitarie e sociali per progetti di promozione della salute</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              I Nostri Valori
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I principi che guidano ogni nostra azione e decisione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-[#3DA535]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3DA535] to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0D3B5E] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              Il Nostro Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le persone che guidano USN Walking verso il futuro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#0D3B5E] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#3DA535] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D3B5E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic mb-6">
              Unione Sportiva Acli
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ente di Promozione Sportiva riconosciuto dal CONI
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              L'Unione Sportiva Acli è un ente di promozione sportiva riconosciuto dal CONI che opera su tutto il territorio nazionale con migliaia di associazioni affiliate. Nata nel contesto delle Acli (Associazioni Cristiane Lavoratori Italiani), l'US Acli promuove lo sport come strumento di crescita personale, inclusione sociale e benessere collettivo.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Il riconoscimento del CONI garantisce la validità delle nostre certificazioni, la qualità della formazione offerta e l'affidabilità della nostra organizzazione. Tutti i nostri istruttori sono iscritti al Registro Nazionale del CONI e operano secondo gli standard più elevati di professionalità e sicurezza.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black italic text-[#0D3B5E] mb-6">
            Vuoi Saperne di Più?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per ricevere informazioni su USN Walking e le nostre attività
          </p>
          <a
            href="/contatti"
            className="inline-flex items-center px-8 py-4 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Contattaci
          </a>
        </div>
      </section>
    </div>
  );
}
