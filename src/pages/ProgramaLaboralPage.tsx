import ServiceCard from '../components/ServiceCard';
import { Briefcase, Target, Smile, HeartHandshake, MessageCircle, Lightbulb, Apple } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import img1 from '../assets/talleres-presenciales/curso-inciacion/img1.jpg';
import img2 from '../assets/talleres-presenciales/curso-inciacion/img2.jpg';

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

const images: string[] = [img1, img2];

const ProgramaLaboralPage: React.FC = () => {
  // Dividir las sesiones en dos columnas y una última aparte
  const sesionesCol1 = sesiones.slice(0, 3);
  const sesionesCol2 = sesiones.slice(3, 6);
  const ultimaSesion = sesiones[6];

  return (
    <div className="px-4 pt-32 pb-16 bg-sky min-h-screen">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 text-ocean-dark font-decorative">Programa Mindfulness en el <span className="text-corazon-shadow">ámbito laboral</span></h1>
        {/* Carrusel de imágenes */}
        <ImageCarousel images={images} altPrefix="Programa Laboral" />
        {/* Objetivo general, ¿Por qué mindfulness en el trabajo? y cita */}
        <section className="bg-sand-light rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed text-ocean-dark mb-12">
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
          <blockquote className="italic text-ocean-dark font-decorative border-l-4 border-corazon pl-4 mt-4 text-center text-xl">“Más atención, menos estrés, mejores resultados”</blockquote>
        </section>
        {/* Contenedor de sesiones */}
        <section className="bg-ocean-light rounded-lg shadow-lg p-6 xl:p-12 mb-16 flex flex-col items-center w-full">
          <h2 className="text-2xl text-sand-light font-decorative text-ocean-dark mb-10 text-center font-decorative">Un recorrido de 7 sesiones para transformar tu entorno laboral.</h2>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                {sesionesCol1.map((sesion, idx) => (
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
              <div className="flex flex-col gap-6">
                {sesionesCol2.map((sesion, idx) => (
                  <ServiceCard
                    key={idx + 3}
                    title={sesion.title}
                    description={sesion.description}
                    hideButton={true}
                    fontDecoration="font-decorative"
                    icon={sesion.icon}
                  />
                ))}
              </div>
            </div>
            {/* Última sesión ocupando ambas columnas */}
            <div className="mt-8">
              <ServiceCard
                key={6}
                title={ultimaSesion.title}
                description={ultimaSesion.description}
                hideButton={true}
                fontDecoration="font-decorative"
                icon={ultimaSesion.icon}
              />
            </div>
          </div>
        </section>
        {/* Mensaje final */}
        <section className="mt-12">
          <p className="text-xl font-semibold text-center text-ocean-dark italic font-decorative">El bienestar laboral es posible.<br/><span className="text-corazon-shadow">Comienza el cambio desde tu empresa.</span></p>
        </section>
      </div>
    </div>
  );
};

export default ProgramaLaboralPage; 