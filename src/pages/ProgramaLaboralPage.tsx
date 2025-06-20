import React, { useRef, useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Briefcase, Target, Smile, HeartHandshake, MessageCircle, Lightbulb, Apple } from 'lucide-react';

const sesiones = [
  {
    title: 'Introducción al Mindfulness aplicado al entorno laboral',
    description: 'Descubre los fundamentos del mindfulness y su impacto positivo en el trabajo.',
    icon: Briefcase
  },
  {
    title: 'Concentración y capacidad de adaptación',
    description: 'Mejora tu enfoque y aprende a adaptarte a los cambios y retos laborales.',
    icon: Target
  },
  {
    title: 'Regulación emocional',
    description: 'Desarrolla habilidades para gestionar tus emociones en situaciones de presión.',
    icon: Smile
  },
  {
    title: 'Gestión del estrés en el ámbito laboral',
    description: 'Herramientas prácticas para reducir el estrés y prevenir el agotamiento (burnout).',
    icon: HeartHandshake
  },
  {
    title: 'Comunicación efectiva y relaciones saludables',
    description: 'Fomenta la empatía, la escucha activa y relaciones laborales positivas.',
    icon: MessageCircle
  },
  {
    title: 'Solución de problemas y toma de decisiones',
    description: 'Desarrolla claridad mental y creatividad para resolver desafíos laborales.',
    icon: Lightbulb
  },
  {
    title: 'Hábitos saludables',
    description: 'Integra rutinas de bienestar físico y mental en tu día a día laboral.',
    icon: Apple
  }
];

const ProgramaLaboralPage: React.FC = () => {
  const izquierdaRef = useRef<HTMLDivElement>(null);
  const derechaRef = useRef<HTMLDivElement>(null);
  const [alturaIzquierda, setAlturaIzquierda] = useState<number | undefined>(undefined);

  useEffect(() => {
    function syncHeight() {
      if (izquierdaRef.current) {
        setAlturaIzquierda(izquierdaRef.current.offsetHeight);
      }
    }
    syncHeight();
    window.addEventListener('resize', syncHeight);
    return () => window.removeEventListener('resize', syncHeight);
  }, []);

  return (
    <div className="px-4 pt-32 pb-16 bg-sky min-h-screen">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 text-ocean-dark font-decorative">Programa Mindfulness en el <span className="text-corazon-shadow">ámbito laboral</span></h1>
        {/* Temario visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-25 mb-16 items-start">
          {/* Columna izquierda: Objetivo, destinatarios y beneficios */}
          <section
            id="columna-izquierda"
            ref={izquierdaRef}
            className="bg-sand-light rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed text-ocean-dark h-fit"
          >
            <h2 className="text-2xl font-decorative font-semibold text-ocean-dark mb-2">Objetivo general</h2>
            <p className="mb-4 text-ocean-medium text-lg">
              Implementar un programa de Mindfulness en el entorno laboral con el fin de mejorar el bienestar personal, reducir el estrés y aumentar la productividad, a través del desarrollo de habilidades de atención plena y gestión emocional.
            </p>
            <h3 className="text-2xl font-decorative font-semibold text-ocean-dark mb-2">¿Por qué mindfulness en el trabajo?</h3>
            <ul className="list-disc list-inside text-base text-ocean-medium leading-relaxed mb-4">
              <li>Alta concentración y capacidad de adaptación</li>
              <li>Gestión del estrés y la presión constante</li>
              <li>Habilidades de comunicación</li>
              <li>Toma de decisiones conscientes y ágiles</li>
            </ul>
            <p className="mb-4 text-ocean-medium text-lg">
              El Mindfulness ofrece herramientas prácticas y científicamente validadas para responder a estos desafíos de forma saludable y sostenible, aumentando la concentración, creatividad y productividad. Así, se reduce el estrés y el agotamiento (burnout), se logra mayor claridad mental y mejora el clima laboral y las relaciones interpersonales.
            </p>
            <blockquote className="italic text-ocean-dark font-decorative border-l-4 border-corazon pl-4 mt-4">“Más atención, menos estrés, mejores resultados”</blockquote>
          </section>
          {/* Columna derecha: Temario con scroll propio */}
          <section
            id="columna-derecha"
            ref={derechaRef}
            className="bg-ocean-light rounded-lg shadow-lg p-6 xl:p-10 flex flex-col items-center w-full h-full overflow-y-auto"
            style={alturaIzquierda ? { maxHeight: alturaIzquierda } : {}}
          >
            <h2 className="text-2xl text-sand-light font-decorative text-ocean-dark mb-6 text-center">Un recorrido de 7 sesiones para transformar tu entorno laboral.</h2>
            <div className="flex flex-col gap-6 overflow-y-auto pr-2 w-full custom-scrollbar h-full">
              {sesiones.map((sesion, idx) => (
                <ServiceCard
                  key={idx}
                  title={sesion.title}
                  description={sesion.description}
                  hideButton={true}
                  fontDecoration="font-decorative"
                  icon={sesion.icon}
                />
              ))}
            </div>
          </section>
        </div>
        {/* Mensaje final */}
        <section className="mt-12">
          <p className="text-xl font-semibold text-center text-ocean-dark italic font-decorative">El bienestar laboral es posible.<br/><span className="text-corazon-shadow">Comienza el cambio desde tu empresa.</span></p>
        </section>
      </div>
    </div>
  );
};

export default ProgramaLaboralPage; 