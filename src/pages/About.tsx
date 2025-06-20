import React, { useState } from 'react';
import gemaImage from '../assets/gema.jpg';
import chusImage from '../assets/chus.jpg'

const About: React.FC = () => {
  const [expandedGema, setExpandedGema] = useState(false);
  const [expandedChus, setExpandedChus] = useState(false);

  return (
    <div className="bg-sky pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="font-decorative text-ocean-dark">Sobre </span>
          <span className="font-decorative text-corazon-shadow">Nosotras</span>
        </h1>
        <div className="text-center mb-12">
          <p className="text-xl text-ocean-dark">
            <span className="text-corazon-shadow text-font-decoration">Corazón en Calma</span> surge del interés de las fundadoras por el desarrollo personal. Somos dos amigas, nos une una gran amistad y el interés por la enseñanza y difusión del mindfulness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ordenamos las cards según cuál está expandida */}
          {[
            {
              isExpanded: expandedGema,
              setExpanded: setExpandedGema,
              firstName: "Gema",
              lastName: "Alhambra",
              image: gemaImage,
              shortDescription: "Doctora en Psicología, experta en Mindfulness e Inteligencia Emocional.",
              content: (
                <>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Mi carrera profesional se ha desarrollado a lo largo de estos 30 años en el área de la Psicología Clínica y de la docencia, impartiendo cursos y talleres de Psicología aplicada.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    En la actualidad divido mi trabajo en estas áreas:
                  </p>
                  <ol className="list-decimal list-inside space-y-4 mb-6 pl-4 text-ocean-dark">
                    <li className="text-lg">
                      <span className="font-semibold">Docencia Universitaria:</span> Profesora en el departamento de Psicología en la Facultad de Educación de Ciudad Real, en la Universidad de Castilla-La Mancha.
                    </li>
                    <li className="text-lg">
                      <span className="font-semibold">Práctica Clínica:</span> Dirijo el centro Alhambra Psicología en Ciudad Real, especializado en terapia de familia, infancia y adolescencia, y tratamiento para la ansiedad en adultos.
                    </li>
                    <li className="text-lg">
                      <span className="font-semibold">Formación y Divulgación:</span> Impartición de charlas y talleres sobre Mindfulness e Inteligencia Emocional para docentes, sanitarios, empresas y organizaciones, y público general.
                    </li>
                  </ol>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Siempre he tenido interés en conocerme y conocer cómo funciona el ser humano aplicando la Psicología. Así, hace más de 10 años comencé a formarme en Mindfulness, primero para adoptarlo en mi vida y después para aplicarlo en la terapia con mis pacientes.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Tanto en la consulta, como en mi vida personal observo la importancia de la salud en todas las áreas de nuestro cuerpo: física, emocional, mental y espiritual; cómo están conectadas y la necesidad de lograr un estado de equilibrio entre cada una de ellas.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    La ciencia ha demostrado que la práctica de Mindfulness nos ayuda a lograr este equilibrio y mejorar la salud y el bienestar.
                  </p>
                  <p className="text-lg text-ocean-dark">
                    Me siento muy afortunada de haber comenzado con Chus el Proyecto de Corazón en Calma, y con mucha ilusión de que podamos contribuir para que los beneficios del Mindfulness llegue a muchas personas y que esta experiencia transformadora pueda aportar a cada una de ellas un beneficio para su desarrollo personal.
                  </p>
                </>
              )
            },
            {
              isExpanded: expandedChus,
              setExpanded: setExpandedChus,
              firstName: "Chus",
              lastName: "Arenas",
              image: chusImage,
              shortDescription: "Licenciada en Derecho, experta en Mindfulness y desarrollo personal, con más de 26 años de experiencia en el trabajo con personas.",
              content: (
                <>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Soy licenciada en Derecho por la Universidad de Extremadura. He trabajado para la Administración Pública desde hace 26 años. Desde el inicio de mi vida profesional he trabajado con colectivos desfavorecidos, personas con dificultades sociales, familiares y económicas.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    En mi interés por ayudarlas comenzó mi pasión por el desarrollo personal como vía para alcanzar un estado de conciencia que te lleve a la calma y a la paz interior, permitiendo con ello, mejorar nuestra salud y nuestra calidad de vida.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Me he formado en Inteligencia emocional, Mindfulness y Coaching en la Universidad Internacional de Andalucía, Mindfulness: guía práctica para una educación transformadora y Mindfulness y compasión en la UNED, así como en Eneagrama, Cábala, Reiki y Chakras.
                  </p>
                  <p className="text-lg mb-4 text-ocean-dark">
                    Durante estos años de formación en España y los viajes con prácticas de meditación en la India y Nepal, he podido constatar que estos métodos milenarios funcionan y están aquí para ayudarnos a aprender a enfocarnos en el momento presente y vital, para mejorar como personas, y sentirnos bien en las relaciones con uno mismo y con los demás.
                  </p>
                  <p className="text-lg text-ocean-dark">
                    Esta formación la enfoqué primero al autoconocimiento, y después para la divulgación de los conocimientos que he adquirido durante mis viajes y mi vida. En conclusión, con este aprendizaje he entendido que juntos aprendemos todos, porque sólo en la relación con los otros podemos alcanzar algo de la sabiduría que cada uno llevamos dentro.
                  </p>
                </>
              )
            }
          ]
          .sort((a, b) => (b.isExpanded ? 1 : 0) - (a.isExpanded ? 1 : 0))
          .map((person) => (
            <div 
              key={`${person.firstName}-${person.lastName}`}
              className={`bg-sand-light rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${expandedGema || expandedChus ? 'md:col-span-2' : ''}`}
            >
              <div 
                className="cursor-pointer p-6"
                onClick={() => person.setExpanded(!person.isExpanded)}
              >
                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                    <img
                      src={person.image}
                      alt={`${person.firstName} ${person.lastName}`}
                      className="w-full h-full object-cover object-center transform scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    <span className="text-ocean-dark">{person.firstName}</span>
                    <span className="text-corazon-shadow"> {person.lastName}</span>
                  </h3>
                  <p className="text-lg text-center mb-4 text-ocean-dark">
                    {person.shortDescription}
                  </p>
                  <button 
                    className="text-corazon-shadow hover:text-ocean-medium font-medium flex items-center gap-2"
                  >
                    {person.isExpanded ? 'Leer menos' : 'Conocer más'}
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${person.isExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {person.isExpanded && (
                <div className="p-6 pt-0 animate-fadeIn">
                  <hr className="mb-6" />
                  <div className="prose max-w-none text-ocean-dark">
                    {person.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;