import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Utensils, Star, Users } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Neutral Design */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream-dark">
        {/* Decorative background pattern (optional/subtle) */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wood to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight text-wood-dark drop-shadow-sm">
            La Verdadera <span className="text-tile-orange">Cocina Casera</span> en Piera
          </h1>
          <p className="text-lg md:text-2xl mb-10 font-light text-gray-700 max-w-2xl mx-auto">
            Tapas, platillos y el ambiente de siempre en Casa Marina.
            Donde comer es sentirse como en casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/carta">
              <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl">Ver La Carta</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-wood text-wood hover:bg-wood hover:text-white">
                Reservar Mesa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-cream/30 rounded-lg shadow-sm border-b-4 border-tile-orange hover:bg-cream/50 transition-colors">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4 text-tile-orange">
                <Utensils size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-wood">Ingrediente Local</h3>
              <p className="text-gray-600">
                Priorizamos el producto de mercado y de proximidad. Del huerto a tu plato.
              </p>
            </div>
            <div className="text-center p-6 bg-cream/30 rounded-lg shadow-sm border-b-4 border-tile-orange hover:bg-cream/50 transition-colors">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4 text-tile-orange">
                <Users size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-wood">Ambiente Familiar</h3>
              <p className="text-gray-600">
                Un trato cercano y honesto. Aquí no eres un cliente, eres un vecino.
              </p>
            </div>
            <div className="text-center p-6 bg-cream/30 rounded-lg shadow-sm border-b-4 border-tile-orange hover:bg-cream/50 transition-colors">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4 text-tile-orange">
                <Star size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-wood">Tradición</h3>
              <p className="text-gray-600">
                Recetas de la abuela cocinadas a fuego lento, sin prisas ni atajos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Image Break */}
      <section className="py-20 bg-wood text-cream">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img 
              src="https://picsum.photos/id/429/800/600" 
              alt="Plato de comida casera" 
              className="rounded-lg shadow-2xl rotate-2 border-4 border-white/10"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">¿Tienes hambre?</h2>
            <p className="text-xl opacity-90">
              Desde unas bravas crujientes para picar hasta un estofado meloso para almorzar fuerte. 
              Tenemos lo que buscas para alegrarte el día.
            </p>
            <Link to="/carta" className="inline-block">
               <Button className="mt-4 bg-cream text-wood hover:bg-white">Descubre Nuestros Sabores</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};