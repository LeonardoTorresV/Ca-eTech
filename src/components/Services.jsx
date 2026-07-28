import React from 'react'
import './Services.css'

const SERVICES = [
  {
    title: 'Landing Page & Sitios Web',
    description: 'Sitios web de alto rendimiento, optimizados para conversión y SEO. Ideales para emprendedores y PyMEs que necesitan presencia digital profesional. Diseño mobile-first, carga ultrarrápida y experiencia de usuario cuidada en cada detalle.',
    tags: ['Next.js', 'React', 'Tailwind', 'SEO Técnico'],
    popular: true,
    includes: [
      'Diseño responsive (mobile-first)',
      'SEO técnico básico (meta tags, sitemap)',
      'Optimización Lighthouse 90+',
      'Formulario de contacto funcional',
      '1 ronda de revisiones',
      'Entrega en 1-2 semanas'
    ]
  },
  {
    title: 'Aplicativo Web Monolito / Microservicios',
    description: 'Plataformas web empresariales escalables. Diseñamos arquitectura monolítica o de microservicios según la complejidad de tu negocio, con foco en mantenibilidad, testing y documentación.',
    tags: ['Angular', 'Spring Boot', 'Node.js', 'PostgreSQL'],
    popular: false,
    includes: [
      'Arquitectura escalable (monolito o microservicios)',
      'API REST documentada (Swagger/OpenAPI)',
      'Autenticación y autorización (JWT/OAuth)',
      'Base de datos optimizada con índices',
      'Testing unitario e integración (70%+ coverage)',
      'Documentación técnica y manual de usuario',
      'Soporte post-entrega 30 días'
    ]
  },
  {
    title: 'Aplicativo de Escritorio',
    description: 'Software de escritorio multiplataforma para entornos empresariales. Interfaz nativa o híbrida, acceso a datos local o remoto, y experiencia de usuario consistente en Windows.',
    tags: ['JavaFX', 'Python', 'SQLite'],
    popular: false,
    includes: [
      'Instalador para Windows',
      'Base de datos local o remota',
      'Sistema de logs y reportes',
      'Manual de usuario y capacitación',
      'Soporte post-entrega 30 días'
    ]
  }
]

const NOT_SERVICES = [
  'Diseño gráfico publicitario',
  'Community Management',
  'Consultoría en marketing digital',
  'Desarrollo de videojuegos'
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Servicios</span>
          <h2 className="section-title">Qué hacemos</h2>
          <p className="section-subtitle">
            Nos enfocamos en lo que mejor sabemos hacer: construir software confiable, escalable y bien código.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className={`glass-card service-card ${service.popular ? 'service-popular' : ''}`}>
              {service.comingSoon && <span className="service-badge service-badge-soon">Próximamente</span>}
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
               {/* <div className="service-price">{service.price}</div> */}
              
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="service-tag">{tag}</span>
                ))}
              </div>

              {service.includes && (
                <ul className="service-includes">
                  {service.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              <a href="#contacto" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>
                Consultar
              </a>
            </div>
          ))}
        </div>

        <div className="services-not">
          <h3 className="not-title">Qué NO hacemos</h3>
          <div className="not-grid">
            {NOT_SERVICES.map((item, index) => (
              <div key={index} className="not-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
