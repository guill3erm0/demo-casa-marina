import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Phone, Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '2',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.name}! Hemos recibido tu solicitud de reserva para ${formData.people} personas. Te confirmaremos por teléfono en breve.`);
    setFormData({ name: '', phone: '', people: '2', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold text-center text-wood mb-12">Reserva tu Mesa</h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-tile-orange">
              <h2 className="font-serif text-2xl font-bold text-wood mb-6">Información Práctica</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-tile-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-wood">Llámanos</p>
                    <p className="text-gray-600 text-lg">931 31 34 21</p>
                    <p className="text-xs text-gray-500">Aceptamos reservas por teléfono</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-tile-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-wood">Horario de Apertura</p>
                    <ul className="text-gray-600 text-sm space-y-1 mt-1">
                      <li className="flex justify-between w-40"><span>Lun - Vie:</span> <span>06:00 - 23:30</span></li>
                      <li className="flex justify-between w-40"><span>Sábado:</span> <span>08:00 - 23:30</span></li>
                      <li className="flex justify-between w-40"><span className="text-red-500">Domingo:</span> <span>Cerrado</span></li>
                    </ul>
                  </div>
                </div>
                
                 <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-tile-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-wood">Escríbenos</p>
                    <p className="text-gray-600">hola@casamarina.es</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-wood text-cream p-6 rounded-lg">
               <p className="italic text-center">
                 "Si sois un grupo grande (más de 8 personas), por favor llamadnos para prepararos un menú especial."
               </p>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-wood mb-4">Formulario de Reserva</h3>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tile-orange focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tile-orange focus:border-transparent"
                    placeholder="600 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Comensales</label>
                  <select 
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tile-orange focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} personas</option>)}
                    <option value="more">+8 (Llamar)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Fecha y Hora aprox.</label>
                <input 
                  type="text" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tile-orange focus:border-transparent"
                  placeholder="Ej: Sábado 20 a las 14:00"
                />
              </div>
              
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Comentarios (Opcional)</label>
                 <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tile-orange focus:border-transparent"
                    placeholder="¿Alguna alergia? ¿Necesitas trona?"
                 ></textarea>
              </div>

              <Button type="submit" fullWidth className="text-lg">Solicitar Reserva</Button>
              <p className="text-xs text-center text-gray-400 mt-2">* Nos pondremos en contacto contigo para confirmar.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};