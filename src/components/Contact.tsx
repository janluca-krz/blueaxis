import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Section } from './Section';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="kontakt" background="gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Kontakt
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12">
          Wenn Sie eine Auswanderung nach Griechenland planen oder bereits vor Ort leben und Orientierung suchen, können Sie hier eine Anfrage stellen.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          <Button type="submit" className="w-full flex items-center justify-center">
            <Send className="w-5 h-5 mr-2" />
            Anfrage senden
          </Button>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Nach Ihrer Anfrage prüfen wir kurz, ob unsere Beratung zu Ihrer Situation passt.</p>
          </div>
        </form>
      </div>
    </Section>
  );
};
