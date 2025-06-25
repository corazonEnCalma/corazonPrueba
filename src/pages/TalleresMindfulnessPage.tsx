import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Heart, Trees, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';


import img1 from '../assets/talleres-presenciales/talleres-mindfulness/img1.jpg'
import img2 from '../assets/talleres-presenciales/talleres-mindfulness/img2.jpg'
import img3 from '../assets/talleres-presenciales/talleres-mindfulness/img3.jpg'


const images = [ img3, img1, img2];

const TalleresMindfulnessPage: React.FC = () => {
  return (
    <div className="px-4 pt-32 pb-16 bg-sky min-h-screen">
      <div className="container mx-auto">
        {/* Carrusel de imágenes */}
        <h1 className="text-4xl font-bold text-center mb-10 text-ocean-dark font-decorative">Talleres de<span className="text-corazon-shadow"> Mindfulness</span></h1>
        <ImageCarousel images={images} altPrefix="Taller presencial" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card: Respiración consciente */}
          <Link to="/contacto" className="block group" aria-label="Ir al formulario de contacto">
            <ServiceCard
              icon={Heart}
              title="Respiración consciente"
              description="Explora el poder ancla de tu respiración para calmar la mente y cultivar la presencia en el momento actual. Aprende técnicas sencillas para integrar en tu día a día."
            />
          </Link>

          {/* Card: Mindfulness en la Naturaleza */}
          <Link to="/contacto" className="block group" aria-label="Ir al formulario de contacto">
            <ServiceCard
              icon={Trees}
              title="Mindfulness en la Naturaleza"
              description="Conéctate con la tranquilidad y vitalidad del entorno natural. Practica la atención plena al aire libre, despertando tus sentidos y reduciendo el estrés."
            />
          </Link>

          {/* Card: Controlar la ansiedad */}
          <Link to="/contacto" className="block group" aria-label="Ir al formulario de contacto">
            <ServiceCard
              icon={ShieldCheck}
              title="Controlar la ansiedad"
              description="Desarrolla herramientas prácticas basadas en mindfulness para reconocer y gestionar los pensamientos y sensaciones asociadas a la ansiedad, encontrando mayor calma."
            />
          </Link>
        </div>
        <div className="text-lg leading-relaxed text-ocean-dark mt-12">
          <p className="mb-4">
            Estos talleres son un espacio diseñado para explorar y cultivar la atención plena, habilidad que todos tenemos, pero que a menudo hemos olvidado.
            En estos talleres aprenderemos:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>A tomar conciencia del momento presente, observar nuestros pensamientos, emociones y sensaciones sin juzgar.</li>
            <li>Conectar con nuestro cuerpo y nuestro entorno.</li>
            <li>Aprender a tener una actitud de compasión, aceptación y presencia.</li>
            <li>Desarrollar herramientas para gestionar el estrés y la ansiedad.</li>
          </ul>
          <p className="mb-4">
            Aquí puedes poner la descripción detallada, el temario, los objetivos, a quién va dirigido, testimonios, un formulario de inscripción o contacto, etc.
          </p>
          <p>
            Este es el espacio para expandir toda la información sobre los Talleres de Mindfulness.
          </p>
          {/* Agrega más contenido detallado aquí */}
        </div>
      </div>
    </div>
  );
};

export default TalleresMindfulnessPage; 