import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-Corazón en Calma-dark">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:contacto@Corazón en Calma.es" className="text-gray-600 hover:text-primary-500">
                    contacto@Corazón en Calma.es
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-gray-600">Calle Principal 123, Madrid, España</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <a href="tel:+34123456789" className="text-gray-600 hover:text-primary-500">
                    +34 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;