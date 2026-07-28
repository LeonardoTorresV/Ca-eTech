import React, { useState } from 'react'
import './TechStack.css';

export default function TechStack() {
  const [filter, setFilter] = useState('frontend')

  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Bases de Datos' }
  ]

  const techs = [
    {
      name: "React",
      class: "react",
      category: "frontend",
      role: "Frontend & PWA",
      description: "Interfaces ágiles, reactivas y componentes reutilizables de alto rendimiento.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Angular",
      class: "angular",
      category: "frontend",
      role: "Enterprise Frontend",
      description: "Estructura corporativa sólida y robusta para aplicaciones de gran escala.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    },
    {
      name: "Node.js",
      class: "nodejs",
      category: "backend",
      role: "Backend & APIs",
      description: "Servidores rápidos basados en eventos, APIs REST y websockets en tiempo real.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Spring Boot",
      class: "springboot",
      category: "backend",
      role: "Secure Backend",
      description: "Arquitectura corporativa segura, persistencia robusta y microservicios Java.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
      name: "HTML5",
      class: "html",
      category: "frontend",
      role: "Web Structure",
      description: "Estructura semántica de páginas web accesible y compatible con todos los navegadores.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      class: "css",
      category: "frontend",
      role: "Web Styling",
      description: "Estilos responsivos, animaciones, diseño moderno y layouts adaptables.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      class: "js",
      category: "frontend",
      role: "Core Language",
      description: "Lógica dinámica del lado del cliente, APIs y manipulación del DOM.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "TypeScript",
      class: "ts",
      category: "frontend",
      role: "Typed Scalability",
      description: "JavaScript tipado que mejora mantenibilidad, detección de errores y escalabilidad.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "Java",
      class: "java",
      category: "backend",
      role: "Enterprise Systems",
      description: "Soluciones empresariales robustas, multiplataforma y de alta escalabilidad.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "MySQL",
      class: "mysql",
      category: "database",
      role: "Relational Database",
      description: "Base de datos relacional rápida, confiable y ampliamente soportada.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "MSSQL",
      class: "mssql",
      category: "database",
      role: "Enterprise Database",
      description: "Motor de base de datos relacional para aplicaciones empresariales en ecosistema Microsoft.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
    },
    {
      name: "MongoDB",
      class: "mongodb",
      category: "database",
      role: "NoSQL Database",
      description: "Base de datos NoSQL orientada a documentos, ideal para datos flexibles y alto rendimiento.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "PostgreSQL",
      class: "postgresql",
      category: "database",
      role: "Advanced Relational",
      description: "Base de datos relacional avanzada, soporta JSON, geolocalización y alta concurrencia.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    }
  ]

  const filteredTechs = filter === 'all'
    ? techs
    : techs.filter(tech => tech.category === filter)

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

        <div className="tech-filters">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`tech-filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredTechs.map((tech, index) => (
            <div key={index} className={`glass-card tech-card ${tech.class}`}>
              <div className="tech-logo-wrapper">
                <img src={tech.logo} alt={`${tech.name} logo`} loading="lazy" />
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