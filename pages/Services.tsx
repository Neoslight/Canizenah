
import React from 'react';
import { Page, NavParams } from '../types';
import { Button } from '../components/Button';
import { Calendar } from '../components/Calendar';
import { Check, Info, Calendar as CalendarIcon } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page, params?: NavParams) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {

  const handlePensionDateSelect = (date: Date) => {
    const formattedDate = date.toLocaleDateString('fr-FR');
    onNavigate(Page.CONTACT, {
      service: 'pension',
      date: date,
      message: `Bonjour, je suis intéressé(e) par une place en pension pour la date du ${formattedDate}.`
    });
  };

  return (
    <div className="bg-secondary min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center px-4 shadow-md">
        <h1 className="font-display font-bold text-4xl mb-4 animate-fade-in-down">Services & Tarifs</h1>
        <p className="max-w-2xl mx-auto text-secondary/90 text-lg">Des solutions transparentes et adaptées à vos besoins.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 gap-12">

          {/* Service 1: Education */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="md:w-1/3 bg-gray-200 min-h-[300px] overflow-hidden">
              <img src="https://picsum.photos/seed/dogtraining/600/800" alt="Education" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-[#364e61] transition-colors">Éducation Canine (Individuel)</h2>
                <p className="text-gray-600 mb-6">Pour chiots et chiens adultes. Nous travaillons sur les bases (assis, couché, pas bouger), le rappel, la marche en laisse et la gestion des comportements gênants.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-willow" />
                    <span>Bilan comportemental complet</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-willow" />
                    <span>À domicile ou en extérieur</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-willow" />
                    <span>Méthodes respectueuses</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-willow" />
                    <span>Suivi personnalisé</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <p className="text-sm text-gray-500">Séance unique (1h)</p>
                  <p className="font-display font-bold text-2xl text-primary">50€</p>
                </div>
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <p className="text-sm text-gray-500">Forfait 5 séances</p>
                  <p className="font-display font-bold text-2xl text-primary">230€</p>
                </div>
                <Button onClick={() => onNavigate(Page.CONTACT, { service: 'education' })} variant="primary">Réserver</Button>
              </div>
            </div>
          </div>

          {/* Service 2: Promenades - Willow Tint */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="md:w-1/3 bg-gray-200 min-h-[300px] md:order-2 overflow-hidden">
              <img src="https://picsum.photos/seed/doggroup/600/800" alt="Promenades" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-between md:order-1 bg-willow/10">
              <div>
                <h2 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-[#364e61] transition-colors">Promenades Collectives</h2>
                <p className="text-gray-600 mb-6">Des balades encadrées sur les sentiers côtiers ou en forêt autour de Baden. Idéal pour la socialisation et pour que votre chien apprenne les codes canins tout en se dépensant.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-700">
                    <Info size={18} className="text-primary mt-1" />
                    <span>Groupes harmonieux constitués selon les caractères.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Info size={18} className="text-primary mt-1" />
                    <span>Durée : environ 1h30 de marche.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200/50 pt-6 mt-auto">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <p className="text-sm text-gray-500">La balade</p>
                  <p className="font-display font-bold text-2xl text-primary">20€</p>
                </div>
                 <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <p className="text-sm text-gray-500">Carte 10 balades</p>
                  <p className="font-display font-bold text-2xl text-primary">180€</p>
                </div>
                <Button onClick={() => onNavigate(Page.CONTACT, { service: 'promenade' })} variant="primary">M'inscrire</Button>
              </div>
            </div>
          </div>

          {/* Service 3: Pension */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-200 min-h-[300px] overflow-hidden">
                <img src="https://picsum.photos/seed/dogsofa/600/800" alt="Pension" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="font-display font-bold text-2xl text-primary mb-2 flex items-center gap-2 group-hover:text-[#364e61] transition-colors">
                    Garde & Pension Familiale <span className="text-xs bg-accent text-primary px-2 py-1 rounded-full uppercase tracking-wide font-bold animate-pulse">Places limitées</span>
                  </h2>
                  <p className="text-gray-600 mb-6">Votre chien vit avec nous, dans la maison. Pas de cage, pas de solitude. Il profite du jardin clos et de promenades quotidiennes incluses.</p>
                  
                  <div className="bg-peach/30 p-4 rounded-lg border-l-4 border-peach mb-6 hover:bg-peach/40 transition-colors">
                    <h4 className="font-bold text-primary mb-2">Conditions d'admission :</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Chien sociable congénères obligatoire</li>
                      <li>Vaccins à jour (y compris toux du chenil)</li>
                      <li>Pré-visite obligatoire</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="text-sm text-gray-500">Par jour (24h)</p>
                    <p className="font-display font-bold text-2xl text-primary">35€</p>
                  </div>
                  <Button onClick={() => onNavigate(Page.CONTACT, { service: 'pension' })} variant="primary">Vérifier dispo</Button>
                </div>
              </div>
            </div>

            {/* Calendar Section within Pension Card */}
            <div className="border-t border-gray-100 bg-secondary p-8">
              <div className="flex items-center gap-3 mb-6 justify-center text-primary">
                <CalendarIcon size={24} />
                <h3 className="font-display font-bold text-xl">Consultez les disponibilités</h3>
              </div>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Sélectionnez une date disponible (en vert) pour pré-réserver.
              </p>
              <Calendar onDateSelect={handlePensionDateSelect} />
            </div>
          </div>

           {/* Service 4: Loisirs - Peach Tint */}
           <div className="bg-peach/20 p-8 rounded-xl border-2 border-dashed border-peach text-center hover:bg-peach/30 transition-colors duration-300">
            <h2 className="font-display font-bold text-2xl text-primary mb-4">Initiations & Loisirs</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Découvrez d'autres facettes de votre chien avec nos ateliers ponctuels : 
              <strong> Medical Training</strong> (soins coopératifs), 
              <strong> Agility loisir</strong>, 
              <strong> Recherche olfactive</strong>.
            </p>
            <p className="font-bold text-lg text-primary mb-6">Sur devis ou selon événement</p>
            <Button onClick={() => onNavigate(Page.CONTACT, { service: 'autre' })} variant="outline" className="border-primary text-primary">Me contacter</Button>
          </div>

        </div>
      </div>
    </div>
  );
};
