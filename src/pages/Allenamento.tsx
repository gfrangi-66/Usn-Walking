import { useState } from 'react';
import { Download, Heart, TrendingUp, Target, Activity } from 'lucide-react';

export default function Allenamento() {
  const [age, setAge] = useState<number>(40);
  const [restingHR, setRestingHR] = useState<number>(70);

  const maxHR = 220 - age;
  const hrReserve = maxHR - restingHR;

  const zones = [
    {
      name: 'Recupero',
      percentage: [50, 60],
      color: 'from-blue-400 to-blue-500',
      description: 'Camminata leggera, recupero attivo',
      benefits: 'Recupero, rilassamento muscolare',
    },
    {
      name: 'Resistenza Base',
      percentage: [60, 70],
      color: 'from-green-400 to-green-500',
      description: 'Camminata moderata, zona aerobica',
      benefits: 'Migliora resistenza di base, brucia grassi',
    },
    {
      name: 'Aerobica',
      percentage: [70, 80],
      color: 'from-yellow-400 to-yellow-500',
      description: 'Camminata sostenuta, allenamento cardio',
      benefits: 'Migliora capacità cardiovascolare',
    },
    {
      name: 'Soglia Anaerobica',
      percentage: [80, 90],
      color: 'from-orange-400 to-orange-500',
      description: 'Camminata intensa, intervalli',
      benefits: 'Aumenta velocità e potenza',
    },
    {
      name: 'Massimale',
      percentage: [90, 100],
      color: 'from-red-400 to-red-500',
      description: 'Sforzo massimo, sprint brevi',
      benefits: 'Allenamento anaerobico, solo per esperti',
    },
  ];

  const calculateHR = (percentages: number[]) => {
    const min = Math.round(restingHR + hrReserve * (percentages[0] / 100));
    const max = Math.round(restingHR + hrReserve * (percentages[1] / 100));
    return [min, max];
  };

  const trainingPrograms = [
    {
      level: 'Principiante',
      duration: '8 settimane',
      frequency: '3-4 volte/settimana',
      icon: Target,
      color: 'from-[#3DA535] to-emerald-600',
      weeks: [
        { week: '1-2', duration: '20-30 min', intensity: 'Bassa (60-65% FC max)', notes: 'Camminata continua su terreno pianeggiante' },
        { week: '3-4', duration: '30-40 min', intensity: 'Bassa-Media (65-70% FC max)', notes: 'Introdurre leggere salite' },
        { week: '5-6', duration: '40-50 min', intensity: 'Media (70-75% FC max)', notes: 'Alternare pianura e salita' },
        { week: '7-8', duration: '50-60 min', intensity: 'Media (70-75% FC max)', notes: 'Mantenere ritmo costante' },
      ],
    },
    {
      level: 'Intermedio',
      duration: '10 settimane',
      frequency: '4-5 volte/settimana',
      icon: TrendingUp,
      color: 'from-[#00838F] to-cyan-600',
      weeks: [
        { week: '1-2', duration: '45-60 min', intensity: 'Media (70-75% FC max)', notes: 'Base aerobica costante' },
        { week: '3-4', duration: '50-60 min', intensity: 'Media-Alta (75-80% FC max)', notes: 'Inserire intervalli 5 min veloci' },
        { week: '5-6', duration: '60-75 min', intensity: 'Variabile', notes: 'Fartlek: alternare ritmi diversi' },
        { week: '7-8', duration: '60-90 min', intensity: 'Media (70-75% FC max)', notes: 'Uscite lunghe, aumentare durata' },
        { week: '9-10', duration: '60-90 min', intensity: 'Alta (80-85% FC max)', notes: 'Test su percorso misto' },
      ],
    },
    {
      level: 'Avanzato',
      duration: '12 settimane',
      frequency: '5-6 volte/settimana',
      icon: Activity,
      color: 'from-[#FFB300] to-orange-500',
      weeks: [
        { week: '1-2', duration: '60-75 min', intensity: 'Media-Alta (75-80% FC max)', notes: 'Base solida, ritmo sostenuto' },
        { week: '3-4', duration: '60-90 min', intensity: 'Alta (80-85% FC max)', notes: 'Interval training 10x3 min' },
        { week: '5-6', duration: '90-120 min', intensity: 'Media (70-75% FC max)', notes: 'Long walk con dislivello' },
        { week: '7-8', duration: '60-75 min', intensity: 'Molto Alta (85-90% FC max)', notes: 'Ripetute in salita 8x5 min' },
        { week: '9-10', duration: '90-120 min', intensity: 'Variabile', notes: 'Simulazione gara, terreno tecnico' },
        { week: '11-12', duration: '45-60 min', intensity: 'Media-Alta (75-80% FC max)', notes: 'Scarico e mantenimento' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Allenamento
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Programmi di allenamento strutturati per ogni livello e strumenti per ottimizzare la tua preparazione
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              Calcolatore Zone di Frequenza Cardiaca
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Inserisci i tuoi dati per calcolare le zone di frequenza cardiaca ottimali per l'allenamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Età (anni)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    min="18"
                    max="100"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Frequenza Cardiaca a Riposo (bpm)
                  </label>
                  <input
                    type="number"
                    value={restingHR}
                    onChange={(e) => setRestingHR(Number(e.target.value))}
                    min="40"
                    max="100"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none text-lg"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6 border-2 border-[#3DA535]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">FC Massima</p>
                    <p className="text-3xl font-black text-[#0D3B5E]">{maxHR} bpm</p>
                  </div>
                  <Heart className="w-12 h-12 text-[#3DA535]" />
                </div>
                <p className="text-sm text-gray-600">
                  Calcolata con formula: 220 - età
                </p>
              </div>

              <div className="space-y-4">
                {zones.map((zone, index) => {
                  const [min, max] = calculateHR(zone.percentage);
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#0D3B5E] mb-1">
                            Zona {index + 1}: {zone.name}
                          </h3>
                          <p className="text-sm text-gray-600">{zone.description}</p>
                        </div>
                        <div className={`px-4 py-2 bg-gradient-to-r ${zone.color} text-white rounded-lg font-bold text-center min-w-[120px]`}>
                          {min}-{max} bpm
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{zone.benefits}</span>
                        <span className="text-gray-500 font-semibold">
                          {zone.percentage[0]}-{zone.percentage[1]}% FC max
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              Programmi di Allenamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Piani strutturati per progredire in modo sicuro ed efficace
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black italic">{program.level}</h3>
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center">
                        <span className="font-semibold mr-2">Durata:</span>
                        {program.duration}
                      </p>
                      <p className="flex items-center">
                        <span className="font-semibold mr-2">Frequenza:</span>
                        {program.frequency}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {program.weeks.map((week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="border-l-4 border-[#3DA535] pl-4 py-2"
                        >
                          <h4 className="font-bold text-[#0D3B5E] mb-1">
                            Settimana {week.week}
                          </h4>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-semibold">Durata:</span> {week.duration}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-semibold">Intensità:</span> {week.intensity}
                          </p>
                          <p className="text-xs text-gray-600">{week.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#0D3B5E] rounded-lg font-bold transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      Scarica Scheda PDF
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8 text-center">
            Consigli per l'Allenamento
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-[#3DA535]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Prima dell'Allenamento</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Riscaldamento di 5-10 minuti a ritmo blando</li>
                <li>• Idratazione adeguata nelle ore precedenti</li>
                <li>• Pasto leggero 2-3 ore prima</li>
                <li>• Abbigliamento adatto alle condizioni meteo</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-[#00838F]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Durante l'Allenamento</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mantieni il ritmo programmato</li>
                <li>• Bevi piccole quantità regolarmente</li>
                <li>• Ascolta i segnali del tuo corpo</li>
                <li>• Usa cardiofrequenzimetro per monitorare</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-[#FFB300]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Dopo l'Allenamento</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Defaticamento di 5-10 minuti a ritmo lento</li>
                <li>• Stretching di tutti i gruppi muscolari</li>
                <li>• Reidratazione abbondante</li>
                <li>• Pasto/spuntino entro 30-60 minuti</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-400">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Riposo e Recupero</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Almeno 1-2 giorni di riposo/settimana</li>
                <li>• Sonno adeguato (7-9 ore per notte)</li>
                <li>• Alternare intensità degli allenamenti</li>
                <li>• Massaggi o foam rolling per muscoli</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
