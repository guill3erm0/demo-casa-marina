import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="font-serif text-4xl font-bold text-wood mb-8 text-center border-b-2 border-tile-orange pb-4 inline-block w-full">
            Nuestra Historia
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
             <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En <strong>Casa Marina</strong>, creemos que la cocina no es solo comida, es memoria. Fundada con la ilusión de recuperar el bar de pueblo de toda la vida, abrimos nuestras puertas en el corazón de Piera para ofrecer un refugio a quienes echan de menos los sabores de verdad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aquí no encontrarás espumas ni esferificaciones. Aquí se cocina a fuego lento, con el "chup-chup" de la cazuela marcando el ritmo del día.
                </p>
             </div>
             <div className="md:w-1/2">
               <img 
                  src="https://picsum.photos/id/292/600/400" 
                  alt="Cocina ingredientes frescos" 
                  className="rounded-lg shadow-md border-4 border-cream-dark"
                />
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-wood mb-4">Filosofía de Mercado</h2>
              <p className="text-gray-600">
                Cada mañana seleccionamos los ingredientes más frescos. Las verduras del huerto, la carne de confianza y el pescado que acaba de llegar. Si no es bueno para nuestra familia, no lo servimos en tu mesa.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-wood mb-4">Trato Familiar</h2>
              <p className="text-gray-600">
                Somos más que un bar, somos un punto de encuentro. Nos gusta saber tu nombre, cómo te gusta el café y qué tal te ha ido el día. La honestidad y la cercanía son nuestros platos principales.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-serif italic text-wood-dark mb-8">
              "Venir a Casa Marina es volver a casa."
            </p>
            <Link to="/contacto">
              <Button>Ven a Conocernos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};