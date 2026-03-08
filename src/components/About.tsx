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
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
            <div className="row-span-4">
              <img src="/logo.jpeg" alt="" className='rounded-xl'/>
            </div>
            <div className="col-span-2 row-span-2 p-2">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
                Blue Axis Consulting konzentriert sich auf Orientierung, Planung und strukturierte Beratung für deutschsprachige Auswanderer in Griechenland.
              </p>
            </div>
            <div className="col-span-2 row-span-2 col-start-2 row-start-3">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
                Darüber hinaus verfügen wir über ein Netzwerk von Ansprechpartnern und Dienstleistern vor Ort, die bei verschiedenen praktischen Themen unterstützen können.
              </p>
            </div>
        </div>
      </div>
    </Section>
  );
};
