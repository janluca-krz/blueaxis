import React from 'react';
import { Compass } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-white relative overflow-hidden h-screen">
      {/* Video Background rechts */}
      <video
        className="hidden md:block absolute top-0 right-0 h-full w-[100%] object-cover z-0 translate-x-1/2 translate-y--1"
        src="/bac_hero_animated.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ background: 'transparent' }}
      />
      <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight mb-6">
              Neustart in Griechenland – klar, strukturiert, realistisch
            </h1>
            <p className="text-xl md:text-2xl text-blue-500 mb-8 leading-relaxed">
              Beratung und Orientierung für deutschsprachige Menschen, die nach Griechenland auswandern möchten oder bereits vor Ort leben.
            </p>
            <Button onClick={scrollToContact} variant="secondary">
              Beratung anfragen
            </Button>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="relative h-full w-full">
              <img
                src="/bac_hero.svg"
                alt="Griechische Insellandschaft mit weißen Gebäuden und blauem Meer"
                className="h-auto w-auto bg-transparent absolute top-0 left-0 -z-10 opacity-100 z-100"
                style={{
                  clipPath: 'ellipse(80% 75% at 60% 50%)',
                  background: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
