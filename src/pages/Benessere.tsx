import { Heart, Brain, Activity, Shield, Users, Smile } from 'lucide-react';

export default function Benessere() {
  const benefits = [
    {
      icon: Heart,
      title: 'Salute Cardiovascolare',
      color: 'from-red-500 to-pink-500',
      description: 'Il walking migliora significativamente la salute del cuore e del sistema circolatorio',
      details: [
        'Riduce il rischio di malattie cardiache fino al 35%',
        'Abbassa la pressione sanguigna in modo naturale',
        'Migliora i livelli di colesterolo HDL (buono)',
        'Riduce i trigliceridi nel sangue',
        'Aumenta la capacità aerobica e l\'efficienza cardiaca',
        'Migliora la circolazione periferica',
      ],
    },
    {
      icon: Brain,
      title: 'Benessere Mentale',
      color: 'from-purple-500 to-indigo-500',
      description: 'L\'attività fisica regolare ha effetti profondi sulla salute mentale e cognitiva',
      details: [
        'Riduce stress, ansia e sintomi depressivi',
        'Migliora la qualità del sonno',
        'Aumenta la produzione di endorfine (ormoni del benessere)',
        'Migliora memoria e funzioni cognitive',
        'Riduce il rischio di declino cognitivo e demenza',
        'Favorisce concentrazione e chiarezza mentale',
      ],
    },
    {
      icon: Activity,
      title: 'Controllo del Peso',
      color: 'from-green-500 to-emerald-500',
      description: 'Il walking è un\'attività eccellente per gestire il peso corporeo in modo sostenibile',
      details: [
        'Brucia calorie in modo costante e sostenibile',
        'Accelera il metabolismo basale',
        'Favorisce la perdita di massa grassa',
        'Preserva la massa muscolare magra',
        'Riduce il grasso addominale viscerale',
        'Migliora la composizione corporea generale',
      ],
    },
    {
      icon: Shield,
      title: 'Prevenzione Malattie',
      color: 'from-blue-500 to-cyan-500',
      description: 'L\'attività fisica regolare è un potente strumento di prevenzione',
      details: [
        'Riduce il rischio di diabete tipo 2 fino al 50%',
        'Previene alcune forme di cancro (colon, seno)',
        'Riduce il rischio di osteoporosi e fratture',
        'Migliora la densità ossea',
        'Riduce l\'infiammazione sistemica',
        'Rafforza il sistema immunitario',
      ],
    },
    {
      icon: Users,
      title: 'Benefici per Anziani',
      color: 'from-orange-500 to-amber-500',
      description: 'Il walking è particolarmente benefico per la popolazione anziana',
      details: [
        'Mantiene l\'autonomia e l\'indipendenza',
        'Migliora equilibrio e coordinazione',
        'Riduce il rischio di cadute fino al 40%',
        'Preserva la massa muscolare (sarcopenia)',
        'Migliora la mobilità articolare',
        'Favorisce la socializzazione e previene l\'isolamento',
      ],
    },
    {
      icon: Smile,
      title: 'Qualità della Vita',
      color: 'from-pink-500 to-rose-500',
      description: 'Il walking contribuisce al benessere generale e alla qualità della vita',
      details: [
        'Aumenta l\'energia e riduce la fatica cronica',
        'Migliora l\'autostima e la fiducia in sé',
        'Favorisce le relazioni sociali',
        'Permette di godere della natura e dell\'aria aperta',
        'Riduce l\'uso di farmaci in molte condizioni',
        'Migliora la percezione generale del proprio stato di salute',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#3DA535] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Benessere & Salute
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              I benefici scientificamente provati del walking per la salute fisica, mentale e sociale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-6">
              Camminare: La Medicina Naturale
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il walking è una delle forme di attività fisica più studiate e raccomandate dalla comunità scientifica internazionale. L'Organizzazione Mondiale della Sanità raccomanda almeno 150 minuti di attività fisica moderata a settimana, e il walking rappresenta il modo più semplice, sicuro ed efficace per raggiungere questo obiettivo.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Numerosi studi scientifici hanno dimostrato che camminare regolarmente riduce significativamente il rischio di malattie croniche, migliora la qualità della vita e aumenta la longevità. I benefici sono evidenti già con 30 minuti di camminata al giorno, ma aumentano progressivamente con la durata e l'intensità dell'attività.
            </p>
            <div className="bg-[#3DA535]/10 border-l-4 border-[#3DA535] p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                Secondo uno studio pubblicato su The Lancet:
              </p>
              <p className="text-gray-700 italic">
                "Le persone che camminano regolarmente hanno un rischio di mortalità prematura ridotto del 30% rispetto alle persone sedentarie, indipendentemente dall'età, dal peso corporeo e dalle condizioni di salute preesistenti."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              I Benefici del Walking
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un'attività completa che agisce su tutti gli aspetti della salute
            </p>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className={`bg-gradient-to-br ${benefit.color} p-8 text-white flex flex-col justify-center`}>
                      <Icon className="w-16 h-16 mb-4" />
                      <h3 className="text-3xl font-black italic mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <ul className="grid md:grid-cols-2 gap-4">
                        {benefit.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${benefit.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8 text-center">
            Walking e Salute Cardiovascolare
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Le malattie cardiovascolari sono la principale causa di morte nel mondo occidentale. Il walking rappresenta uno degli strumenti più efficaci per la prevenzione primaria e secondaria di queste patologie.
            </p>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 mb-6 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-4">Come il Walking Protegge il Cuore</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Riduzione della pressione arteriosa:</strong> La camminata regolare riduce la pressione sistolica di 4-9 mmHg, un effetto paragonabile a quello di alcuni farmaci antipertensivi.
                </p>
                <p>
                  <strong>Miglioramento del profilo lipidico:</strong> Aumenta il colesterolo HDL ("buono") e riduce i trigliceridi e il colesterolo LDL ("cattivo").
                </p>
                <p>
                  <strong>Controllo glicemico:</strong> Migliora la sensibilità all'insulina e il controllo della glicemia, riducendo il rischio di diabete tipo 2.
                </p>
                <p>
                  <strong>Riduzione dell'infiammazione:</strong> Diminuisce i marcatori infiammatori associati all'aterosclerosi e alle malattie cardiovascolari.
                </p>
                <p>
                  <strong>Miglioramento della funzione endoteliale:</strong> Migliora la capacità dei vasi sanguigni di dilatarsi e contrarsi correttamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic mb-8 text-center">
            Walking e Salute Mentale
          </h2>

          <div className="space-y-6 text-lg">
            <p className="text-white/90 leading-relaxed">
              Gli effetti del walking sulla salute mentale sono altrettanto importanti di quelli fisici. Numerosi studi hanno dimostrato che l'attività fisica regolare è efficace nel trattamento della depressione lieve-moderata quanto i farmaci antidepressivi, senza effetti collaterali.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Meccanismi d'Azione</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Aumento della produzione di endorfine, serotonina e dopamina</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Riduzione dei livelli di cortisolo (ormone dello stress)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Miglioramento della neuroplasticità e della neurogenesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Effetto di distrazione dai pensieri negativi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Miglioramento dell'autoefficacia e dell'autostima</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB300] mr-3">•</span>
                  <span>Contatto con la natura (effetto "shinrin-yoku")</span>
                </li>
              </ul>
            </div>

            <p className="text-white/90 leading-relaxed">
              Particolarmente efficace è il walking in natura o "bagno di foresta", una pratica giapponese che ha dimostrato di ridurre i livelli di stress, migliorare l'umore e rafforzare il sistema immunitario.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8 text-center">
            Quanto Camminare?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-[#3DA535]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Minimo Raccomandato</h3>
              <p className="text-4xl font-black text-[#3DA535] mb-2">150 min</p>
              <p className="text-gray-700">
                a settimana di attività moderata (OMS)
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-[#00838F]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Ottimale</h3>
              <p className="text-4xl font-black text-[#00838F] mb-2">300 min</p>
              <p className="text-gray-700">
                a settimana per massimi benefici
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-[#FFB300]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Passi Giornalieri</h3>
              <p className="text-4xl font-black text-[#FFB300] mb-2">7000+</p>
              <p className="text-gray-700">
                passi al giorno riducono mortalità
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0D3B5E] mb-4">Consigli Pratici</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Inizia gradualmente, anche 10 minuti al giorno fanno la differenza</li>
              <li>• Aumenta progressivamente durata e intensità</li>
              <li>• Cerca di camminare tutti i giorni, anche solo per brevi tratti</li>
              <li>• Varia i percorsi per mantenere alta la motivazione</li>
              <li>• Cammina in compagnia per rendere l'attività più piacevole</li>
              <li>• Ascolta musica o podcast se cammini da solo</li>
              <li>• Scegli scarpe comode e appropriate</li>
              <li>• Monitora i progressi con app o contapassi</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
