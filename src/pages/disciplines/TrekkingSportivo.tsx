import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

export default function TrekkingSportivo() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/90 to-orange-500/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-4">
            Lunghi Cammini e Trekking
          </h1>
          <p className="text-2xl text-white/90">
            Avventura · Natura · Gruppo
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              Cosa sono i Lunghi Cammini e il Trekking?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I Lunghi Cammini e il Trekking rappresentano una disciplina che unisce l'escursionismo in montagna con una preparazione atletica strutturata e obiettivi sportivi precisi. Questa attività richiede una programmazione dell'allenamento, la gestione dello zaino e dell'attrezzatura adeguata, e una buona conoscenza dell'ambiente montano.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Le uscite sono organizzate con itinerari studiati, dislivelli significativi e obiettivi di tempo. Si pratica in gruppo sotto la guida di istruttori esperti che garantiscono sicurezza e permettono ai partecipanti di scoprire territori nuovi, migliorando costantemente le proprie capacità fisiche e tecniche.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-12 text-center">
            Benefici dei Lunghi Cammini e Trekking
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Esplorazione del Territorio',
                description: 'Scopri luoghi e panorami straordinari in totale sicurezza',
              },
              {
                title: 'Allenamento Completo',
                description: 'Sviluppa resistenza, forza e capacità cardiovascolare',
              },
              {
                title: 'Socializzazione',
                description: 'Condividi l\'esperienza con un gruppo affiatato',
              },
              {
                title: 'Contatto con la Natura',
                description: 'Immergiti completamente nell\'ambiente naturale',
              },
              {
                title: 'Gestione dello Sforzo',
                description: 'Impara a dosare energie su lunghe distanze',
              },
              {
                title: 'Competenze Tecniche',
                description: 'Acquisisci conoscenze di orientamento e sicurezza in montagna',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FFB300] flex-shrink-0 mt-1" />
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
            Aspetti Fondamentali
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#FFB300] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">1. Preparazione Fisica</h3>
              <p className="text-gray-700 leading-relaxed">
                I Lunghi Cammini e il Trekking richiedono una buona base di resistenza aerobica e forza muscolare, specialmente nelle gambe. È importante seguire un programma di allenamento progressivo che includa camminate con dislivello crescente, esercizi di potenziamento e uscite con zaino carico.
              </p>
            </div>

            <div className="border-l-4 border-[#FFB300] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">2. Equipaggiamento Essenziale</h3>
              <p className="text-gray-700 leading-relaxed">
                Lo zaino deve essere ergonomico e ben regolato, con capacità di 20-40 litri a secondo che si tratti di escursioni giornaliere o di più giorni. Fondamentali sono le calzature (adeguate alla durata e ai terreni), abbigliamento a strati, bastoncini telescopici, kit di primo soccorso, mappa e bussola o GPS.
              </p>
            </div>

            <div className="border-l-4 border-[#FFB300] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">3. Tecnica di Cammino</h3>
              <p className="text-gray-700 leading-relaxed">
                In salita si cammina con passi corti e regolari, appoggiando tutta la pianta del piede, usando i bastoncini per alleggerire lo sforzo delle gambe. In discesa il passo si allunga leggermente, mantenendo il baricentro arretrato e usando i bastoncini come freno e supporto per l'equilibrio.
              </p>
            </div>

            <div className="border-l-4 border-[#FFB300] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">4. Alimentazione e Idratazione</h3>
              <p className="text-gray-700 leading-relaxed">
                Durante le attività di lunga durata è fondamentale bere regolarmente piccole quantità d'acqua e assumere carboidrati complessi prima dell'uscita. Durante il percorso, snack energetici come frutta secca, barrette e cioccolato forniscono energia immediata. Mai aspettare di avere sete o fame per rifornirsi.
              </p>
            </div>

            <div className="border-l-4 border-[#FFB300] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">5. Sicurezza e Orientamento</h3>
              <p className="text-gray-700 leading-relaxed">
                Conoscere i principi base di orientamento, saper leggere una cartina topografica e riconoscere i segnavia è essenziale. È importante informare sempre qualcuno dell'itinerario previsto, controllare le previsioni meteo e saper valutare quando è necessario rinunciare o tornare indietro.
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
              I Lunghi Cammini e il Trekking sono perfetti per chi:
            </p>

            <ul className="space-y-4">
              {[
                'Ama la natura e vuole esplorarla in modo strutturato',
                'Cerca un\'attività sportiva a contatto con la natura',
                'Vuole migliorare la propria resistenza fisica',
                'Desidera socializzare e condividere esperienze in gruppo',
                'Ha già una base di forma fisica e vuole nuove sfide',
                'Vuole imparare tecniche di orientamento e sicurezza in ambiente',
                'Cerca un\'alternativa alla palestra e agli sport urbani',
                'Vuole preparare attività di più giorni o ad alta quota',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FFB300] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFB300] to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic mb-6">
            Inizia la Tua Avventura in Montagna
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contatta un istruttore certificato e unisciti ai nostri gruppi
          </p>
          <Link
            to="/trova-istruttore"
            className="inline-flex items-center px-8 py-4 bg-white text-[#FFB300] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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
