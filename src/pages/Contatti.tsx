import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Contatti
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Siamo qui per rispondere a tutte le tue domande sul walking
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8">
                Scrivici
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-[#3DA535] rounded-lg">
                  <p className="text-[#3DA535] font-semibold">
                    Grazie per averci contattato! Ti risponderemo al più presto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Oggetto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none bg-white"
                  >
                    <option value="">Seleziona un oggetto</option>
                    <option value="info">Informazioni generali</option>
                    <option value="instructor">Cerco un istruttore</option>
                    <option value="course">Informazioni sui corsi</option>
                    <option value="become-instructor">Voglio diventare istruttore</option>
                    <option value="collaboration">Proposte di collaborazione</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#0D3B5E] mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Invia Messaggio
                </button>

                <p className="text-sm text-gray-600">
                  * Campi obbligatori
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-4xl font-black italic text-[#0D3B5E] mb-8">
                Informazioni di Contatto
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-[#3DA535]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3DA535] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D3B5E] mb-2">Email</h3>
                      <a
                        href="mailto:info@usnwalking.it"
                        className="text-gray-700 hover:text-[#3DA535] transition-colors"
                      >
                        info@usnwalking.it
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Per informazioni generali
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-[#00838F]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00838F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D3B5E] mb-2">Telefono</h3>
                      <a
                        href="tel:+390612345678"
                        className="text-gray-700 hover:text-[#00838F] transition-colors"
                      >
                        +39 06 1234 5678
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Lun-Ven: 9:00-13:00 / 14:00-18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-[#FFB300]">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFB300] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D3B5E] mb-2">Sede Nazionale</h3>
                      <p className="text-gray-700">
                        Via delle Acli, 12<br />
                        00100 Roma (RM)<br />
                        Italia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D3B5E] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-black italic mb-6">
                  Seguici sui Social
                </h3>
                <p className="text-white/90 mb-6">
                  Resta aggiornato su eventi, news e contenuti esclusivi
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gray-50">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.7598417424757!2d12.482801515562883!3d41.89332197922164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa USN Walking"
          />
        </div>
      </section>
    </div>
  );
}
