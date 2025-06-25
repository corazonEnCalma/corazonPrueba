import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import logoImage from '../assets/logo_cc.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sand-light py-5 md:py-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:h-16 gap-2 md:gap-0 text-center md:text-left">
          {/* Logo y título */}
          <div className="flex items-center justify-center md:justify-start mb-1 md:mb-0">
            <img 
              src={logoImage} 
              alt="Corazón en Calma" 
              className="h-8 w-auto -mr-3"
            />
            <span className="text-lg md:text-xl font-decorative font-semibold text-ocean-dark ml-2">Corazón en Calma</span>
          </div>

          {/* Contacto */}
          <div className="flex md:hidden lg:flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 text-xs md:text-[0.95rem] text-ocean-medium mb-1 md:mb-0">
            <div className="flex items-center">
              <Mail size={15} className="text-wave-middle mr-1" />
              <a href="mailto:corazonencalma333@gmail.com" className="hover:text-corazon transition-colors whitespace-nowrap">corazonencalma333@gmail.com</a>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <MapPin size={15} className="text-wave-middle mr-1" />
              <span>Calle Principal 123, Madrid</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Phone size={15} className="text-wave-middle mr-1" />
              <a href="tel:+34123456789" className="hover:text-corazon transition-colors">+34 123 456 789</a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end space-x-5 mt-3 md:mt-0">
            <a href="https://instagram.com/corazonncalma" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-ocean-dark w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a href="https://facebook.com/corazonncalma" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-ocean-dark w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a href="https://youtube.com/@CorazonenCalma" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-ocean-dark w-6 h-6 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;