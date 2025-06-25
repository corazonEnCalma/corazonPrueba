import ServiceCard from '../components/ServiceCard';
import { Brain, Heart, Users, Feather, Smile, CheckCircle, Droplet } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import img1 from '../assets/talleres-presenciales/curso-inciacion/img1.jpg';
import img2 from '../assets/talleres-presenciales/curso-inciacion/img2.jpg';

const sesiones = [
  {
    title: 'Mente de principiante',
    description: 'Abre tu mente a nuevas experiencias y aprende a observar sin expectativas.',
    icon: Brain
  },
  {
    title: 'Sin juzgar',
    description: 'Desarrolla la capacidad de observar tus pensamientos y emociones sin etiquetarlos.',
    icon: Heart
  },
  {
    title: 'No forzar. Paciencia',
    description: 'Aprende a dejar que las cosas sigan su curso natural, cultivando la paciencia.',
    icon: Feather
  },
  {
    title: 'Respeto. Autocompasión',
    description: 'Fomenta el respeto hacia ti y los demás, y practica la autocompasión.',
    icon: Users
  },
  {
    title: 'Confianza en ti',
    description: 'Fortalece la confianza en tus capacidades y en el proceso de mindfulness.',
    icon: Smile
  },
  {
    title: 'Aceptación',
    description: 'Aprende a aceptar la experiencia tal y como es, sin resistencia.',
    icon: CheckCircle
  },
  {
    title: 'Soltar',
    description: 'Descubre cómo dejar ir lo que no te sirve y avanzar con ligereza.',
    icon: Droplet
  }
];

const CursoIniciacionPage: React.FC = () => {

  return (
    <div className="px-4 pt-32 pb-16 bg-sky min-h-screen">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 text-ocean-dark font-decorative">Curso Iniciación en <span className="text-corazon-shadow">Mindfulness</span></h1>
        {/* Carrusel de imágenes */}
        <ImageCarousel images={[img1, img2]} altPrefix="Curso Iniciación" />
        {/* Descripción */}
        <section className="bg-sand-light rounded-lg shadow-md p-6 xl:p-10 text-lg leading-relaxed text-ocean-dark mb-12">
          <h2 className="text-2xl font-decorative font-semibold text-ocean-dark mb-2">¿A quién va dirigido este curso?</h2>
          <p className="mb-2 text-ocean-medium text-lg">A cualquier persona que quiera:</p>
          <ul className="list-disc list-inside text-base text-ocean-medium leading-relaxed mb-4">
            <li>Comenzar a meditar y no sabe por dónde empezar</li>
            <li>Sentir más calma y claridad mental</li>
            <li>Incorporar hábitos de bienestar emocional en su vida diaria</li>
            <li>Mejorar su concentración, las relaciones sociales y la salud mental</li>
          </ul>
          <h3 className="text-2xl font-decorative font-semibold text-ocean-dark mb-2">¿Qué harás en el curso?</h3>
          <p className="mb-2 text-ocean-medium text-lg">Es un curso práctico, a lo largo de las sesiones aprenderás actividades y ejercicios prácticos para integrar el mindfulness en tu día a día:</p>
          <ul className="list-disc list-inside text-base text-ocean-medium leading-relaxed">
            <li>Ejercicios guiados de respiración y meditación</li>
            <li>Prácticas de atención al cuerpo (escáner corporal, movimiento consciente)</li>
            <li>Espacios de reflexión y diálogo</li>
          </ul>
        </section>
        {/* Contenedor de sesiones */}
        <section className="bg-ocean-light rounded-lg shadow-lg p-6 xl:p-12 mb-16 flex flex-col items-center w-full">
          <h2 className="text-2xl text-sand-light font-decorative text-ocean-dark mb-10 text-center font-decorative">Un recorrido de 7 sesiones para transformar tu vida y cultivar una mente en calma.</h2>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                {sesiones.slice(0, 3).map((sesion, idx) => (
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
                {sesiones.slice(3, 6).map((sesion, idx) => (
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
                title={sesiones[6].title}
                description={sesiones[6].description}
                hideButton={true}
                fontDecoration="font-decorative"
                icon={sesiones[6].icon}
              />
            </div>
          </div>
        </section>
        {/* Mensaje final */}
        <section className="mt-12">
          <p className="text-xl font-semibold text-center text-ocean-dark italic font-decorative">Este es solo el inicio de un viaje hacia una vida más consciente.<br/><span className="text-corazon-shadow">Gracias por estar aquí.</span></p>
        </section>
      </div>
    </div>
  );
};

export default CursoIniciacionPage; 