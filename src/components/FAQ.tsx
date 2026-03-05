import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';

const faqs = [
  {
    question: 'Ist die Beratung auch für Menschen geeignet, die noch ganz am Anfang stehen?',
    answer: 'Ja, unsere Beratung richtet sich ausdrücklich auch an Menschen, die am Anfang ihrer Überlegungen stehen. Wir helfen Ihnen dabei, eine realistische Einschätzung zu entwickeln und die nächsten Schritte strukturiert zu planen.'
  },
  {
    question: 'Unterstützen Sie auch Menschen, die bereits in Griechenland leben?',
    answer: 'Ja, wir unterstützen auch Menschen, die bereits in Griechenland leben und Orientierung bei organisatorischen oder praktischen Fragen suchen. Unsere Beratung kann Ihnen helfen, sich besser zurechtzufinden und Herausforderungen strukturiert anzugehen.'
  },
  {
    question: 'Erledigen Sie Behördengänge für Kunden?',
    answer: 'Nein, wir erledigen keine Behördengänge. Unsere Aufgabe ist es, Sie zu beraten, zu orientieren und Ihnen dabei zu helfen, die notwendigen Schritte selbstständig zu gehen. Wir bereiten Sie darauf vor, welche Schritte nötig sind und was Sie beachten sollten.'
  },
  {
    question: 'Ersetzen Sie einen Steuerberater oder Rechtsanwalt?',
    answer: 'Nein, wir ersetzen keine Fachberater wie Steuerberater oder Rechtsanwälte. Unsere Beratung konzentriert sich auf praktische Orientierung und Strukturierung Ihres Neustarts. Bei spezifischen rechtlichen oder steuerlichen Fragen verweisen wir auf entsprechende Fachexperten.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Häufige Fragen
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
