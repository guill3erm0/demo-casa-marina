import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    author: "Jordi M.",
    rating: 5,
    text: "¡Qué descubrimiento! Las bravas son espectaculares y el trato de Marina te hace sentir super a gusto. Volveremos seguro.",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    author: "Ana García",
    rating: 5,
    text: "El menú de mediodía tiene una calidad precio increíble. Comida casera de verdad, nada de refritos. Muy recomendable.",
    date: "Hace 1 mes"
  },
  {
    id: 3,
    author: "Pere Vila",
    rating: 5,
    text: "El mejor sitio de Piera para hacerse un buen 'esmorzar de forquilla'. Los callos están de muerte.",
    date: "Hace 3 días"
  }
];

export const ReviewsLocation: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Reviews Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood mb-4">Lo que dicen nuestros vecinos</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
               <span className="text-2xl font-bold text-tile-orange">4.8</span>
               <div className="flex text-yellow-400">
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
               </div>
            </div>
            <p className="text-gray-600">Basado en reseñas de Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg relative transform hover:-translate-y-2 transition-transform duration-300">
                <Quote className="absolute top-4 right-4 text-orange-100" size={48} />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic relative z-10">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-wood">{review.author}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-wood text-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-white">¿Dónde estamos?</h2>
              <div className="space-y-4">
                <p className="flex items-start gap-3 text-lg">
                  <MapPin className="text-tile-orange mt-1 shrink-0" />
                  <span>
                    Carrer M.Cinto Verdaguer, 27<br />
                    08784 Piera, Barcelona
                  </span>
                </p>
                <p className="text-cream/80 text-sm">
                  Estamos situados en el centro, cerca de la plaza principal. 
                  Fácil aparcamiento en las calles aledañas.
                </p>
                <div className="pt-4">
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=Carrer+M.Cinto+Verdaguer+27+Piera" 
                     target="_blank" 
                     rel="noreferrer"
                     className="bg-tile-orange hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
                   >
                     Cómo llegar
                   </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 w-full h-80 md:h-[450px] bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              {/* Using a static iframe for Piera location */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.647265492318!2d1.7456743!3d41.5161049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a47a0000000001%3A0x123456789abcdef!2sPiera%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1625680000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación Casa Marina"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};