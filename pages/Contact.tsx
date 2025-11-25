
import React, { useState, useEffect } from 'react';
import { Page, NavParams } from '../types';
import { Button } from '../components/Button';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: Page, params?: NavParams) => void;
  initialParams?: NavParams;
}

export const Contact: React.FC<ContactProps> = ({ initialParams }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    service: 'education',
    message: ''
  });

  // Effect to handle pre-filling form data from navigation parameters
  useEffect(() => {
    if (initialParams) {
      setFormState(prev => ({
        ...prev,
        service: initialParams.service || prev.service,
        message: initialParams.message || prev.message
      }));
    }
  }, [initialParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Merci ${formState.name} ! Votre demande pour ${formState.dogName} a bien été envoyée. Je vous recontacte rapidement.`);
    setFormState({ name: '', email: '', phone: '', dogName: '', service: 'education', message: '' });
  };

  // Unified styles for consistency
  const labelClassName = "block text-sm font-bold text-primary mb-2 font-display uppercase tracking-wider";
  const inputClassName = "w-full px-4 py-3.5 rounded-lg bg-secondary/30 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-accent/20 outline-none transition-all duration-200 ease-in-out font-sans";
  const selectWrapperClassName = "relative";

  return (
    <div className="min-h-screen bg-secondary">
      <div className="bg-primary text-white py-12 px-4 text-center shadow-lg">
        <h1 className="font-display font-bold text-4xl mb-2">Contactez-moi</h1>
        <p className="text-secondary/90 font-medium">Une question ? Un rendez-vous ? Je suis à votre écoute.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-white/50">
            <h2 className="font-display font-bold text-2xl text-primary mb-8 border-b-2 border-accent pb-2 inline-block">
              Formulaire de contact
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className={labelClassName}>Nom & Prénom <span className="text-accent">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="Ex: Jean Dupont"
                  />
                </div>
                <div className="group">
                   <label htmlFor="dogName" className={labelClassName}>Chien (Nom & Race)</label>
                  <input
                    type="text"
                    id="dogName"
                    name="dogName"
                    value={formState.dogName}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="Ex: Rex, Labrador"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className={labelClassName}>Téléphone <span className="text-accent">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                 <div className="group">
                  <label htmlFor="email" className={labelClassName}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="service" className={labelClassName}>Vous êtes intéressé par :</label>
                <div className={selectWrapperClassName}>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className={`${inputClassName} appearance-none cursor-pointer`}
                  >
                    <option value="education">Éducation / Comportement</option>
                    <option value="promenade">Promenades Collectives</option>
                    <option value="pension">Pension / Garde</option>
                    <option value="autre">Autre demande</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className={labelClassName}>Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`${inputClassName} resize-none`}
                  placeholder="Décrivez brièvement votre besoin ou vos disponibilités..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="accent" fullWidth className="text-lg py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Envoyer ma demande
                </Button>
              </div>
            </form>
          </div>

          {/* Info & Map Section */}
          <div className="flex flex-col gap-8">
            {/* Coordinates Card */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              
              <h3 className="font-display font-bold text-2xl mb-8 text-accent border-b border-white/10 pb-4">
                Mes Coordonnées
              </h3>
              
              <div className="space-y-8">
                <a href="tel:0600000000" className="flex items-start gap-5 hover:text-accent transition-colors group">
                  <div className="bg-white/10 p-3.5 rounded-xl group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 uppercase tracking-wider mb-1 font-bold">Téléphone</span>
                    <span className="text-xl font-bold tracking-wide">06 XX XX XX XX</span>
                  </div>
                </a>
                
                <a href="mailto:contact@canizenah.fr" className="flex items-start gap-5 hover:text-accent transition-colors group">
                   <div className="bg-white/10 p-3.5 rounded-xl group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 uppercase tracking-wider mb-1 font-bold">Email</span>
                    <span className="text-lg break-all">contact@canizenah.fr</span>
                  </div>
                </a>
                
                 <div className="flex items-start gap-5 group">
                   <div className="bg-white/10 p-3.5 rounded-xl shadow-inner">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 uppercase tracking-wider mb-1 font-bold">Localisation</span>
                    <span className="text-lg">Baden, Morbihan (56)<br/><span className="text-sm opacity-75">Intervention à domicile</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Map Placeholder */}
            <div className="bg-white p-4 rounded-2xl shadow-xl flex-grow flex flex-col border border-white/50 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent z-10"></div>
              <h3 className="font-display font-bold text-xl text-primary mb-4 px-2 pt-2">Zone d'intervention</h3>
              <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gray-200">
                {/* Static Map Image Simulation */}
                <img 
                  src="https://picsum.photos/seed/mapbaden/800/600?grayscale" 
                  alt="Carte de Baden et alentours" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 p-6 rounded-xl shadow-2xl text-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105 border border-gray-100">
                    <MapPin size={32} className="mx-auto text-accent mb-2" />
                    <p className="font-display font-bold text-primary text-lg">Rayon d'action</p>
                    <p className="text-sm text-gray-600 mt-1 font-medium">Baden, Arradon, Vannes...</p>
                    <div className="mt-4 text-xs bg-primary text-white py-1.5 px-3 rounded-full font-bold uppercase tracking-wide inline-flex items-center gap-1 shadow-sm">
                       Voir sur Maps
                    </div>
                  </div>
                </div>
                {/* Link to actual Google Maps */}
                <a 
                  href="https://www.google.com/maps/place/Baden" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Ouvrir la carte dans Google Maps"
                ></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
