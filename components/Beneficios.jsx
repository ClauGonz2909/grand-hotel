import React from 'react';

const Beneficios = () => {
  return (
    <section className="bg-[#F8F5F0] p-10 flex flex-col items-center">
      {/* Título */}
      <div className="text-center mb-8">
        <h5 className="text-xs text-gray-500 tracking-wide uppercase">Disfruta de todos</h5>
        <h2 className="text-3xl font-semibold text-gray-900">Nuestros beneficios</h2>
      </div>

      {/* Contenedor de beneficios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl">
        {/* Beneficio 1 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">🏨</i>
          <h4 className="font-semibold text-lg">249 habitaciones</h4>
          <p className="text-sm text-gray-600">Superiores, Suite y Suite premium con un servicio de talla mundial</p>
        </div>

        {/* Beneficio 2 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">🛎️</i>
          <h4 className="font-semibold text-lg">Room service 24 hrs</h4>
          <p className="text-sm text-gray-600">Disponible para ti en cualquier momento del día.</p>
        </div>

        {/* Beneficio 3 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">🍽️</i>
          <h4 className="font-semibold text-lg">Restaurantes y bares</h4>
          <p className="text-sm text-gray-600">Disfruta de la variedad gastronómica de Perú en Páprika, Saria Bar y Paraka Barrio Gourmet.</p>
        </div>

        {/* Beneficio 4 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">✈️</i>
          <h4 className="font-semibold text-lg">Ubicado dentro de la ciudad aeropuerto</h4>
          <p className="text-sm text-gray-600">Relájate con impresionantes vistas a la pista aérea.</p>
        </div>

        {/* Beneficio 5 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">💆‍♀️</i>
          <h4 className="font-semibold text-lg">Wellness</h4>
          <p className="text-sm text-gray-600">Relájate y renueva tu energía en nuestro spa, piscina y sauna.</p>
        </div>

        {/* Beneficio 6 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">📱</i>
          <h4 className="font-semibold text-lg">Self check-in</h4>
          <p className="text-sm text-gray-600">Sin colas, sin registros previos. ¡Tu registro, así de rápido y ágil!</p>
        </div>

        {/* Beneficio 7 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">💡</i>
          <h4 className="font-semibold text-lg">Habitación inteligente</h4>
          <p className="text-sm text-gray-600">Automatiza la iluminación, climatización y otros servicios para mayor comodidad.</p>
        </div>

        {/* Beneficio 8 */}
        <div className="flex flex-col items-center text-center text-gray-800">
          <i className="text-4xl text-gray-700 mb-3">🎉</i>
          <h4 className="font-semibold text-lg">Eventos</h4>
          <p className="text-sm text-gray-600">Haz tu estancia más productiva. Con nuestras 5 salas, realiza eventos de escala mundial.</p>
        </div>

        
      </div>
    </section>
  );
};

export default Beneficios;