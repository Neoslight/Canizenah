
import React from 'react';
import { Page, NavParams } from '../types';
import { Button } from '../components/Button';
import { Award, Heart, GraduationCap } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page, params?: NavParams) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero-like Header */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
           <h1 className="font-display font-bold text-4xl mb-2">Qui suis-je ?</h1>
           <div className="w-16 h-1 bg-accent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Photo Column */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute top-4 left-4 w-full h-full bg-peach/50 rounded-xl -z-10 transform rotate-2"></div>
              <img 
                src="https://picsum.photos/seed/womanwithdog/600/800" 
                alt="Éducatrice canin avec un chien" 
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[3/4]" 
              />
            </div>
            
            {/* Credentials Box */}
            <div className="bg-secondary mt-8 p-6 rounded-lg border border-gray-100">
              <h3 className="font-display font-bold text-lg mb-4 text-primary border-b border-gray-200 pb-2">Mes Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="text-willow flex-shrink-0" size={24} />
                  <div>
                    <span className="font-bold block text-primary">ACACED</span>
                    <span className="text-sm text-gray-600">Attestation de Connaissances pour les Animaux de Compagnie.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="text-willow flex-shrink-0" size={24} />
                  <div>
                    <span className="font-bold block text-primary">Formation Éducateur Canin</span>
                    <span className="text-sm text-gray-600">Certifiée par l'organisme [Nom Organisme].</span>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Heart className="text-willow flex-shrink-0" size={24} />
                  <div>
                    <span className="font-bold block text-primary">Secourisme Canin</span>
                    <span className="text-sm text-gray-600">Formation aux premiers secours.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/3">
            <h2 className="font-display font-bold text-3xl text-primary mb-6">Bonjour, je suis Hélène</h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Passionnée par les animaux depuis toujours, c'est après avoir adopté mon propre chien, un berger australien plein d'énergie, que j'ai réalisé l'importance d'une éducation basée sur la compréhension mutuelle.
              </p>
              <p>
                Après une première carrière dans le tertiaire, j'ai décidé de tout quitter pour me consacrer à ma passion. J'ai suivi une formation rigoureuse pour devenir éducatrice comportementaliste, car l'amour des chiens ne suffit pas : il faut comprendre leur psychologie.
              </p>
              <p>
                Installée à Baden, au cœur de ce magnifique Golfe du Morbihan, je vous accompagne pour construire ou reconstruire une relation harmonieuse avec votre compagnon.
              </p>

              <h3 className="font-display font-bold text-2xl text-primary pt-6">Ma Vision</h3>
              <p>
                Je pratique une <strong>éducation bienveillante mais cohérente</strong>. L'objectif n'est pas de dresser un robot, mais d'avoir un chien bien dans ses pattes, capable de vous suivre partout.
              </p>
              <p>
                La "méthode positive", ce n'est pas tout laisser faire. C'est fixer un cadre clair, encourager les bons comportements, et ignorer ou rediriger les mauvais, sans jamais utiliser la peur ou la douleur.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl font-display font-bold text-primary mb-6">Envie d'échanger sur votre compagnon à quatre pattes ?</p>
              <Button onClick={() => onNavigate(Page.CONTACT)} variant="accent">
                Me contacter
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};