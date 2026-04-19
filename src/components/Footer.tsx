import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D3B5E] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3DA535] to-[#00838F] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg italic">USN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg italic">
                  USN Walking
                </span>
                <span className="text-[#3DA535] text-xs">
                  Cammina · Cresci · Appartieni
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Il comitato walking dell'Unione Sportiva Acli per la promozione dello sport del cammino in tutte le sue forme.
            </p>
            <div className="inline-flex items-center px-3 py-2 bg-[#FFB300] text-[#0D3B5E] rounded-md text-xs font-bold">
              Ente riconosciuto dal CONI
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Le Discipline</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/discipline/nordic-walking"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Nordic Walking
                </Link>
              </li>
              <li>
                <Link
                  to="/discipline/camminata-sportiva"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Camminata Sportiva
                </Link>
              </li>
              <li>
                <Link
                  to="/discipline/trekking-sportivo"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Lunghi Cammini e Trekking
                </Link>
              </li>
              <li>
                <Link
                  to="/discipline/walking-adattato"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Walking Adattato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/allenamento"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Allenamento
                </Link>
              </li>
              <li>
                <Link
                  to="/benessere"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Benessere & Salute
                </Link>
              </li>
              <li>
                <Link
                  to="/trova-istruttore"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Trova Istruttore
                </Link>
              </li>
              <li>
                <Link
                  to="/formazione"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Formazione
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-300 hover:text-[#3DA535] transition-colors"
                >
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@usnwalking.it" className="hover:text-[#3DA535]">
                  info@usnwalking.it
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+390612345678" className="hover:text-[#3DA535]">
                  +39 06 1234 5678
                </a>
              </li>
            </ul>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#3DA535] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} USN Walking - Unione Sportiva Acli. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Ente di Promozione Sportiva riconosciuto dal CONI
          </p>
        </div>
      </div>
    </footer>
  );
}
