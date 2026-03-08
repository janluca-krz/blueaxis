import React, { useState, useEffect } from 'react';
import {Landmark , House , Languages , Wifi, CircleQuestionMark , } from 'lucide-react';
import { Section } from './Section';
import { TiltCard } from './TiltCard';

export const Network: React.FC = () => {

    return (
        <Section background="gray">
            <div className='bg-gray-60'>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                    Weitere Unterstützung & Netzwerk
                </h2>
            </div>
            <div className='w-100 bg-grey-700 flex justify-center'>
                <div className='grid grid-cols-2 grid-rows-5 gap-3 max-w-6xl mx-auto flex '>
                    <div className='p-5 shadow-xl rounded-xl flex items-center justify-center'>
                            <h3 className='text-xl'>
                            Unterstützung bei organisatorischen Behördenthemen
                        </h3>
                    </div>

                    <TiltCard className="flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl">
                        <Landmark className="w-12 h-12 text-white" />
                    </TiltCard>

                    <TiltCard className="flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl">
                        <House className="w-12 h-12 text-white" />
                    </TiltCard>

                    <div className='p-5 shadow-xl rounded-xl flex items-center justify-center'>
                            <h3 className='text-xl'>
                            Orientierung bei Wohnungssuche oder Mietverträgen
                        </h3>
                    </div>

                    <div className='p-5 shadow-xl rounded-xl flex items-center justify-center'>
                            <h3 className='text-xl'>
                            Kontakte zu Übersetzern, Anwälten oder Steuerberatern
                        </h3>
                    </div>

                    <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                        <Languages className="w-12 h-12 text-white" />
                    </TiltCard>

                    <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                        <Wifi className="w-12 h-12 text-white" />
                    </TiltCard>

                    <div className='p-5 shadow-xl rounded-xl flex items-center justify-center'>
                            <h3 className='text-xl'>
                            Unterstützung bei Anmeldung von Strom, Internet oder Versicherungen
                        </h3>
                    </div>

                    <div className='p-5 shadow-xl rounded-xl flex items-center justify-center'>
                            <h3 className='text-xl'>
                            Hilfe bei praktischen Fragen rund um Alltag und Integration
                        </h3>
                    </div>

                    <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                            <CircleQuestionMark className="w-12 h-12 text-white" />
                    </TiltCard>
                </div>
            </div>
            <p className='text-m text-gray-700 leading-relaxed p-5'>Je nach Situation können wir passende Ansprechpartner empfehlen oder bei der Organisation unterstützen.</p>
        </Section>
    );
};