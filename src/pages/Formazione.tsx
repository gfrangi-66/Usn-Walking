import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Award, CheckCircle2 } from 'lucide-react';
import { supabase, Course } from '../lib/supabase';

export default function Formazione() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('start_date');

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const levelColors: { [key: string]: string } = {
    'Base': 'from-[#3DA535] to-emerald-600',
    'Avanzato': 'from-[#00838F] to-cyan-600',
    'Maestro': 'from-[#FFB300] to-orange-500',
  };

  const certificationLevels = [
    {
      level: 'Istruttore Base',
      color: 'from-[#3DA535] to-emerald-600',
      icon: Award,
      duration: '40 ore',
      description: 'Primo livello di certificazione per insegnare le basi delle discipline di walking',
      requirements: [
        'Maggiore età',
        'Certificato medico per attività sportiva non agonistica',
        'Passione per lo sport e il contatto con la natura',
      ],
      competenze: [
        'Conoscenza base delle tecniche di walking',
        'Capacità di condurre gruppi di principianti',
        'Nozioni di sicurezza e primo soccorso',
        'Elementi di anatomia e fisiologia dell\'esercizio',
      ],
    },
    {
      level: 'Istruttore Avanzato',
      color: 'from-[#00838F] to-cyan-600',
      icon: Award,
      duration: '32 ore',
      description: 'Livello intermedio per specializzarsi in tecniche avanzate e allenamento sportivo',
      requirements: [
        'Certificazione Istruttore Base',
        'Almeno 2 anni di esperienza come istruttore',
        'Minimo 100 ore di insegnamento documentate',
      ],
      competenze: [
        'Tecniche avanzate specifiche per ogni disciplina',
        'Programmazione dell\'allenamento',
        'Gestione di gruppi eterogenei',
        'Valutazione funzionale e test',
      ],
    },
    {
      level: 'Maestro',
      color: 'from-[#FFB300] to-orange-500',
      icon: Award,
      duration: '48 ore',
      description: 'Massimo livello di certificazione per formare nuovi istruttori',
      requirements: [
        'Certificazione Istruttore Avanzato',
        'Almeno 5 anni di esperienza come istruttore',
        'Minimo 500 ore di insegnamento documentate',
        'Partecipazione a eventi e competizioni',
      ],
      competenze: [
        'Formazione di nuovi istruttori',
        'Organizzazione di eventi e manifestazioni',
        'Gestione tecnica di associazioni e gruppi',
        'Aggiornamento continuo e ricerca',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Formazione Istruttori
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Diventa istruttore certificato di walking e guida altri verso il benessere
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              Percorso di Certificazione
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un percorso strutturato in tre livelli per diventare un professionista del walking
            </p>
          </div>

          <div className="space-y-12">
            {certificationLevels.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className={`bg-gradient-to-br ${cert.color} p-8 text-white`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <Icon className="w-12 h-12" />
                        <div>
                          <h3 className="text-3xl font-black italic">{cert.level}</h3>
                          <p className="text-white/90 font-semibold">{cert.duration}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-lg">
                        {cert.description}
                      </p>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-[#0D3B5E] mb-4">Requisiti</h4>
                          <ul className="space-y-2">
                            {cert.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2">
                                <CheckCircle2 className="w-5 h-5 text-[#3DA535] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-[#0D3B5E] mb-4">Competenze Acquisite</h4>
                          <ul className="space-y-2">
                            {cert.competenze.map((comp, compIndex) => (
                              <li key={compIndex} className="flex items-start space-x-2">
                                <CheckCircle2 className="w-5 h-5 text-[#3DA535] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{comp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-4">
              Corsi in Programma
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consulta il calendario dei prossimi corsi di formazione
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#3DA535] border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Caricamento corsi...</p>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <p className="text-xl text-gray-600 mb-4">
                Nessun corso in programma al momento
              </p>
              <p className="text-gray-500">
                Controlla regolarmente questa pagina per aggiornamenti
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${levelColors[course.level]} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                        {course.level}
                      </span>
                      <span className="text-2xl font-black">
                        €{course.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {course.discipline}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Calendar className="w-5 h-5 text-[#3DA535]" />
                        <div className="text-sm">
                          <div className="font-semibold">
                            {formatDate(course.start_date)}
                          </div>
                          <div className="text-gray-500">
                            al {formatDate(course.end_date)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="w-5 h-5 text-[#3DA535]" />
                        <span className="text-sm">
                          {course.duration_hours} ore totali
                        </span>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-700">
                        <MapPin className="w-5 h-5 text-[#3DA535]" />
                        <span className="text-sm">{course.location}</span>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-700">
                        <Users className="w-5 h-5 text-[#3DA535]" />
                        <span className="text-sm">
                          Max {course.max_participants} partecipanti
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      {course.description}
                    </p>

                    {course.requirements && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          Requisiti:
                        </p>
                        <p className="text-xs text-gray-600">
                          {course.requirements}
                        </p>
                      </div>
                    )}

                    <button className="w-full px-6 py-3 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-lg font-bold transition-colors">
                      Iscriviti al Corso
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8 text-center">
            Perché Diventare Istruttore?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-[#3DA535]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Passione e Professione</h3>
              <p className="text-gray-700">
                Trasforma la tua passione per lo sport e la natura in una professione gratificante, aiutando le persone a migliorare la loro salute e qualità della vita.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-[#00838F]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Crescita Professionale</h3>
              <p className="text-gray-700">
                Accedi a un percorso di formazione continua con aggiornamenti, workshop e specializzazioni per crescere costantemente come professionista.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-[#FFB300]">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Rete Nazionale</h3>
              <p className="text-gray-700">
                Entra a far parte di una rete di oltre 200 istruttori in tutta Italia, con opportunità di collaborazione, eventi e condivisione di esperienze.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-400">
              <h3 className="text-xl font-bold text-[#0D3B5E] mb-3">Riconoscimento CONI</h3>
              <p className="text-gray-700">
                Le certificazioni USN Walking sono riconosciute dal CONI attraverso l'Unione Sportiva Acli, garantendo valore e credibilità al tuo titolo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#3DA535] to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic mb-6">
            Hai Domande sui Corsi?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contattaci per ricevere informazioni dettagliate sui corsi di formazione
          </p>
          <a
            href="/contatti"
            className="inline-flex items-center px-8 py-4 bg-white text-[#3DA535] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Contattaci
          </a>
        </div>
      </section>
    </div>
  );
}
