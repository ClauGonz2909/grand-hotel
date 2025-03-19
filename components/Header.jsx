import React from 'react'

const Header = () => {
  return (
    <header className="relative w-full bg-transparent">
    {/* Overlay de fondo */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Contenedor principal */}
    <div className="flex justify-between items-center w-full max-w-6xl mx-auto p-4">
      
      {/* Menú de navegación a la izquierda */}
      <div className="flex items-center space-x-6">
        <button className="text-white text-2xl">
          {/* Icono de menú hamburguesa */}
          &#9776;
        </button>
        <a href="/habitaciones.html" className="text-white uppercase text-sm">
          Habitaciones
        </a>
        <a href="/ofertas.html" className="text-white uppercase text-sm">
          Ofertas
        </a>
      </div>

      {/* Logo central */}
      <div className="flex flex-col items-center">
        <img
          src="https://cdn2.paraty.es/wyndham-grand-cancun/images/8b9aa36f4f00b24"
          alt="Logo Wyndham Grand"
          className="h-12"
        />
        <span className="text-white text-xs text-center">
          CANCUN ALL INCLUSIVE <br /> RESORT & VILLAS
        </span>
      </div>

      {/* Enlaces de la derecha */}
      <div className="flex items-center space-x-4">
        <a href="/rewards.html" className="text-white uppercase text-sm">
          Rewards
        </a>
        <a href="/contacto.html" className="text-white uppercase text-sm flex items-center">
          <i className="fa-light fa-phone mr-1"></i> Contacto
        </a>
        <a href="/mis-reservas.html" className="text-white uppercase text-sm flex items-center">
          <i className="fal fa-concierge-bell mr-1"></i> Mis Reservas
        </a>

        {/* Selector de idioma */}
        <div className="relative">
          <button className="text-white text-sm flex items-center">
            <i className="fal fa-globe mr-1"></i> ES
          </button>
          <div className="absolute hidden mt-2 bg-white text-black rounded shadow-md">
            <a href="/" className="block px-4 py-2">
              ES
            </a>
            <a href="/en/" className="block px-4 py-2">
              EN
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
