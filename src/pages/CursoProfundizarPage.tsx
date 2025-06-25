import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { BookOpen, Wind, Leaf, Home, User, Cloud, Heart, Star, Palette, Target } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import img1 from '../assets/talleres-presenciales/curso-profundizar/a03bb98a-b865-45fe-9f5e-1ccf040b8231.jpg';
import img2 from '../assets/talleres-presenciales/curso-profundizar/566203f6-3736-486f-85ba-80b5f63a4a0f.jpg';

const sesiones = [
  {
    title: 'Orígenes del Mindfulness',
    description: 'Explora la historia y las raíces filosóficas del mindfulness.',
    icon: BookOpen
  },
  {
    title: 'Respiración consciente',
    description: 'Profundiza en técnicas de respiración para anclarte al presente.',
    icon: Wind
  },
  {
    title: 'Práctica formal',
    description: 'Meditación sentada, escáner corporal y movimiento consciente.',
    icon: Leaf
  },
  {
    title: 'Práctica cotidiana',
    description: 'Integra la atención plena en las actividades diarias.',
    icon: Home
  },
  {
    title: 'Conciencia de quien soy yo',
    description: 'Indaga en la autopercepción y el autoconocimiento.',
    icon: User
  },
  {
    title: 'Llegar a la calma',
    description: 'Herramientas para cultivar serenidad y equilibrio interior.',
    icon: Cloud
  },
  {
    title: 'Meditación y bienestar',
    description: 'Relación entre la meditación y el bienestar integral.',
    icon: Heart
  },
  {
    title: 'La gratitud',
    description: 'Desarrolla una actitud de gratitud y aprecio en tu vida.',
    icon: Star
  },
  {
    title: 'El arte de meditar',
    description: 'Explora diferentes estilos y enfoques de meditación.',
    icon: Palette
  },
  {
    title: 'Meditaciones y retos',
    description: 'Prácticas avanzadas y desafíos para profundizar tu experiencia.',
    icon: Target
  }
];

const objetivos = [
  'Fortalecer la práctica formal (meditación sentada, escáner corporal, movimiento consciente)',
  'Cultivar una práctica informal más estable y continua en la vida cotidiana',
  'Comprender más profundamente los fundamentos del mindfulness (impermanencia, aceptación, compasión, interdependencia)',
  'Explorar los obstáculos habituales en la práctica y cómo atravesarlos con amabilidad',
  'Generar una comunidad de apoyo y reflexión compartida'
];

const abordaremos = [
  '🧘 Prácticas avanzadas de meditación mindfulness',
  '📖 Estudio de textos o referencias clave (Jon Kabat-Zinn, Thich Nhat Hanh, Tara Brach, entre otros)',
  '💬 Diálogos conscientes y exploración de la experiencia personal',
  'Este curso no busca "hacer más", sino "ser más": más presentes, más conscientes, más compasivos.'
];

const imagenesCarrusel = [
  img1,
  img2,
];

const CursoProfundizarPage: React.FC = () => {
  // Dividir las sesiones en dos columnas
  const mitad = Math.ceil(sesiones.length / 2);
  const sesionesCol1 = sesiones.slice(0, mitad);
  const sesionesCol2 = sesiones.slice(mitad);

  return (
    <div className="px-4 pt-32 pb-16 bg-sky min-h-screen">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 text-ocean-dark font-decorative">Curso para Profundizar en <span className="text-corazon-shadow">Mindfulness</span></h1>
        {/* Carrusel de imágenes */}
        <ImageCarousel images={imagenesCarrusel} altPrefix="Curso Profundizar" />
        {/* Descripción */}
        <section className="mb-10 bg-sand-light rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed text-ocean-dark">
          <p className="mb-4">Este curso está diseñado para quienes ya han iniciado su camino en el mindfulness y desean profundizar en la práctica, el conocimiento y la integración de la atención plena en todos los aspectos de su vida.</p>
        </section>
        {/* Objetivos */}
        <section className="mb-10 bg-corazon rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed">
          <h2 className="text-2xl font-decorative font-semibold text-sand-light mb-4">Objetivos del curso</h2>
          <ul className="list-disc list-inside text-base text-sand-light leading-relaxed">
            {objetivos.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </section>
        {/* Temario visual en dos columnas */}
        <section className="mb-10">
          <h2 className="text-2xl font-decorative font-semibold text-ocean-dark mb-6 text-center">Un recorrido de 10 sesiones para profundizar en tu práctica y autoconocimiento.</h2>
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
                  key={idx}
                  title={sesion.title}
                  description={sesion.description}
                  hideButton={true}
                  fontDecoration="font-decorative"
                  icon={sesion.icon}
                />
              ))}
            </div>
          </div>
        </section>
        {/* ¿Qué abordaremos? */}
        <section className="mb-10 bg-sand-light rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed text-ocean-dark">
          <h2 className="text-2xl font-decorative font-semibold text-ocean-dark mb-4">¿Qué abordaremos?</h2>
          <ul className="list-disc list-inside text-base text-ocean-medium leading-relaxed">
            {abordaremos.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        {/* Mensaje final */}
        <section className="mt-12">
          <p className="text-xl font-semibold text-center text-ocean-dark italic font-decorative">Este curso es una invitación a profundizar en tu ser y en tu práctica.<br/><span className="text-corazon-shadow">Gracias por confiar en este proceso.</span></p>
        </section>
      </div>
    </div>
  );
};

export default CursoProfundizarPage; 