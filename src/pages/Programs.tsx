import React from 'react';
import { Calendar, Users, Brain } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Programa MBSR",
      description: "Reducción de estrés basada en Corazón en Calma",
      duration: "8 semanas",
      icon: Brain
    },
    {
      title: "Corazón en Calma para Empresas",
      description: "Programas adaptados al entorno laboral",
      duration: "4-12 semanas",
      icon: Users
    },
    {
      title: "Retiros de Corazón en Calma",
      description: "Experiencias intensivas de práctica",
      duration: "2-5 días",
      icon: Calendar
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-Corazón en Calma-dark">Nuestros Programas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary-500 mb-4 flex justify-center">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{program.description}</p>
                <p className="text-sm text-primary-500 text-center">Duración: {program.duration}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;