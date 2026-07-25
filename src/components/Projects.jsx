import React from 'react'
import './Projects.css'

/* 
========================================================================
  ATENCIÓN: REEMPLAZA ESTE ARREGLO DE OBJETOS CON TUS PROYECTOS REALES.
  Puedes cambiar los textos, agregar URLs de imágenes reales en 'imageUrl',
  y modificar los tags de tecnología correspondientes.
========================================================================
*/
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Colegio \"Nuestra Señora de la Asunción\"",
    type: "Proyecto de Vinculación Académica",
    author: "Torres Vicente Leonardo",
    description: "Landing page institucional diseñada para el Colegio Nuestra Señora de la Asunción. Integra un diseño moderno, secciones informativas estructuradas y formulario funcional.",
    frontendTags: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    backendTags: ["MySQL", "AWS RDS", "AWS EC2"],
    link: "https://leonardotorresv.github.io/AS221S2_T04/",
    imageUrl: "/colegio-demo.png",
    isSchoolDemo: true,
    color: "#0d9488"
  },
  {
    id: 2,
    title: "Marketplace de Productos Sustentables",
    description: "E-commerce PWA desarrollado como proyecto final. Implementa carrito offline, notificaciones push, modo oscuro y optimización Lighthouse 98+.",
    techTags: ["React", "PWA", "Node.js", "MongoDB"],
    link: "#",
    imageUrl: "",
    color: "#10b981"
  },
  {
    id: 3,
    title: "Sistema de Gestión de Inventario para PyMEs",
    description: "Aplicación empresarial fullstack con roles de usuario, reportes PDF automatizados, dashboard en tiempo real y control de stock por sucursal.",
    techTags: ["Angular", "Spring Boot", "PostgreSQL"],
    link: "#",
    imageUrl: "",
    color: "#e11d48"
  },
  {
    id: 4,
    title: "Plataforma de Reserva de Turnos Médicos",
    description: "Prototipo funcional de MVP para clínicas. Incluye notificaciones por email, pasarela de pago simulada, panel admin y historial de pacientes.",
    techTags: ["React", "Node.js", "MySQL", "Docker"],
    link: "#",
    imageUrl: "",
    color: "#f59e0b"
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="projects reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portafolio</span>
          <h2 className="section-title">Nuestros Proyectos Realizados</h2>
          <p className="section-subtitle">
            Un vistazo a las aplicaciones web y sistemas a medida que hemos diseñado e implementado con buenas prácticas.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Image / Mockup Area */}
              <div className="project-image-wrapper">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image"
                  />
                ) : project.isSchoolDemo ? (
                  /* Custom beautiful school SVG vector */
                  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="400" height="200" fill="url(#schoolSkyGrad)" />
                    <circle cx="50" cy="40" r="20" fill="white" opacity="0.05" />
                    <circle cx="340" cy="50" r="30" fill="white" opacity="0.05" />
                    <circle cx="330" cy="40" r="15" fill="#fef08a" opacity="0.2" />
                    <path d="M40 85 C45 75, 60 75, 65 85 C70 80, 85 80, 90 85 C95 90, 95 100, 90 100 H40 Z" fill="white" opacity="0.12" />
                    <path d="M290 75 C295 65, 310 65, 315 75 C320 70, 335 70, 340 75 C345 80, 345 90, 340 90 H290 Z" fill="white" opacity="0.12" />

                    <rect x="0" y="160" width="400" height="40" fill="#0f172a" />
                    <rect x="0" y="156" width="400" height="4" fill="var(--color-primary)" />

                    <rect x="90" y="60" width="220" height="100" rx="4" fill="#1e293b" />
                    <rect x="150" y="50" width="100" height="110" rx="2" fill="#334155" />
                    
                    <rect x="160" y="75" width="8" height="80" fill="#94a3b8" />
                    <rect x="157" y="72" width="14" height="4" fill="#cbd5e1" />
                    <rect x="157" y="152" width="14" height="4" fill="#cbd5e1" />
                    
                    <rect x="232" y="75" width="8" height="80" fill="#94a3b8" />
                    <rect x="229" y="72" width="14" height="4" fill="#cbd5e1" />
                    <rect x="229" y="152" width="14" height="4" fill="#cbd5e1" />

                    <rect x="185" y="75" width="8" height="80" fill="#cbd5e1" />
                    <rect x="182" y="72" width="14" height="4" fill="#cbd5e1" />
                    <rect x="182" y="152" width="14" height="4" fill="#cbd5e1" />
                    
                    <rect x="207" y="75" width="8" height="80" fill="#cbd5e1" />
                    <rect x="204" y="72" width="14" height="4" fill="#cbd5e1" />
                    <rect x="204" y="152" width="14" height="4" fill="#cbd5e1" />

                    <polygon points="140,50 200,25 260,50" fill="#0f172a" stroke="var(--color-primary)" strokeWidth="2" />
                    <polygon points="146,47 200,29 254,47" fill="#475569" />
                    
                    <circle cx="200" cy="40" r="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
                    <line x1="200" y1="40" x2="200" y2="36" stroke="#0f172a" strokeWidth="1.2" />
                    <line x1="200" y1="40" x2="204" y2="40" stroke="#0f172a" strokeWidth="1.2" />

                    <rect x="190" y="115" width="20" height="38" rx="2" fill="#0f172a" />
                    <line x1="200" y1="115" x2="200" y2="153" stroke="#475569" />
                    <circle cx="197" cy="134" r="1.5" fill="#e2e8f0" />
                    <circle cx="203" cy="134" r="1.5" fill="#e2e8f0" />
                    
                    <rect x="175" y="153" width="50" height="4" fill="#475569" />
                    <rect x="170" y="157" width="60" height="4" fill="#334155" />

                    <rect x="110" y="80" width="20" height="25" rx="2" fill="#0f172a" />
                    <line x1="120" y1="80" x2="120" y2="105" stroke="#1e293b" />
                    <line x1="110" y1="92.5" x2="130" y2="92.5" stroke="#1e293b" />

                    <rect x="110" y="120" width="20" height="25" rx="2" fill="#0f172a" />
                    <line x1="120" y1="120" x2="120" y2="145" stroke="#1e293b" />
                    <line x1="110" y1="132.5" x2="130" y2="132.5" stroke="#1e293b" />

                    <rect x="270" y="80" width="20" height="25" rx="2" fill="#0f172a" />
                    <line x1="280" y1="80" x2="280" y2="105" stroke="#1e293b" />
                    <line x1="270" y1="92.5" x2="290" y2="92.5" stroke="#1e293b" />

                    <rect x="270" y="120" width="20" height="25" rx="2" fill="#0f172a" />
                    <line x1="280" y1="120" x2="280" y2="145" stroke="#1e293b" />
                    <line x1="270" y1="132.5" x2="290" y2="132.5" stroke="#1e293b" />

                    <line x1="200" y1="25" x2="200" y2="5" stroke="#94a3b8" strokeWidth="2" />
                    <polygon points="200,5 218,10 200,15" fill="var(--color-primary)" />

                    <defs>
                      <linearGradient id="schoolSkyGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--color-bg-solid)" />
                        <stop offset="0.5" stopColor="var(--color-primary-dark)" opacity="0.35" />
                        <stop offset="1" stopColor="var(--color-secondary)" opacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  /* Placeholder when image is not set yet */
                  <div className="project-image-placeholder">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span>Imágen Demo</span>
                  </div>
                )}
              </div>

              {/* Info Area */}
              <div className="project-info">
                {project.type && (
                  <span className="project-type-badge">{project.type}</span>
                )}
                {project.author && (
                  <div className="project-author-text">Autor: {project.author}</div>
                )}

                {/* Tags Section */}
                {project.frontendTags && project.backendTags ? (
                  <div className="project-tag-groups">
                    <div className="tag-group">
                      <span className="tag-group-label">Frontend:</span>
                      <div className="project-tags-row">
                        {project.frontendTags.map((tag, i) => (
                          <span key={i} className="project-tag frontend">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tag-group" style={{ marginTop: '0.25rem' }}>
                      <span className="tag-group-label">Back / AWS:</span>
                      <div className="project-tags-row">
                        {project.backendTags.map((tag, i) => (
                          <span key={i} className="project-tag backend">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="project-tags">
                    {project.techTags && project.techTags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>
                
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver demo en vivo
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
