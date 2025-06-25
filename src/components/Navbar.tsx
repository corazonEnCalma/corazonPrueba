import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo_cc.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const navbarBg = (isMenuOpen && isHomePage && !isScrolled)
    ? 'bg-black opacity-90'
    : (isHomePage && !isScrolled ? 'bg-transparent' : 'bg-sand-light');
  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg} ${isScrolled ? 'py-2 shadow-sm' : 'py-4'} ${isMenuOpen && isHomePage && !isScrolled ? 'shadow-xl' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logoImage} 
            alt="Corazón en Calma" 
            className={`h-14 w-auto -mr-6 ${isHomePage && !isScrolled ? 'brightness-0 invert' : ''} object-contain`}
          />
          <Link to="/" className={`text-2xl font-decorative font-semibold ${textColor} ml-4`}>Corazón en Calma</Link>
        </div>
        
        <button 
          className={`lg:hidden ${textColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <ul className={`hidden lg:flex space-x-8 ${textColor}`}>
          <li><Link to="/nosotras" className="text-sm font-medium hover:text-corazon transition-colors">Nosotras</Link></li>
          <li><Link to="/talleres-presenciales" className="text-sm font-medium hover:text-corazon transition-colors">Talleres presenciales</Link></li>
          <li><Link to="/formacion-online" className="text-sm font-medium hover:text-corazon transition-colors">Formación on-line</Link></li>
          <li><Link to="/blog" className="text-sm font-medium hover:text-corazon transition-colors">Blog</Link></li>
          <li><Link to="/recursos" className="text-sm font-medium hover:text-corazon transition-colors">Recursos</Link></li>
        </ul>
        
        <Link 
          to="/contacto" 
          className="hidden lg:block bg-corazon hover:bg-corazon-shadow text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
        >
          Solicita Información
        </Link>
      </div>
      
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} ${isMenuOpen && isHomePage && !isScrolled ? 'bg-black opacity-90' : 'bg-sand-light'}`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-3">
            <li><Link to="/nosotras" className={`block text-sm font-medium ${isMenuOpen && isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark'} hover:text-corazon`}>Nosotras</Link></li>
            <li><Link to="/talleres-presenciales" className={`block text-sm font-medium ${isMenuOpen && isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark'} hover:text-corazon`}>Talleres presenciales</Link></li>
            <li><Link to="/formacion-online" className={`block text-sm font-medium ${isMenuOpen && isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark'} hover:text-corazon`}>Formación on-line</Link></li>
            <li><Link to="/blog" className={`block text-sm font-medium ${isMenuOpen && isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark'} hover:text-corazon`}>Blog</Link></li>
            <li><Link to="/recursos" className={`block text-sm font-medium ${isMenuOpen && isHomePage && !isScrolled ? 'text-white' : 'text-ocean-dark'} hover:text-corazon`}>Recursos</Link></li>
            <li>
              <Link 
                to="/contacto" 
                className="block bg-corazon hover:bg-corazon-shadow text-white px-4 py-2 rounded-md text-sm font-medium text-center mt-4 transition-colors duration-300"
              >
                Solicita Información
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;