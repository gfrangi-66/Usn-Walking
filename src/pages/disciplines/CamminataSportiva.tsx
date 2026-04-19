import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

export default function CamminataSportiva() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00838F]/90 to-cyan-600/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-4">
            Camminata Sportiva
          </h1>
          <p className="text-2xl text-white/90">
            Veloce · Dinamico · Accessibile
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              Cos'è la Camminata Sportiva?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              La Camminata Sportiva è una camminata veloce e dinamica a braccia libere che rappresenta l'evoluzione sportiva della camminata naturale. Questa disciplina si basa su una tecnica precisa che permette di camminare a velocità sostenute mantenendo sempre un piede a contatto con il suolo, distinguendosi così dalla corsa.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nato in Italia grazie al lavoro del professor Maurizio Damilano, campione olimpico di marcia, la Camminata Sportiva unisce i benefici della camminata veloce alla semplicità di esecuzione, rendendola accessibile a tutti senza bisogno di attrezzature particolari.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-12 text-center">
            Benefici della Camminata Sportiva
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Nessuna Attrezzatura',
                description: 'Serve solo un buon paio di scarpe da walking',
              },
              {
                title: 'Accessibile a Tutti',
                description: 'Adatto a principianti e atleti di ogni livello',
              },
              {
                title: 'Cardiovascolare',
                description: 'Migliora l\'efficienza del sistema cardiocircolatorio',
              },
              {
                title: 'Tonificazione',
                description: 'Tonifica gambe, glutei e addome con il movimento dinamico',
              },
              {
                title: 'Consumo Energetico',
                description: 'Elevato dispendio calorico senza impatto sulle articolazioni',
              },
              {
                title: 'Flessibilità Oraria',
                description: 'Si può praticare ovunque e in qualsiasi momento',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00838F] flex-shrink-0 mt-1" />
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
            La Tecnica della Camminata Sportiva
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#00838F] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">1. Postura Corretta</h3>
              <p className="text-gray-700 leading-relaxed">
                La postura è fondamentale: busto eretto, spalle rilassate e leggermente arretrate, addome contratto, sguardo in avanti all'orizzonte. Il corpo deve essere allineato dalla testa ai piedi come una linea retta.
              </p>
            </div>

            <div className="border-l-4 border-[#00838F] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">2. Appoggio del Piede</h3>
              <p className="text-gray-700 leading-relaxed">
                Il piede atterra con il tallone e rotola completamente fino alla punta, spingendo energicamente nel terreno. L'appoggio deve essere deciso ma morbido, evitando impatti bruschi. La velocità si ottiene aumentando la frequenza dei passi, non la loro lunghezza.
              </p>
            </div>

            <div className="border-l-4 border-[#00838F] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">3. Movimento delle Braccia</h3>
              <p className="text-gray-700 leading-relaxed">
                Le braccia si muovono in opposizione naturale alle gambe, piegate a circa 90°. Il movimento è energico ma controllato: le braccia oscillano dalla vita fino all'altezza del petto, contribuendo al ritmo e all'equilibrio della camminata.
              </p>
            </div>

            <div className="border-l-4 border-[#00838F] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">4. Rotazione del Bacino</h3>
              <p className="text-gray-700 leading-relaxed">
                Il bacino ruota leggermente sul piano orizzontale accompagnando il movimento delle gambe. Questa rotazione, coordinata con quella delle spalle in senso opposto, permette passi più lunghi e un movimento più fluido ed efficiente.
              </p>
            </div>

            <div className="border-l-4 border-[#00838F] pl-6">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-3">5. Respirazione</h3>
              <p className="text-gray-700 leading-relaxed">
                La respirazione deve essere ritmica e profonda, sincronizzata con il passo. Inspirare dal naso ed espirare dalla bocca, mantenendo un ritmo che permetta di sostenere una conversazione durante la camminata.
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
              La Camminata Sportiva è la disciplina ideale per chi vuole:
            </p>

            <ul className="space-y-4">
              {[
                'Iniziare a fare sport in modo graduale e sicuro',
                'Perdere peso e migliorare la forma fisica generale',
                'Tonificare il corpo senza frequentare una palestra',
                'Praticare attività cardiovascolare a basso impatto articolare',
                'Allenarsi all\'aria aperta in qualsiasi stagione',
                'Fare sport in compagnia e socializzare',
                'Prepararsi per sport più impegnativi come la corsa',
                'Mantenersi attivi durante la gravidanza o dopo il parto',
                'Recuperare la forma dopo periodi di inattività',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00838F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#00838F] to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic mb-6">
            Inizia il Tuo Percorso con la Camminata Sportiva
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Trova un istruttore certificato e scopri come camminare può trasformare il tuo corpo e la tua vita
          </p>
          <Link
            to="/trova-istruttore"
            className="inline-flex items-center px-8 py-4 bg-white text-[#00838F] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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
