import React, { useState } from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  // Ensaladas
  { id: 1, category: 'ensaladas', name: "Ensalada César", price: "8,00 €" },
  { id: 2, category: 'ensaladas', name: "Ensalada Mar Y Montaña", price: "8,00 €" },
  { id: 3, category: 'ensaladas', name: "Ensalada Tropical", price: "8,00 €" },
  { id: 4, category: 'ensaladas', name: "Ensalada Mixta", price: "7,00 €" },

  // Raciones Grandes
  { id: 5, category: 'raciones', name: "Rabo De Toro", price: "20,00 €" },
  { id: 6, category: 'raciones', name: "Carrillada", price: "18,00 €" },
  { id: 7, category: 'raciones', name: "Pies De Cerdo", price: "15,00 €" },
  { id: 8, category: 'raciones', name: "Surtido De Marisco", price: "25,00 €" },
  { id: 9, category: 'raciones', name: "Surtido De Pescaito Frito", price: "20,00 €" },
  { id: 10, category: 'raciones', name: "Canelones XXL De Secreto Ibérico", price: "Consultar" },
  { id: 11, category: 'raciones', name: "Canelones XXL De Foie", price: "Consultar" },
  { id: 12, category: 'raciones', name: "Salmorejo", price: "6,00 €" },
  { id: 13, category: 'raciones', name: "Gazpacho", price: "5,00 €" },
  { id: 14, category: 'raciones', name: "Crema De Melón Con Virutas De Jamón", price: "6,00 €" },

  // Paella
  { id: 15, category: 'paella', name: "Paella Y Fideuá De Marisco", description: "Por encargo. Precio por persona.", price: "13,00 €" },

  // Menús
  { id: 16, category: 'menus', name: "Menú Diario", description: "3 Primeros a elegir, 3 Segundos a elegir, Bebida y Postre.", price: "12,95 €" },
  { id: 17, category: 'menus', name: "Menú Especial Días Festivos", price: "14,95 €" },

  // Bocadillos Fríos
  { id: 18, category: 'bocadillos_frios', name: "Queso Manchego", price: "5,50 €" },
  { id: 19, category: 'bocadillos_frios', name: "Queso De Loncha", price: "4,00 €" },
  { id: 20, category: 'bocadillos_frios', name: "Chorizo Ibérico", price: "5,50 €" },
  { id: 21, category: 'bocadillos_frios', name: "Salchichón Ibérico", price: "5,50 €" },
  { id: 22, category: 'bocadillos_frios', name: "Jamón Dulce", price: "4,50 €" },
  { id: 23, category: 'bocadillos_frios', name: "Jamón Serrano", price: "4,50 €" },
  { id: 24, category: 'bocadillos_frios', name: "Jamón Ibérico", price: "9,00 €" },
  { id: 25, category: 'bocadillos_frios', name: "Fuet", price: "4,50 €" },
  { id: 26, category: 'bocadillos_frios', name: "Butifarra Blanca", price: "4,50 €" },
  { id: 27, category: 'bocadillos_frios', name: "Atún", price: "5,00 €" },
  { id: 28, category: 'bocadillos_frios', name: "Vegetal Atún", price: "6,00 €" },
  { id: 29, category: 'bocadillos_frios', name: "Boquerones", price: "7,00 €" },
  { id: 30, category: 'bocadillos_frios', name: "Anchoas", price: "7,00 €" },

  // Bocadillos Calientes
  { id: 31, category: 'bocadillos_calientes', name: "Lomo", price: "5,00 €" },
  { id: 32, category: 'bocadillos_calientes', name: "Bacon", price: "4,90 €" },
  { id: 33, category: 'bocadillos_calientes', name: "Salchichas", price: "5,00 €" },
  { id: 34, category: 'bocadillos_calientes', name: "Butifarra", price: "5,50 €" },
  { id: 35, category: 'bocadillos_calientes', name: "Ternera", price: "6,00 €" },
  { id: 36, category: 'bocadillos_calientes', name: "Pinchos", price: "5,50 €" },
  { id: 37, category: 'bocadillos_calientes', name: "Pollo", price: "5,00 €" },
  { id: 38, category: 'bocadillos_calientes', name: "Hamburguesa", price: "5,00 €" },
  { id: 39, category: 'bocadillos_calientes', name: "Frankfurt", price: "4,00 €" },
  { id: 40, category: 'bocadillos_calientes', name: "Morcilla", price: "5,00 €" },
  { id: 41, category: 'bocadillos_calientes', name: "Panceta", price: "5,00 €" },
  { id: 42, category: 'bocadillos_calientes', name: "Kiki", price: "6,00 €" },
  { id: 43, category: 'bocadillos_calientes', name: "Serranito", price: "6,00 €" },
  { id: 44, category: 'bocadillos_calientes', name: "Tortilla Francesa", price: "4,50 €" },
  { id: 45, category: 'bocadillos_calientes', name: "Tortilla Patatas", price: "5,00 €" },
  { id: 46, category: 'bocadillos_calientes', name: "Pincho Tortilla", price: "6,00 €" },
  { id: 47, category: 'bocadillos_calientes', name: "Bikini", price: "3,50 €" },
  { id: 48, category: 'bocadillos_calientes', name: "Cervela", price: "5,00 €" },
  { id: 49, category: 'bocadillos_calientes', name: "Chistorra", price: "4,50 €" },

  // Pastas
  { id: 50, category: 'pastas', name: "Croissant", price: "1,50 €" },
  { id: 51, category: 'pastas', name: "Caña De Crema", price: "1,80 €" },
  { id: 52, category: 'pastas', name: "Caña De Chocolate", price: "1,80 €" },
  { id: 53, category: 'pastas', name: "Donut", price: "1,40 €" },
  { id: 54, category: 'pastas', name: "Pastelitos", price: "1,80 €" },
  { id: 55, category: 'pastas', name: "Magdalena", price: "1,50 €" },
  { id: 56, category: 'pastas', name: "Huevo Kinder", price: "2,00 €" },
  { id: 57, category: 'pastas', name: "Kinder Bueno", price: "2,00 €" },
  { id: 58, category: 'pastas', name: "Tartas Caseras", price: "4,00 €" },

  // Tapas
  { id: 59, category: 'tapas', name: "Alitas Barbacoa", price: "7,00 €" },
  { id: 60, category: 'tapas', name: "Albóndigas En Salsa", price: "7,00 €" },
  { id: 61, category: 'tapas', name: "Súper Especial Casa Marina", description: "Pollo, beicon, lomo, queso y huevo frito con salsa", price: "7,00 €" },
  { id: 62, category: 'tapas', name: "Calamares Al Andaluz", price: "7,00 €" },
  { id: 63, category: 'tapas', name: "Sobrasada Con Queso", price: "6,00 €" },
  { id: 64, category: 'tapas', name: "El Carlitos", description: "Carne picada, cebolla, pimiento y ajo", price: "7,00 €" },
  { id: 65, category: 'tapas', name: "Donuts De Pollo", price: "7,00 €" },
  { id: 66, category: 'tapas', name: "Flamenquín (1 ud)", price: "2,00 €" },
  { id: 67, category: 'tapas', name: "Gambas Al Ajillo", price: "7,00 €" },
  { id: 68, category: 'tapas', name: "Gambón A La Plancha", price: "12,00 €" },
  { id: 69, category: 'tapas', name: "Gambas Saladas", price: "10,00 €" },
  { id: 70, category: 'tapas', name: "Huevos Rellenos", price: "7,00 €" },
  { id: 71, category: 'tapas', name: "Mejillones A La Marinera", price: "9,00 €" },
  { id: 72, category: 'tapas', name: "Mejillones Al Vapor", price: "8,00 €" },
  { id: 73, category: 'tapas', name: "Pimientos Del Piquillo", price: "8,00 €" },
  { id: 74, category: 'tapas', name: "Pinchos", price: "7,00 €" },
  { id: 75, category: 'tapas', name: "Pulpo A La Gallega", price: "12,00 €" },
  { id: 76, category: 'tapas', name: "Palomitas De Pollo", price: "7,00 €" },
  { id: 77, category: 'tapas', name: "Rejos", price: "8,00 €" },
  { id: 78, category: 'tapas', name: "Rabas Empanadas", price: "7,50 €" },
  { id: 79, category: 'tapas', name: "Sepia Al Ajillo", price: "12,00 €" },
  { id: 80, category: 'tapas', name: "Tiras De Pollo", price: "8,00 €" },
  { id: 81, category: 'tapas', name: "Ternera En Salsa", price: "7,00 €" },
];

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tapas' | 'bocadillos' | 'menus' | 'pastas'>('tapas');

  const getFilteredItems = () => {
    switch (activeTab) {
      case 'tapas':
        return [
          { title: 'Tapas Variadas', items: menuItems.filter(i => i.category === 'tapas') },
          { title: 'Raciones Grandes', items: menuItems.filter(i => i.category === 'raciones') },
          { title: 'Ensaladas en Bandeja', items: menuItems.filter(i => i.category === 'ensaladas') },
        ];
      case 'bocadillos':
        return [
          { title: 'Bocadillos Calientes', items: menuItems.filter(i => i.category === 'bocadillos_calientes') },
          { title: 'Bocadillos Fríos', items: menuItems.filter(i => i.category === 'bocadillos_frios') },
        ];
      case 'menus':
        return [
          { title: 'Menús Diarios', items: menuItems.filter(i => i.category === 'menus') },
          { title: 'Paellas y Fideuás', items: menuItems.filter(i => i.category === 'paella') },
        ];
      case 'pastas':
        return [
           { title: 'Dulces y Pastas', items: menuItems.filter(i => i.category === 'pastas') },
        ];
      default:
        return [];
    }
  };

  const sections = getFilteredItems();

  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-wood mb-4">Nuestra Carta</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra variedad de platos caseros.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('tapas')}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              activeTab === 'tapas' 
                ? 'bg-tile-orange text-white shadow-lg scale-105' 
                : 'bg-white text-wood border border-wood/30 hover:bg-orange-50'
            }`}
          >
            Tapas y Raciones
          </button>
          <button
            onClick={() => setActiveTab('bocadillos')}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              activeTab === 'bocadillos' 
                ? 'bg-tile-orange text-white shadow-lg scale-105' 
                : 'bg-white text-wood border border-wood/30 hover:bg-orange-50'
            }`}
          >
            Bocadillos
          </button>
          <button
            onClick={() => setActiveTab('menus')}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              activeTab === 'menus' 
                ? 'bg-tile-orange text-white shadow-lg scale-105' 
                : 'bg-white text-wood border border-wood/30 hover:bg-orange-50'
            }`}
          >
            Menús y Especiales
          </button>
          <button
            onClick={() => setActiveTab('pastas')}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              activeTab === 'pastas' 
                ? 'bg-tile-orange text-white shadow-lg scale-105' 
                : 'bg-white text-wood border border-wood/30 hover:bg-orange-50'
            }`}
          >
            Dulces
          </button>
        </div>

        {/* Menu Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, idx) => (
             section.items.length > 0 && (
              <div key={idx}>
                <h2 className="font-serif text-2xl font-bold text-wood-dark mb-6 border-b-2 border-tile-orange pb-2 inline-block">
                  {section.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-wood hover:shadow-lg transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif text-lg font-bold text-wood-dark">{item.name}</h3>
                          {item.price && <span className="font-bold text-tile-orange bg-orange-50 px-2 py-1 rounded whitespace-nowrap ml-2">{item.price}</span>}
                        </div>
                        {item.description && <p className="text-gray-600 text-sm italic">{item.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             )
          ))}
        </div>

        {activeTab === 'menus' && (
           <div className="text-center mt-12 p-6 bg-orange-100 rounded-lg max-w-2xl mx-auto text-wood-dark shadow-inner">
             <p className="font-bold text-lg mb-2">ℹ️ Información sobre Menús</p>
             <p>El menú diario incluye 3 primeros y 3 segundos a elegir, bebida y postre.</p>
             <p className="mt-2 text-sm">Los platos varían según mercado. ¡Pregúntanos!</p>
           </div>
        )}
      </div>
    </div>
  );
};