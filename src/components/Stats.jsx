import React from 'react'
import './Stats.css'

const STATS = [
  {
    value: '5+',
    label: 'Años de experiencia combinada',
    sub: 'Fullstack & Arquitectura'
  },
  {
    value: '8+',
    label: 'Proyectos académicos/personales',
    sub: 'Web, PWA y Backend'
  },
  {
    value: '15+',
    label: 'Tecnologías dominadas',
    sub: 'Frontend, Backend y DevOps'
  },
  {
    value: '100%',
    label: 'Compromiso Clean Code',
    sub: 'SOLID, DRY y Testing'
  }
]

export default function Stats() {
  return (
    <section className="stats reveal">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="glass-card stats-card">
              <span className="stats-value">{stat.value}</span>
              <span className="stats-label">{stat.label}</span>
              <span className="stats-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
