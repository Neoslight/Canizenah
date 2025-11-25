
import React from 'react';
import { Page, Testimonial, NavParams } from '../types';
import { Button } from '../components/Button';
import { Heart, Home as HomeIcon, MapPin, PawPrint, CheckCircle, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page, params?: NavParams) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie L.",
      dogName: "Max",
      text: "Grâce à Canizenah, Max a enfin appris le rappel. Les balades sont devenues un plaisir dans le Golfe !",
      rating: 5
    },
    {
      id: 2,
      name: "Pierre D.",
      dogName: "Luna",
      text: "La pension familiale est top. Luna était comme à la maison, pas de box, c'est rassurant.",
      rating: 5
    },
    {
      id: 3,
      name: "Marie A.",
      dogName: "Rocky",
      text: "Une approche très douce et respectueuse du chien. Je recommande vivement pour l'éducation chiot.",
      rating: 4
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-fade-in"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/dogbeach/1920/1080")' }}
        ></div>
        <div className="absolute inset-0 bg-primary/70 z-10"></div> {/* Overlay darker for better contrast with Light Gold button */}
        
        <div className="relative z-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg">
            Éducatrice Comportementaliste <br/>Canin à Baden
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl text-gray-100 font-medium">
            Éducation bienveillante, promenades collectives et garde familiale dans le Morbihan. Retrouvez l'harmonie avec votre chien.
          </p>
          <Button 
            variant="accent" 
            onClick={() => onNavigate(Page.SERVICES)}
            className="text-lg px-8 py-4 shadow-xl"
          >
            Découvrir mes services
          </Button>
        </div>
      </section>

      {/* Why Us Section - Background White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Pourquoi choisir Canizenah ?</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Feature 1 */}
            <div className="group flex flex-col items-center p-6 bg-secondary rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-default">
              <div className="w-20 h-20 bg-willow/30 rounded-full flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <Heart size={40} className="text-[#5a7f45]" /> {/* Darker green for contrast */}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary">Méthode Positive</h3>
              <p className="text-gray-600 leading-relaxed">
                Respect et compréhension du chien avant tout. Pas de violence, juste de la communication et de la bienveillance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-center p-6 bg-secondary rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-default">
              <div className="w-20 h-20 bg-peach/40 rounded-full flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <HomeIcon size={40} className="text-[#a66a35]" /> {/* Darker peach for contrast */}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary">Cadre Familial</h3>
              <p className="text-gray-600 leading-relaxed">
                Pour la pension, pas de box ! Votre chien vit à la maison avec nous et profite du jardin et du canapé.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-center p-6 bg-secondary rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-default">
              <div className="w-20 h-20 bg-vanilla/60 rounded-full flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <MapPin size={40} className="text-[#8c7a2b]" /> {/* Darker gold for contrast */}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary">Proximité</h3>
              <p className="text-gray-600 leading-relaxed">
                J'interviens directement chez vous ou en extérieur sur Baden, Arradon, Vannes et le Golfe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Background Vanilla Tint */}
      <section className="py-16 bg-vanilla/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Mes Prestations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Des solutions adaptées à chaque chien et à chaque maître.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cours Éducation", img: "https://picsum.photos/seed/training/400/300", desc: "Individuel & Personnalisé" },
              { title: "Promenades", img: "https://picsum.photos/seed/walk/400/300", desc: "Collectives & Socialisation" },
              { title: "Initiations", img: "https://picsum.photos/seed/agility/400/300", desc: "Loisirs & Découverte" },
              { title: "Pension", img: "https://picsum.photos/seed/sleepingdog/400/300", desc: "Garde familiale" },
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100" 
                onClick={() => onNavigate(Page.SERVICES)}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 duration-300"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-bold text-lg text-primary mb-1 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.desc}</p>
                  <span className="text-primary font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all hover:text-accent duration-300">
                    En savoir plus <PawPrint size={14} className="text-accent group-hover:rotate-12 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button onClick={() => onNavigate(Page.SERVICES)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Voir tous les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Background White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary mb-4">Ils m'ont fait confiance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-secondary p-8 rounded-2xl relative border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={`${i < t.rating ? "text-accent" : "text-gray-300"} transform hover:scale-125 transition-transform duration-200 delay-${i*100}`} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">Maître de {t.dogName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Peach Background for Warmth */}
      <section className="py-20 bg-primary text-white text-center px-4 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse" style={{animationDuration: '6s'}}></div>

        <h2 className="font-display font-bold text-3xl mb-6 relative z-10">Prêt à améliorer votre relation avec votre chien ?</h2>
        <p className="text-lg text-secondary/90 mb-8 max-w-2xl mx-auto relative z-10">Contactez-moi pour un premier échange téléphonique gratuit afin d'évaluer vos besoins.</p>
        <Button variant="accent" onClick={() => onNavigate(Page.CONTACT)} className="px-10 py-4 text-lg relative z-10 shadow-lg hover:shadow-2xl">
          Prendre rendez-vous
        </Button>
      </section>
    </div>
  );
};
