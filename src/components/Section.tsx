import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section id={id} className={`py-20 ${bgStyles[background]} ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
