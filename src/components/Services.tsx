import React from 'react';
import ServiceCard from './ServiceCard';
import { Heart, Brain, Users } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-sand-pale">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-ocean-dark">Nuestros Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Heart}
            title="Terapia Individual"
            description="Sesiones personalizadas para abordar las necesidades específicas en un ambiente seguro y de confianza."
            iconColor="text-wave-middle"
          />
          
          <ServiceCard 
            icon={Brain}
            title="Corazón en Calma"
            description="Aprende técnicas de atención plena para reducir el estrés y mejorar tu bienestar emocional."
            iconColor="text-ocean-dark"
          />
          
          <ServiceCard 
            icon={Users}
            title="Talleres Grupales"
            description="Participa en sesiones grupales donde compartirás experiencias y aprenderás en comunidad."
            iconColor="text-wave-front"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;