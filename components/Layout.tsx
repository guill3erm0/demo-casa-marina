import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre Nosotros', path: '/nosotros' },
  { label: 'La Carta', path: '/carta' },
  { label: 'Opiniones y Mapa', path: '/ubicacion' },
  { label: 'Contacto', path: '/contacto' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-gray-800">
      {/* Top Bar - Contact Info */}
      <div className="bg-wood-dark text-cream py-2 px-4 text-sm hidden md:flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center gap-2"><MapPin size={14} /> C/ M.Cinto Verdaguer, 27, Piera</span>
          <span className="flex items-center gap-2"><Phone size={14} /> 931 31 34 21</span>
        </div>
        <div className="flex space-x-4">
          <span>Abierto de Lunes a Sábado</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-wood shadow-lg border-b-4 border-tile-orange">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-cream tracking-wide" onClick={closeMenu}>
            CASA MARINA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-tile-orange' : 'text-cream hover:text-tile-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cream hover:text-tile-orange transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden bg-wood-dark overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`text-lg font-bold border-b border-wood/50 pb-2 ${
                   location.pathname === item.path ? 'text-tile-orange' : 'text-cream'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-wood text-cream mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-tile-orange">Casa Marina</h3>
              <p className="mb-4 opacity-90">
                La cocina de siempre, hecha con el cariño de toda la vida. 
                Tu rincón gastronómico en el corazón de Piera.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-tile-orange transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-tile-orange transition-colors"><Facebook /></a>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-tile-orange">Horario</h3>
              <ul className="space-y-2 opacity-90">
                <li><span className="font-bold">Lun - Vie:</span> 06:00 - 23:30</li>
                <li><span className="font-bold">Sábado:</span> 08:00 - 23:30</li>
                <li><span className="font-bold">Domingo:</span> Cerrado</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-tile-orange">Contacto</h3>
              <ul className="space-y-2 opacity-90">
                <li className="flex items-center gap-2"><MapPin size={16} /> Carrer M.Cinto Verdaguer, 27, 08784 Piera</li>
                <li className="flex items-center gap-2"><Phone size={16} /> 931 31 34 21</li>
                <li className="flex items-center gap-2">✉️ hola@casamarina.es</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-wood-dark mt-8 pt-8 text-center text-sm opacity-75">
            © {new Date().getFullYear()} Casa Marina. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};