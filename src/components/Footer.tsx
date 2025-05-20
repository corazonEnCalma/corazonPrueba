import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '../assets/logo_cc.png';


const Footer: React.FC = () => {
  return (
    <footer className="bg-sand-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
            <img 
            src={logoImage} 
            alt="Corazón en Calma" 
            className={`h-8 w-auto -mr-6 'lg:brightness-0 lg:invert'`}
          />              
          <span className="text-xl font-semibold text-ocean-dark ml-4">Corazón en Calma</span>
            </div>
            <p className="text-sm text-ocean-medium mb-4">
              Tu espacio para el bienestar mental
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-ocean-dark mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/programas" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Terapia Individual</Link></li>
              <li><Link to="/programas" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Corazón en Calma</Link></li>
              <li><Link to="/programas" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Talleres Grupales</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-ocean-dark mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link to="/nosotras" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Sobre nosotras</Link></li>
              <li><Link to="/programas" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Programas</Link></li>
              <li><Link to="/contacto" className="text-sm text-ocean-medium hover:text-corazon transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-ocean-dark mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="text-wave-middle mt-1 mr-2 flex-shrink-0" />
                <a href="mailto:contacto@Corazón en Calma.es" className="text-sm text-ocean-medium hover:text-corazon transition-colors">contacto@Corazón en Calma.es</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-wave-middle mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-ocean-medium">Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-wave-middle mt-1 mr-2 flex-shrink-0" />
                <a href="tel:+34123456789" className="text-sm text-ocean-medium hover:text-corazon transition-colors">+34 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ocean-light mt-10 pt-6 text-center">
          <p className="text-sm text-neutral-outline">
            © {new Date().getFullYear()} Corazón en Calma. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;