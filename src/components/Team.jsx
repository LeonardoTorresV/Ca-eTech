import React from 'react'
import './Team.css'

/* 
========================================================================
  ATENCIÓN: REEMPLAZA ESTE ARREGLO DE OBJETOS CON LOS INTEGRANTES REALES DE TU EQUIPO.
  - Para cada miembro, puedes establecer su nombre, rol, descripción, stack técnico.
  - Coloca la ruta de su foto en 'avatarUrl' (ej. "/images/team/member1.jpg") o deja 
    el string vacío para mostrar el avatar de silueta predeterminado.
========================================================================
*/
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Nombre Apellido",
    role: "Especialista en Frontend",
    bio: "Diseño e implementación de interfaces de usuario interactivas, responsivas y veloces con React y Angular.",
    stack: ["React", "Angular", "TypeScript", "CSS Modules"],
    avatarUrl: "" // Añadir URL de imagen aquí
  },
  {
    id: 2,
    name: "Nombre Apellido",
    role: "Especialista en Backend",
    bio: "Diseño de bases de datos, APIs robustas y arquitecturas de microservicios con Spring Boot y Node.js.",
    stack: ["Spring Boot", "Node.js", "PostgreSQL", "Java"],
    avatarUrl: "" // Añadir URL de imagen aquí
  },
  {
    id: 3,
    name: "Nombre Apellido",
    role: "Gestión de Proyectos & DevOps",
    bio: "Coordinación y entrega continua mediante metodologías ágiles, control de calidad y despliegues optimizados.",
    stack: ["Scrum", "Git", "Docker", "CI/CD"],
    avatarUrl: "" // Añadir URL de imagen aquí
  }
]

export default function Team() {
  return (
    <section id="equipo" className="team reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Especialistas</span>
          <h2 className="section-title">Nuestro Equipo Técnico</h2>
          <p className="section-subtitle">
            Un equipo de ingenieros y desarrolladores altamente enfocado en resultados, buenas prácticas y calidad técnica.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="glass-card team-card">
              {/* Avatar Photo Slot */}
              <div className="team-avatar-wrapper">
                {member.avatarUrl ? (
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                ) : (
                  /* Silhouette SVG Placeholder */
                  <div className="team-avatar-placeholder" title="Espacio para foto">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info Details */}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>

              {/* Technologies Tag Group */}
              <div className="team-stack">
                {member.stack.map((tech, i) => (
                  <span key={i} className="team-stack-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
