import React from 'react';
import { Video, Calendar, Check } from 'lucide-react';
import { Section } from './Section';
import { Button } from './Button';

export const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="leistungen" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dienstleistungen & Preise
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors duration-200 flex flex-col">
          <div className="mb-6">
            <Video className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Orientierung Griechenland
            </h3>
            <p className="text-gray-600 font-medium mb-6">
              Individuelle Online-Beratung
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Analyse der persönlichen Situation</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">realistische Einschätzung zu Leben und Alltag</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Strukturierung der nächsten Schritte</span>
            </li>
          </ul>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-2">Dauer: 75–90 Minuten</p>
            <p className="text-4xl font-bold text-gray-900 mb-6">249 €</p>
            <Button onClick={scrollToContact} className="w-full">
              Termin anfragen
            </Button>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl flex flex-col">
          <div className="mb-6">
            <Calendar className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Begleitung „Ankommen & Leben in Griechenland"
            </h3>
            <p className="text-blue-100 font-medium mb-6">
              Mehrwöchige Unterstützung
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
              <span>strukturierte Begleitung</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
              <span>regelmäßige Gespräche</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
              <span>Unterstützung bei Organisation und Orientierung</span>
            </li>
          </ul>

          <div className="border-t border-blue-500 pt-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg">4 Wochen</span>
                <span className="text-2xl font-bold">1.490 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">8 Wochen</span>
                <span className="text-2xl font-bold">2.390 €</span>
              </div>
            </div>
            <Button onClick={scrollToContact} variant="secondary" className="w-full">
              Anfrage stellen
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
