import React from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../assets/talleres-presenciales/IMG_6228.jpg';

const talleres = [
  {
    id: 'mindfulness',
    title: 'Talleres de Mindfulness',
    path: '/talleres-presenciales/talleres-mindfulness',
  },
  {
    id: 'iniciacion',
    title: 'Curso Iniciación en Mindfulness',
    path: '/talleres-presenciales/iniciacion',
  },
  {
    id: 'profundizar',
    title: 'Curso para Profundizar en el Mindfulness',
    path: '/talleres-presenciales/profundizar',
  },
  {
    id: 'ambito-laboral',
    title: 'Programa Mindfulness en el ámbito laboral',
    path: '/talleres-presenciales/ambito-laboral',
  },
];

const CIRCLE_SIZE = 520;
const BUTTON_HEIGHT = 75;
const BUTTON_GAP = 18;
const BUTTON_WIDTH = 400;

const CircleNavTalleres: React.FC = () => {
  // Calcular el top inicial para centrar el grupo de botones
  const totalHeight = talleres.length * BUTTON_HEIGHT + (talleres.length - 1) * BUTTON_GAP;
  const startTop = (CIRCLE_SIZE - totalHeight) / 2;

  return (
    <div
      className="flex flex-col md:flex-row justify-center w-full my-8 md:-ml-40 items-center md:items-start relative"
      style={{ minHeight: CIRCLE_SIZE }}
    >
      {/* Imagen circular */}
      <div
        className="rounded-full border-[9px] border-corazon-shadow shadow-2xl overflow-hidden flex items-center justify-center bg-white mb-8 md:mb-0 w-72 h-72 md:w-[520px] md:h-[520px]"
      >
        <img
          src={imgSrc}
          alt="Taller presencial"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      {/* Botones superpuestos */}
      <div
        className="w-full md:w-auto flex flex-col items-center md:absolute md:top-0"
        style={{
          left: `calc(50% + ${CIRCLE_SIZE / 2 - 110}px)`,
          top: startTop,
          maxWidth: BUTTON_WIDTH,
        }}
      >
        <div className="flex flex-col w-full">
          {talleres.map((taller, idx) => (
            <Link
              key={taller.id}
              to={taller.path}
              className="flex items-center justify-center bg-corazon text-white px-4 md:px-12 py-3 md:py-5 rounded-full shadow-lg text-lg md:text-xl font-semibold hover:bg-corazon-shadow transition-colors duration-200 border-2 border-white text-center w-full md:w-auto md:min-w-[520px] md:max-w-[600px] max-w-full break-words whitespace-normal mb-4 last:mb-0"
              style={{
                height: BUTTON_HEIGHT,
                marginBottom: idx !== talleres.length - 1 ? BUTTON_GAP : 0,
                position: 'relative',
                left: 0,
              }}
            >
              {taller.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleNavTalleres; 