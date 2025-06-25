import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [tipo, setTipo] = useState('talleres');
  const [subtipo, setSubtipo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cuerpoMensaje = `
      Nombre: ${nombre}
      Apellidos: ${apellidos}
      Teléfono: ${telefono}
      Correo: ${correo}
      Tipo de consulta: ${tipo === 'talleres' ? 'Taller presencial' : 'Formación on-line'}
      ${subtipo ? `Opción elegida: ${subtipo}` : ''}
    `;
    //console.log('Cuerpo del mensaje:', cuerpoMensaje);
    // Aquí podrías enviar el mensaje a un backend o servicio de email
  };

  return (
    <div className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-ocean-dark font-decorative">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-ocean-dark">
            <h2 className="text-2xl font-semibold mb-6 text-ocean-dark font-decorative">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-wave-middle mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-bold text-ocean-dark">Email</h3>
                  <a href="mailto:corazonencalma333@gmail.com" className="text-ocean-dark hover:text-ocean-dark">
                    corazonencalma333@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-wave-middle mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-bold text-ocean-dark">Dirección</h3>
                  <p className="text-ocean-dark">Calle Principal 123, Madrid, España</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-wave-middle mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-bold text-ocean-dark">Teléfono</h3>
                  <a href="tel:+34123456789" className="text-ocean-dark hover:text-ocean-dark">
                    +34 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-ocean-dark font-decorative">Solicita Información</h2>
            <div className="bg-sand-light shadow-md rounded-xl p-6 md:p-8 text-ocean-dark">
              <form className="space-y-4 text-ocean-dark" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="surname"
                    value={apellidos}
                    onChange={e => setApellidos(e.target.value)}
                    className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                    Tipo de consulta
                  </label>
                  <select
                    id="tipo"
                    value={tipo}
                    onChange={e => { setTipo(e.target.value); setSubtipo(''); }}
                    className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                  >
                    <option value="talleres">Talleres presenciales</option>
                    <option value="formacion">Formación on-line</option>
                  </select>
                </div>
                {tipo === 'talleres' && (
                  <div>
                    <label htmlFor="subtipo" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                      Selecciona el taller presencial
                    </label>
                    <select
                      id="subtipo"
                      value={subtipo}
                      onChange={e => setSubtipo(e.target.value)}
                      className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="mindfulness">Talleres de Mindfulness</option>
                      <option value="iniciacion">Curso Iniciación en Mindfulness</option>
                      <option value="profundizar">Curso para Profundizar en el Mindfulness</option>
                      <option value="laboral">Programa Mindfulness en el ámbito laboral</option>
                    </select>
                  </div>
                )}
                {tipo === 'formacion' && (
                  <div>
                    <label htmlFor="subtipo" className="block text-sm font-medium text-ocean-dark mb-1 font-sans">
                      Selecciona el programa on-line
                    </label>
                    <select
                      id="subtipo"
                      value={subtipo}
                      onChange={e => setSubtipo(e.target.value)}
                      className="w-full px-4 py-2 border border-ocean-medium rounded-md focus:ring-ocean-dark focus:border-ocean-dark font-sans bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="salud">Programa Mindfulness para mejorar la salud y calidad de tu vida</option>
                      <option value="infancia">Programa de Mindfulness para la infancia</option>
                      <option value="estres">Programa Mindfulness para reducir el estrés en el ámbito laboral</option>
                    </select>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-ocean-dark text-white py-2 px-4 rounded-md hover:bg-wave-middle transition-colors font-semibold font-sans"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;