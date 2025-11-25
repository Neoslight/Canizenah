
import React, { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { Page, NavParams } from '../types';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page, params?: NavParams) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentPage, onNavigate, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Accueil' },
    { id: Page.SERVICES, label: 'Services & Tarifs' },
    { id: Page.ABOUT, label: 'Qui suis-je ?' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-text">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavClick(Page.HOME)}
            >
              <span className="font-display font-bold text-2xl tracking-wide group-hover:opacity-90 transition-opacity">
                CANI<span className="text-accent group-hover:text-white transition-colors duration-300">ZEN</span>AH
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-colors duration-300 group py-2 ${
                    currentPage === item.id ? 'text-accent' : 'text-gray-100 hover:text-accent'
                  }`}
                >
                  {item.label}
                  {/* Animated Underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <a 
                href="tel:0600000000" 
                className="flex items-center gap-2 bg-accent hover:bg-[#d4c57b] text-primary px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <Phone size={18} />
                <span>06 XX XX XX XX</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <a 
                href="tel:0600000000" 
                className="flex items-center justify-center bg-accent text-primary p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                aria-label="Appeler"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent focus:outline-none transition-colors duration-200"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#364e61] border-t border-gray-500 animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id ? 'bg-black/20 text-accent' : 'text-white hover:bg-white/10 hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-secondary">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-12 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-xl mb-4 text-accent">Canizenah</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white/90 transition-colors">Intervention sur Baden,<br/>Arradon, Vannes et alentours.</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone size={20} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:0600000000" className="hover:text-peach transition-colors relative">06 XX XX XX XX</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail size={20} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:contact@canizenah.fr" className="hover:text-peach transition-colors">contact@canizenah.fr</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Plan du site</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className="hover:text-peach hover:translate-x-1 transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social / Legal */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Suivez-nous</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                  <Instagram size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Canizenah.<br/>Tous droits réservés.<br/>
                <span className="text-xs">SIRET : 000 000 000 00000</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
