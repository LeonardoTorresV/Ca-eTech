import React, { useState } from 'react'
import './Header.css'

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="header">
      <div className="container nav-container">
        {/* LOGO SECTION */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none">
            {/* Hexágono principal */}
            <path d="M50 15 L85 32.5 V67.5 L50 85 L15 67.5 V32.5 Z" stroke="var(--color-logo-navy)" strokeWidth="5" strokeLinejoin="round" />
            {/* Conexiones internas */}
            <path d="M50 15 L50 50 M85 32.5 L50 50 M15 67.5 L50 50" stroke="var(--color-logo-red)" strokeWidth="4" strokeLinecap="round" />
            {/* Nodo central */}
            <circle cx="50" cy="50" r="8" fill="var(--color-logo-x  )" />
            {/* Nodos externos */}
            <circle cx="50" cy="15" r="4" fill="var(--color-logo-navy)" />
            <circle cx="85" cy="32.5" r="4" fill="var(--color-logo-navy)" />
            <circle cx="85" cy="67.5" r="4" fill="var(--color-logo-navy)" />
            <circle cx="50" cy="85" r="4" fill="var(--color-logo-navy)" />
            <circle cx="15" cy="67.5" r="4" fill="var(--color-logo-navy)" />
            <circle cx="15" cy="32.5" r="4" fill="var(--color-logo-navy)" />
          </svg>
          {/* <span>YakuCode</span> */}
          <span>YakuCode</span>
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#inicio" className="nav-link" onClick={handleNavClick}>Inicio</a>
            </li>
            <li>
              <a href="#proyectos" className="nav-link" onClick={handleNavClick}>Proyectos</a>
            </li>
            <li>
              <a href="#nosotros" className="nav-link" onClick={handleNavClick}>Nosotros</a>
            </li>
            <li>
              <a href="#contacto" className="nav-link" onClick={handleNavClick}>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* CONTROLS */}
        <div className="nav-actions">
          {/* THEME TOGGLE (Light/Dark) */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Alternar tema claro/oscuro"
            title={theme === 'light' ? 'Cambiar a modo noche' : 'Cambiar a modo día'}
          >
            {theme === 'light' ? (
              /* Moon Icon */
              <svg viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              /* Sun Icon */
              <svg viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.16 5.1a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L6.16 6.16a.75.75 0 010-1.06zm10.62 0a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zm-4.78 4.65a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm15 0a.75.75 0 01.75-.75H21a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zm-6.09 6.09a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zm-6.09 0a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 010-1.06zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75z" />
              </svg>
            )}
          </button>

          {/* HAMBURGER TOGGLE (Mobile) */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
