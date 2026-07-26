import React from 'react'
import './TechStack.css'

export default function TechStack() {
  const techs = [
    {
      name: "React",
      class: "react",
      role: "Frontend & PWA",
      description: "Interfaces ágiles, reactivas y componentes reutilizables de alto rendimiento.",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Angular",
      class: "angular",
      role: "Enterprise Frontend",
      description: "Estructura corporativa sólida y robusta para aplicaciones de gran escala.",
      icon: (
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h50.7l11.7,29.2h21.7L125,52.1z M143.5,135.4h-37L125,89.5L143.5,135.4z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Node.js",
      class: "nodejs",
      role: "Backend & APIs",
      description: "Servidores rápidos basados en eventos, APIs REST y websockets en tiempo real.",
      icon: (
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.8 4.3c.7-.4 1.7-.4 2.4 0l31.2 18.1c.7.4 1.2 1.2 1.2 2v36.2c0 .8-.5 1.6-1.2 2L41.2 80.7c-.7.4-1.7.4-2.4 0L7.6 62.6c-.7-.4-1.2-1.2-1.2-2V24.4c0-.8.5-1.6 1.2-2L38.8 4.3z" fill="#333333" />
          <path d="M41 45.4c-1.3-.8-2.6-1.4-3.9-2.1-1.3-.7-2.6-1.3-3.8-2-.9-.5-1.3-1.3-1.3-2.3v-19c0-1 .4-1.8 1.3-2.3 2.5-1.4 5.1-2.7 7.7-4.1.8-.4 1.6-.4 2.4 0 2.5 1.4 5.1 2.7 7.7 4.1.9.5 1.3 1.3 1.3 2.3v19c0 1-.4 1.8-1.3 2.3l-7.7 4.1c-.8.4-1.7.4-2.7-.7z" fill="#83CD29" />
          <path d="M41 19c-.6.3-1.1.6-1.7.9V36c.6.3 1.1.6 1.7.9V19z" fill="#43853D" />
        </svg>
      )
    },
    {
      name: "Spring Boot",
      class: "springboot",
      role: "Secure Backend",
      description: "Arquitectura corporativa segura, persistencia robusta y microservicios Java.",
      icon: (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="24" fill="#6DB33F" />
          {/* Leaf */}
          <path d="M90.8 38.3c-1.8-2.6-4.6-4.3-8.8-5.3-7.5-1.8-17.7 2.1-26.6 9.8-9 7.7-15.5 17.8-16.7 24.3-1.2 6.5.6 10.4 4.5 12.6 1.2.7 2.6 1.1 4 1.1 4 0 9.2-2.8 14.5-7.4 5.3-4.6 9.8-10.4 12.7-15.7.5-.9.3-2.1-.6-2.7-.9-.5-2.1-.3-2.7.6-2.6 4.7-6.7 10-11.4 14-4.5 3.9-8.7 6.1-11.5 6.1-.8 0-1.5-.2-2.1-.5-2-1.1-2.9-3.2-2.1-7.5.9-5.4 6.8-14.7 15-21.7 8.2-7 17.3-10.4 23.5-8.9 2.6.6 4.1 1.6 4.7 2.7.7 1.1.7 2.8.2 5.1-.3 1.1.3 2.2 1.4 2.5 1.1.3 2.2-.3 2.5-1.4.7-3.1.6-5.8-.7-7.8z" fill="#FFFFFF" />
          <path d="M72.2 64.9c-.9-1.1-2.5-1.3-3.6-.4-1.1.9-1.3 2.5-.4 3.6 1.1 1.3 2.6 2.8 4.4 4.3 1.8 1.5 3.8 2.9 5.8 4.2 1 .7 2.4.4 3.1-.6.7-1 .4-2.4-.6-3.1-1.8-1.1-3.6-2.4-5.2-3.8-1.5-1.4-2.8-2.8-3.5-4.2z" fill="#FFFFFF" />
        </svg>
      )
    }
  ]

  return (
    <section id="stack" className="tech-stack reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tecnologías</span>
          <h2 className="section-title">Nuestro Stack Tecnológico</h2>
          <p className="section-subtitle">
            Utilizamos herramientas modernas, maduras y con amplio respaldo en la industria para construir plataformas seguras, responsivas y veloces.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className={`glass-card tech-card ${tech.class}`}>
              <div className="tech-logo-wrapper">
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                {tech.role}
              </p>
              <p className="tech-desc">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
