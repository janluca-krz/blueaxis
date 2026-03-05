import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './Section';

const audiences = [
  'Menschen, die eine Auswanderung nach Griechenland planen',
  'deutschsprachige Auswanderer in Griechenland',
  'Personen, die Orientierung bei organisatorischen Fragen suchen',
  'Menschen, die realistische Einschätzungen statt Auswander-Versprechen möchten',
];

export const TargetAudience: React.FC = () => {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Für wen unsere Beratung geeignet ist
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800">{audience}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
