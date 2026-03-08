import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img className='w-12 h-12' src="./logo.png" alt="" />
              <span className="text-xl font-bold">Blue Axis Consulting</span>
            </div>
            <p className="text-gray-400">
              Realistische Orientierung für Ihren Neustart in Griechenland
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('unterstuetzung')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Wie wir unterstützen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('leistungen')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Leistungen & Preise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ueber-uns')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Blue Axis Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
