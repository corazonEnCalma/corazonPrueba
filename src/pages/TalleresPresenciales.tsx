import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TalleresPresenciales: React.FC = () => {
  const talleres = [
    {
      id: 'mindfulness',
      title: 'Talleres de Mindfulness',
      description: 'Estos talleres son un espacio diseñado para explorar y cultivar la atención plena, habilidad que todos tenemos, pero que a menudo hemos olvidado.',
      path: '/talleres-presenciales/talleres-mindfulness',
    },
    {
      id: 'iniciacion',
      title: 'Curso Iniciación en Mindfulness',
      description: 'Aquí irá la descripción detallada del Curso de Iniciación en Mindfulness. Puedes incluir objetivos, temario, duración, fechas, etc.',
      path: '/talleres-presenciales/iniciacion',
    },
    {
      id: 'profundizar',
      title: 'Curso para Profundizar en el Mindfulness',
      description: 'Aquí irá la descripción detallada del Curso para Profundizar en el Mindfulness. Enfócate en lo que lo diferencia del curso de iniciación y los beneficios de un nivel más avanzado.',
      path: '/talleres-presenciales/profundizar',
    },
    {
      id: 'ambito-laboral',
      title: 'Programa Mindfulness en el ámbito laboral',
      description: 'Aquí irá la descripción detallada del Programa Mindfulness en el ámbito laboral. Destaca cómo puede beneficiar a empresas y empleados, y los resultados esperados.',
      path: '/talleres-presenciales/ambito-laboral',
    },
  ];

  const [activeTab, setActiveTab] = useState(talleres[0].id);

  const activeTaller = talleres.find((taller) => taller.id === activeTab);

  return (
    <div className="px-4 pt-32 pb-16 bg-sky">
      <h1 className="text-4xl font-bold text-center mb-12 text-ocean-dark font-decorative">Talleres <span className="text-corazon-shadow">Presenciales</span></h1>

      <div className="max-w-4xl mx-auto bg-sand-light rounded-lg shadow-xl overflow-hidden">
        <div className="flex border-b border-sky">
          {talleres.map((taller) => (
            <button
              key={taller.id}
              onClick={() => setActiveTab(taller.id)}
              className={`flex-1 py-4 text-center text-lg font-medium transition-colors duration-200
                ${activeTab === taller.id
                  ? 'bg-corazon text-white'
                  : 'bg-sand-pale text-neutral-outline hover:bg-sand-light'}
              `}
            >
              {taller.title}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTaller && (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-corazon">{activeTaller.title}</h2>
              <p className="text-xl leading-relaxed text-neutral-outline mb-6 max-h-60 overflow-y-auto">{activeTaller.description}</p>
              <Link
                to={activeTaller.path}
                className="block w-full bg-corazon text-white px-6 py-3 rounded-md text-xl font-semibold hover:bg-corazon-shadow transition-colors duration-200 text-center"
              >
                Más información
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalleresPresenciales; 