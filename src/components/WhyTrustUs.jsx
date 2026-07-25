import React from 'react'
import './WhyTrustUs.css'

export default function WhyTrustUs() {
  const points = [
    {
      title: "Calidad y Clean Code",
      description: "Implementamos principios SOLID, DRY y arquitectura limpia. Tu software será robusto, escalable y fácil de mantener.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Dominio Tecnológico",
      description: "Dominamos stacks modernos de la industria como React, Angular, Node.js y Spring Boot para soluciones Frontend y Backend.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Comunicación Fluida",
      description: "Te mantenemos al tanto del progreso del proyecto de manera constante. Cero sorpresas, máxima transparencia.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Cumplimiento Exigente",
      description: "Trabajamos con metodologías ágiles divididas en entregables de valor. Cumplimos rigurosamente con los plazos pactados.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="nosotros" className="why-trust reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestros Valores</span>
          <h2 className="section-title">¿Por qué confiar en nuestro equipo?</h2>
          <p className="section-subtitle">
            Combinamos metodologías ágiles y modernas con rigurosos estándares de desarrollo profesional para construir soluciones de software de primera categoría.
          </p>
        </div>

        <div className="why-grid">
          {points.map((point, index) => (
            <div key={index} className="glass-card trust-card">
              <div className="trust-icon-wrapper">
                {point.icon}
              </div>
              <h3 className="trust-title">{point.title}</h3>
              <p className="trust-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
