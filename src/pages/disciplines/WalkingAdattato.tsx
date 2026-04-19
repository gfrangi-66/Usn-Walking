import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

export default function WalkingAdattato() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B5E]/90 to-blue-700/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-4">
            Walking Adattato
          </h1>
          <p className="text-2xl text-white/90">
            Inclusione · Supporto · Dignità
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              Cos'è il Walking Adattato?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il Walking Adattato è una disciplina inclusiva che permette a persone con diverse abilità motorie, cognitive o sensoriali di praticare l'attività del cammino in modo sicuro, dignitoso e gratificante. Attraverso l'adattamento di percorsi, tecniche e attrezzature, ogni persona può godere dei benefici fisici, psicologici e sociali dello sport del cammino.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Gli istruttori di Walking Adattato sono formati specificamente per valutare le capacità individuali, proporre modifiche personalizzate e garantire un'esperienza positiva e sicura. L'obiettivo è promuovere l'autonomia, il benessere e l'integrazione sociale attraverso un'attività adatta a tutti.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-12 text-center">
            Benefici del Walking Adattato
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Totalmente Inclusivo',
                description: 'Accessibile a persone con qualsiasi livello di abilità',
              },
              {
                title: 'Supporto Personalizzato',
                description: 'Adattamento individuale di tecniche e percorsi',
              },
              {
                title: 'Percorsi Sicuri',
                description: 'Itinerari studiati per garantire sicurezza e accessibilità',
              },
              {
                title: 'Autonomia e Dignità',
                description: 'Promuove l\'indipendenza e il rispetto della persona',
              },
              {
                title: 'Integrazione Sociale',
                description: 'Favorisce relazioni e appartenenza al gruppo',
              },
              {
                title: 'Benessere Globale',
                description: 'Migliora salute fisica, mentale e qualità della vita',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0D3B5E] flex-shrink-0 mt-1" />
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
            Metodologie e Adattamenti
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#0D3B5E] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">1. Valutazione Individuale</h3>
              <p className="text-gray-700 leading-relaxed">
                Ogni persona viene valutata individualmente dall'istruttore per comprendere le capacità motorie, cognitive e sensoriali. Si identificano punti di forza e aree da supportare, definendo obiettivi realistici e personalizzati per un percorso graduale e motivante.
              </p>
            </div>

            <div className="border-l-4 border-[#0D3B5E] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">2. Attrezzature di Supporto</h3>
              <p className="text-gray-700 leading-relaxed">
                A seconda delle necessità, si utilizzano bastoni da walking, tripodi, deambulatori, carrozzine da jogging, handbike o altre attrezzature specifiche. L'attrezzatura viene scelta e adattata per garantire sicurezza, comfort e massima autonomia possibile.
              </p>
            </div>

            <div className="border-l-4 border-[#0D3B5E] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">3. Adattamento dei Percorsi</h3>
              <p className="text-gray-700 leading-relaxed">
                I percorsi vengono selezionati in base all'accessibilità: superfici regolari, assenza di barriere architettoniche, pendenze moderate, presenza di aree di riposo. Si privilegiano parchi, piste ciclabili e sentieri naturalistici accessibili, con possibilità di accorciare o modificare l'itinerario.
              </p>
            </div>

            <div className="border-l-4 border-[#0D3B5E] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">4. Supporto del Gruppo</h3>
              <p className="text-gray-700 leading-relaxed">
                Le uscite di gruppo sono organizzate con un rapporto istruttori/volontari/partecipanti adeguato. Si favorisce l'aiuto reciproco, il sostegno emotivo e la creazione di legami sociali positivi. Ogni persona è valorizzata per il proprio contributo al gruppo.
              </p>
            </div>

            <div className="border-l-4 border-[#0D3B5E] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">5. Comunicazione Adattata</h3>
              <p className="text-gray-700 leading-relaxed">
                Gli istruttori utilizzano strategie comunicative adeguate: linguaggio semplice e chiaro, comunicazione aumentativa alternativa (CAA) per persone con difficoltà cognitive o verbali, segnali visivi e tattili per persone con disabilità sensoriali, dimostrazioni pratiche e rinforzi positivi.
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
              Il Walking Adattato è progettato per persone con:
            </p>

            <ul className="space-y-4">
              {[
                'Disabilità motorie (parziali o totali)',
                'Disabilità cognitive o intellettive',
                'Disabilità sensoriali (visive o uditive)',
                'Patologie neurologiche (Parkinson, sclerosi multipla, ictus)',
                'Disturbi dello spettro autistico',
                'Sindrome di Down e altre sindromi genetiche',
                'Problemi di equilibrio o coordinazione',
                'Anziani con fragilità motoria',
                'Persone in riabilitazione dopo incidenti o interventi',
                'Chiunque desideri praticare sport in un ambiente inclusivo e accogliente',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0D3B5E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0D3B5E] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic mb-6">
            Lo Sport è un Diritto di Tutti
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contatta un istruttore specializzato in Walking Adattato e inizia il tuo percorso di benessere e inclusione
          </p>
          <Link
            to="/trova-istruttore"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0D3B5E] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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
