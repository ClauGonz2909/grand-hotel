import React from 'react'

const Intro = () => {
  return (
    <section className="bg-white p-6 h-screen items-center justify-center flex flex-col">
      <h3 className=" pb-6 rounded-md font-semibold">
            Experimenta la exclusividad dentro de la ciudad aeropuerto
          </h3>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Contenedor de imágenes */}
        <div className="relative flex-1 max-w-sm">
            <div className="relative h-[400px] mx-auto">
              {/* Imagen grande (fondo) */}
              <img
                src="https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834"
                alt="Piscina del hotel"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Imagen pequeña sobrepuesta */}
              <img
                src="https://cdn2.paraty.es/wyndham-grand-cancun/images/309dcb0bb60a7f8"
                alt="Restaurante del hotel"
                className="absolute bottom-0 right-0 w-1/2 h-auto rounded-lg shadow-lg"
              />
            </div>
        </div>

        {/* Contenido del hotel */}
        <div className="flex-1 max-w-lg p-6 text-black-grand">
          <div className="">
            <h4 className=" font-bold" >
              Wyndham Grand Costa del Sol Lima City
            </h4>
            <p className="text-xs">Estancia premium y servicio de clase mundial</p>
          </div>
          <div className="flex items-center gap-2 text-green-600 my-4">
            <span className="text-lg font-bold">★★★★★</span>
            <span className="text-gray-700 text-sm">4.6 | 905 Opiniones</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-parrafos">
            Ubicado dentro de la Ciudad aeropuerto (Jorge Chávez - LIM), Wyndham
            Grand Costa del Sol Lima Airport te evita la caminata de ida y vuelta
            por tiempo, al estar en una ciudad estratégica, con acceso directo a la
            terminal aérea a través de un cómodo pasillo. A tan solo 30 minutos, la
            sede se encuentra financiera y un megaplex ideal para los 1,200 m² con
            25 renovadas habitaciones con diseño de lujo y totalmente premium en un
            entorno sin igual. Además, en la región se pueden encontrar sitios con
            la importancia de Lima, como la Plaza de Armas o el Museo Submarino
            Abtao, la Catedral de Lima, la iglesia de San Francisco y el icónico
            Parque del Amor en Miraflores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro