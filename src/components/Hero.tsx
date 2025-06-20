import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="nosotras" className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center text-white relative">
      {/* Darker overlay when not scrolled */}
      <div className={`absolute inset-0 bg-black opacity-50 pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-0' : ''}`}></div>
      <div className="container mx-auto px-4 text-center">
        <div className={`max-w-2xl mx-auto relative z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : ''}`}>
          {/*<h1 className="text-4xl text-ocean- hidden md:block md:text-5xl font-bold font-decorative mb-6 leading-tight">Corazón en Calma</h1>*/}
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Mindfulness o atención plena es la capacidad de estar plenamente presente en el aquí y ahora, con una actitud abierta y amable. Es una práctica basada en la meditación, pero también una forma de vivir, más conscientes y conectados.
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed italic">
          "No puedes detener las olas, pero puedes aprender a surfear."
          <br/>
          — Jon Kabat-Zinn
          </p>
          <a 
            href="/nosotras" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 transform hover:scale-105"
          >
            Conocer más sobre nosotras
          </a>

          {/* Scroll indicator text */}
          <div className={`mt-16 text-white text-lg font-medium animate-bounce transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            Desliza hacia abajo para ver más
          </div>

          {/* Scroll indicator arrow */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-8 w-8 text-white mx-auto mt-4 animate-bounce transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      {/* Radial light effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;