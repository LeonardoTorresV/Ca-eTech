import React from 'react'
import './Process.css'

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Propuesta',
    duration: '1 semana',
    description: 'Reunión inicial para entender tu idea, objetivos y alcance. Te entregamos una propuesta detallada con alcance, tiempos y costo.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Diseño & Prototipo',
    duration: '1-2 semanas',
     description: 'Diseñamos la arquitectura y creamos prototipos interactivos. Validas la UX antes de escribir una sola línea de código de producción.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.235-1.153m0 2.183a4.5 4.5 0 019.375-1.593 2.25 2.25 0 012.4 2.245 3 3 0 00-5.78-1.128M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Desarrollo & Iteración',
    duration: '4-8 semanas',
    description: 'Codificación ágil con sprints quincenales. Te mostramos avances constantemente y ajustamos según tu feedback.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Entrega & Soporte',
    duration: 'Continuo',
    description: 'Despliegue en producción, documentación completa y soporte post-entrega. Nos aseguramos de que todo funcione perfectamente.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function Process() {
  return (
    <section id="proceso" className="process reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Metodología</span>
          <h2 className="section-title">Cómo trabajamos</h2>
          <p className="section-subtitle">
            Un proceso ágil y transparente para llevar tu idea desde el papel hasta producción.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((step, index) => (
            <div key={index} className="glass-card process-card">
              <div className="process-card-header">
                <div className="process-icon">{step.icon}</div>
                <span className="process-number">{step.number}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <span className="process-duration">{step.duration}</span>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
