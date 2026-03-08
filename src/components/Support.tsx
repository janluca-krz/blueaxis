import React from 'react';
import { MapPin, List, Eye, HelpCircle, Users, Network } from 'lucide-react';
import { Section } from './Section';

const features = [
  {
    icon: MapPin,
    title: 'Orientierung vor der Auswanderung',
  },
  {
    icon: List,
    title: 'Strukturierung der nächsten Schritte',
  },
  {
    icon: Eye,
    title: 'realistische Einschätzung des Lebens in Griechenland',
  },
  {
    icon: HelpCircle,
    title: 'Unterstützung bei organisatorischen Fragen',
  },
  {
    icon: Users,
    title: 'Begleitung beim Neustart',
  },
    {
    icon: Network,
    title: 'Kontakte & Unterstützung vor Ort',
  }
];

export const Support: React.FC = () => {
  return (
    <Section id="unterstuetzung" background="gray">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Wie wir Sie unterstützen
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xl text-gray-700 leading-relaxed">
          Blue Axis Consulting unterstützt deutschsprachige Menschen dabei, ihren Neustart in Griechenland realistisch zu planen und strukturiert umzusetzen.
        </p>
      </div>
    </Section>
  );
};
