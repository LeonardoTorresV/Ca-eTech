import React, { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    question: '¿Trabajan con startups en etapa idea o solo con empresas?',
    answer: 'Trabajamos con ambos. Nos especializamos en startups que van desde la etapa de validación de idea hasta scale-ups que necesitan refactor o expansión técnica.'
  },
  {
    question: '¿Cuál es el plazo mínimo de un proyecto?',
    answer: 'Un MVP típico tarda entre 4 y 8 semanas. Proyectos más complejos pueden extenderse. Te damos un cronograma detallado en la propuesta.'
  },
  {
    question: '¿Cómo manejan la confidencialidad de la idea?',
    answer: 'Firmamos un NDA (Acuerdo de Confidencialidad) antes de la primera reunión. Tu idea está protegida desde el primer día.'
  },
  {
    question: '¿Qué incluye el soporte post-entrega?',
    answer: 'Incluye corrección de bugs, actualizaciones menores y consultoría técnica. Ofrecemos planes de mantenimiento mensual adaptados a tus necesidades.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Preguntas Frecuentes</span>
           <h2 className="section-title">Resuelve tus dudas</h2>
          <p className="section-subtitle">
            Las preguntas más comunes que nos hacen antes de arrancar un proyecto.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
