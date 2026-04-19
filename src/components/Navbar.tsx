import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/discipline', label: 'Le Discipline' },
    { path: '/allenamento', label: 'Allenamento' },
    { path: '/benessere', label: 'Benessere & Salute' },
    { path: '/formazione', label: 'Formazione' },
    { path: '/blog', label: 'Blog & News' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/contatti', label: 'Contatti' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#3DA535] to-[#00838F] rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl italic">USN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0D3B5E] font-black text-xl italic leading-tight">
                USN Walking
              </span>
              <span className="text-[#3DA535] text-xs font-semibold">
                Cammina · Cresci · Appartieni
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#3DA535] bg-green-50'
                    : 'text-[#0D3B5E] hover:text-[#3DA535] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/trova-istruttore"
              className="ml-4 px-6 py-2.5 bg-[#FFB300] hover:bg-[#FFA000] text-[#0D3B5E] rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Trova Istruttore</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0D3B5E] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-[#3DA535] bg-green-50'
                    : 'text-[#0D3B5E] hover:text-[#3DA535] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/trova-istruttore"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-6 py-3 bg-[#FFB300] hover:bg-[#FFA000] text-[#0D3B5E] rounded-full font-bold text-center shadow-md"
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Trova Istruttore
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
