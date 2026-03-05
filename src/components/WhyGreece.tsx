import React from 'react';
import { Section } from './Section';

export const WhyGreece: React.FC = () => {
  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Warum Griechenland?
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Griechenland ist für viele Menschen ein attraktives Ziel für einen Neustart. Gleichzeitig bringt eine Auswanderung viele organisatorische und praktische Fragen mit sich.
          Blue Axis Consulting hilft dabei, Informationen einzuordnen, Entscheidungen zu strukturieren und den Neustart realistisch vorzubereiten.
        </p>
      </div>
    </Section>
  );
};
