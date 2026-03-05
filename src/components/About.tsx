import React from 'react';
import { Target, FileText, Users } from 'lucide-react';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <Section id="ueber-uns" background="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Über Blue Axis Consulting
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
          Blue Axis Consulting wurde gegründet, um deutschsprachigen Menschen eine realistische Orientierung für ihren Neustart in Griechenland zu bieten.
          Der Fokus liegt auf klaren Informationen, strukturierten Entscheidungen und praktischer Unterstützung.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              realistische Einschätzungen statt Auswander-Versprechen
            </h3>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              strukturierte Orientierung für Ihren Neustart
            </h3>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Beratung speziell für deutschsprachige Auswanderer
            </h3>
          </div>
        </div>
      </div>
    </Section>
  );
};
