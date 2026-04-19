import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Filter } from 'lucide-react';
import { supabase, Instructor } from '../lib/supabase';

export default function TrovaIstruttore() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [filteredInstructors, setFilteredInstructors] = useState<Instructor[]>([]);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const disciplines = ['all', 'Nordic Walking', 'Camminata Sportiva', 'Lunghi Cammini e Trekking', 'Walking Adattato'];
  const regions = [
    'all',
    'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
    'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche',
    'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia',
    'Toscana', 'Trentino-Alto Adige', 'Umbria', 'Valle d\'Aosta', 'Veneto',
  ];

  const disciplineColors: { [key: string]: string } = {
    'Nordic Walking': 'from-[#3DA535] to-emerald-600',
    'Camminata Sportiva': 'from-[#00838F] to-cyan-600',
    'Lunghi Cammini e Trekking': 'from-[#FFB300] to-orange-500',
    'Walking Adattato': 'from-[#0D3B5E] to-blue-700',
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  useEffect(() => {
    filterInstructors();
  }, [selectedDiscipline, selectedRegion, instructors]);

  const fetchInstructors = async () => {
    try {
      const { data, error } = await supabase
        .from('instructors')
        .select('*')
        .order('name');

      if (error) throw error;
      setInstructors(data || []);
    } catch (error) {
      console.error('Error fetching instructors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterInstructors = () => {
    let filtered = instructors;

    if (selectedDiscipline !== 'all') {
      filtered = filtered.filter((i) => i.discipline === selectedDiscipline);
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter((i) => i.region === selectedRegion);
    }

    setFilteredInstructors(filtered);
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#FFB300] to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Trova il Tuo Istruttore
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Oltre 200 istruttori certificati in tutta Italia pronti ad accompagnarti nel tuo percorso
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-6 h-6 text-[#0D3B5E]" />
            <h2 className="text-2xl font-bold text-[#0D3B5E]">Filtra per</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#0D3B5E] mb-2">
                Disciplina
              </label>
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none text-lg bg-white"
              >
                <option value="all">Tutte le discipline</option>
                {disciplines.slice(1).map((discipline) => (
                  <option key={discipline} value={discipline}>
                    {discipline}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0D3B5E] mb-2">
                Regione
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none text-lg bg-white"
              >
                <option value="all">Tutte le regioni</option>
                {regions.slice(1).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Trovati <span className="font-bold text-[#3DA535]">{filteredInstructors.length}</span> istruttori
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-[#00838F]">
              <h3 className="text-2xl font-bold text-[#0D3B5E] mb-4">
                Mappa Istruttori
              </h3>
              <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888235.5857535386!2d9.189981655983324!3d42.76644779098432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItalia!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Istruttori USN Walking"
                />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                I marker sulla mappa rappresentano la posizione approssimativa degli istruttori. Contattali per informazioni precise su orari e luoghi di ritrovo.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8 text-center">
            I Nostri Istruttori
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#3DA535] border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Caricamento istruttori...</p>
            </div>
          ) : filteredInstructors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nessun istruttore trovato con i filtri selezionati
              </p>
              <button
                onClick={() => {
                  setSelectedDiscipline('all');
                  setSelectedRegion('all');
                }}
                className="mt-4 px-6 py-3 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-full font-bold transition-colors"
              >
                Rimuovi Filtri
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInstructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-200"
                >
                  <div className="relative h-48 bg-gray-200">
                    {instructor.photo_url ? (
                      <img
                        src={instructor.photo_url}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                        <span className="text-white text-5xl font-black">
                          {instructor.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${disciplineColors[instructor.discipline]} text-white text-xs font-bold rounded-full`}>
                      {instructor.discipline}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-[#0D3B5E] mb-2">
                      {instructor.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">
                          {instructor.city}, {instructor.region}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#3DA535]">
                        {instructor.qualification}
                      </p>
                    </div>

                    {instructor.bio && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {instructor.bio}
                      </p>
                    )}

                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      {instructor.email && (
                        <a
                          href={`mailto:${instructor.email}`}
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#3DA535] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{instructor.email}</span>
                        </a>
                      )}
                      {instructor.phone && (
                        <a
                          href={`tel:${instructor.phone}`}
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#3DA535] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>{instructor.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black italic text-[#0D3B5E] mb-6">
            Vuoi Diventare Istruttore?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Scopri i nostri corsi di formazione per istruttori di walking
          </p>
          <a
            href="/formazione"
            className="inline-flex items-center px-8 py-4 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Vai ai Corsi di Formazione
          </a>
        </div>
      </section>
    </div>
  );
}
