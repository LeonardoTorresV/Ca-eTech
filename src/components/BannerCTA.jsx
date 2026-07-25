import React from 'react'
import './BannerCTA.css'

export default function BannerCTA() {
  return (
    <section className="banner-cta reveal">
      <div className="container">
        <div className="glass-card banner-glass">
          <div className="banner-bg-glow"></div>
          
          <div className="banner-content">
            <h2 className="banner-title">
              ¿Listo para hacer realidad tu proyecto?
            </h2>
            <p className="banner-text">
              No dejes tus ideas en el papel. Nuestro equipo está listo para ayudarte a diseñar, desarrollar y desplegar la solución tecnológica que necesitas.
            </p>
            <a href="#contacto" className="btn btn-accent">
              Agenda una consultoría gratuita
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
