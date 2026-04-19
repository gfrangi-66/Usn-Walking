import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

export default function NordicWalking() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3DA535]/90 to-emerald-600/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-4">
            Nordic Walking
          </h1>
          <p className="text-2xl text-white/90">
            Tecnica · Potenza · Natura
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              Cos'è il Nordic Walking?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il Nordic Walking è una tecnica di camminata che utilizza bastoncini appositamente progettati per coinvolgere attivamente la parte superiore del corpo durante l'esercizio. Nato in Finlandia negli anni '30 come allenamento estivo per gli sciatori di fondo, si è evoluto in una disciplina sportiva completa praticata da milioni di persone in tutto il mondo.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              A differenza della camminata tradizionale, il Nordic Walking coinvolge circa l'85-90% dei muscoli del corpo, rendendolo uno degli sport più completi e efficaci per il benessere generale. La tecnica corretta permette di aumentare il consumo calorico fino al 40% rispetto alla camminata normale, senza aumentare la percezione dello sforzo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-12 text-center">
            Benefici del Nordic Walking
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Allenamento Completo',
                description: 'Coinvolge oltre l\'85% della muscolatura corporea',
              },
              {
                title: 'Riduzione del Carico',
                description: 'Alleggerisce il peso su ginocchia, anche e caviglie fino al 30%',
              },
              {
                title: 'Postura Migliorata',
                description: 'Raddrizza la colonna vertebrale e apre il torace',
              },
              {
                title: 'Consumo Calorico',
                description: 'Brucia fino al 40% di calorie in più della camminata normale',
              },
              {
                title: 'Sistema Cardiovascolare',
                description: 'Migliora la circolazione e rafforza il cuore',
              },
              {
                title: 'Benessere Mentale',
                description: 'Riduce stress e ansia grazie al contatto con la natura',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3DA535] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0D3B5E] text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8">
            La Tecnica Corretta
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#3DA535] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">1. Impugnatura</h3>
              <p className="text-gray-700 leading-relaxed">
                Il bastoncino viene impugnato con il lacciolo che avvolge il polso come un'estensione naturale del braccio. L'impugnatura deve essere salda ma non rigida, permettendo l'apertura della mano nella fase di spinta posteriore.
              </p>
            </div>

            <div className="border-l-4 border-[#3DA535] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">2. Movimento delle Braccia</h3>
              <p className="text-gray-700 leading-relaxed">
                Le braccia si muovono in opposizione alle gambe con un movimento naturale e ampio. Il braccio avanza disteso con un angolo di circa 45°, mentre nella fase di spinta dietro il corpo il gomito si piega leggermente e la mano si apre.
              </p>
            </div>

            <div className="border-l-4 border-[#3DA535] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">3. Appoggio del Bastoncino</h3>
              <p className="text-gray-700 leading-relaxed">
                Il bastoncino viene appoggiato obliquamente all'altezza del tallone opposto, non verticalmente. L'angolo corretto permette una spinta efficace senza sovraccaricare le articolazioni.
              </p>
            </div>

            <div className="border-l-4 border-[#3DA535] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">4. Rullata del Piede</h3>
              <p className="text-gray-700 leading-relaxed">
                Il piede effettua una rullata completa dal tallone alla punta, accompagnata dalla spinta del bastoncino. Il passo deve essere lungo ma naturale, evitando di sovraestendere la gamba.
              </p>
            </div>

            <div className="border-l-4 border-[#3DA535] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">5. Rotazione del Bacino</h3>
              <p className="text-gray-700 leading-relaxed">
                Il bacino ruota leggermente accompagnando il movimento delle gambe, permettendo un passo più lungo e fluido. Questa rotazione coinvolge anche i muscoli addominali nel lavoro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8">
            Per Chi è Adatto?
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il Nordic Walking è uno sport adatto a tutti, indipendentemente dall'età e dal livello di forma fisica:
            </p>

            <ul className="space-y-4">
              {[
                'Persone sedentarie che vogliono iniziare a fare sport in modo graduale',
                'Sportivi che cercano un allenamento completo e a basso impatto',
                'Persone in sovrappeso che vogliono perdere peso senza stressare le articolazioni',
                'Anziani che desiderano mantenersi attivi e migliorare l\'equilibrio',
                'Chi ha problemi articolari alle ginocchia, anche o schiena',
                'Persone in riabilitazione post-operatoria o post-infortunio',
                'Chi vuole socializzare e praticare sport in gruppo all\'aria aperta',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3DA535] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#3DA535] to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic mb-6">
            Pronto a Iniziare con il Nordic Walking?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Trova un istruttore certificato nella tua zona e scopri tutti i benefici di questa disciplina
          </p>
          <Link
            to="/trova-istruttore"
            className="inline-flex items-center px-8 py-4 bg-white text-[#3DA535] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Trova un Istruttore
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
