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
                <div className='grid grid-cols-1 grid-rows-5 gap-3 md:grid-cols-2 max-w-6xl mx-auto flex '>
                    <div className='p-2 shadow-xl rounded-xl flex justify-evenly items-center'>
                        <div className='bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center m-1 md:hidden'>
                            <h2 className='text-xl m-2'>
                                1
                            </h2>
                        </div>
                        <div className='md:flex md:justify-center md:items-center'>
                            <h3 className='text-lg'>
                                Unterstützung bei organisatorischen Behördenthemen
                            </h3>
                        </div>
                    </div>

                    <div className='hidden md:flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-x'>
                        <TiltCard className="flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl">
                            <Landmark className="w-12 h-12 text-white" />
                        </TiltCard>
                    </div>

                    <div className='hidden md:flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-x'>
                        <TiltCard className="flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl">
                            <House className="w-12 h-12 text-white" />
                        </TiltCard>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl flex justify-evenly items-center'>
                        <div className='bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center m-1 md:hidden'>
                            <h2 className='text-xl m-2'>
                                2
                            </h2>
                        </div>
                        <h3 className='text-lg'>
                            Orientierung bei Wohnungssuche oder Mietverträgen
                        </h3>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl flex justify-evenly items-center'>
                        <div className='bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center m-1 md:hidden'>
                            <h2 className='text-xl m-2'>
                                3
                            </h2>
                        </div>
                        <h3 className='text-lg'>
                            Kontakte zu Übersetzern, Anwälten oder Steuerberatern
                        </h3>
                    </div>

                    <div className='hidden md:flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                        <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                            <Languages className="w-12 h-12 text-white" />
                        </TiltCard>
                    </div>

                    <div className='hidden md:flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                        <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                            <Wifi className="w-12 h-12 text-white" />
                        </TiltCard>
                    </div>

                    <div className='shadow-xl rounded-xl flex justify-evenly items-center p-2'>
                        <div className='bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center m-1 md:hidden'>
                            <h2 className='text-xl m-2'>
                                4
                            </h2>
                        </div>
                        <h3 className='text-lg'>
                            Unterstützung bei Anmeldung von Strom, Internet oder Versicherungen
                        </h3>
                    </div>

                    <div className='shadow-xl rounded-xl flex justify-evenly items-center p-2'>
                        <div className = 'bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center m-1 md:hidden'>
                            <h2 className='text-xl m-2'>
                                5
                            </h2>
                        </div>

                        <h3 className='text-lg'>
                            Hilfe bei praktischen Fragen rund um Alltag und Integration
                        </h3>
                    </div>

                    <div className='hidden md:flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-x'>
                        <TiltCard className='flex justify-center items-center p-5 bg-blue-600 rounded-xl shadow-xl'>
                                <CircleQuestionMark className="w-12 h-12 text-white" />
                        </TiltCard>
                    </div>
                </div>
            </div>
            <p className='text-m text-gray-700 leading-relaxed p-5'>Je nach Situation können wir passende Ansprechpartner empfehlen oder bei der Organisation unterstützen.</p>
        </Section>
    );
};