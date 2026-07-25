import React from 'react'
import './Blog.css'

const ARTICLES = [
  {
    id: 1,
    title: 'Cómo lanzar tu startup sin gastar una fortuna en tecnología',
    excerpt: 'Validar una idea no requiere un presupuesto enorme. Te mostramos cómo construir un MVP funcional, rápido y escalable sin deuda técnica desde el día uno.',
    category: 'Startups',
    author: 'DevNexus',
    tags: ['MVP', 'Startup']
  },
  {
    id: 2,
    title: 'El secreto de las empresas que escalan sin deuda técnica',
     excerpt: 'Muchos negocios crecen rápido pero se estancan por código desordenado. Aprende cómo el Clean Code y las buenas arquitecturas aceleran el crecimiento en lugar de frenarlo.',
    category: 'Crecimiento',
    author: 'DevNexus',
    tags: ['Escalabilidad', 'Clean Code']
  },
  {
    id: 3,
     title: 'Por qué tu competencia ya usa código limpio (y tú no)',
    excerpt: 'No es una moda. Las empresas que priorizan la calidad técnica entregan features más rápido, reducen costos de mantenimiento y retienen talento clave.',
    category: 'Competitividad',
    author: 'DevNexus',
    tags: ['Ventaja competitiva', 'Calidad']
  },
  {
    id: 4,
    title: 'De la idea al producto en tiempo récord',
    excerpt: 'Metodologías ágiles, sprints bien definidos y prototipos tempranos. Así es como pasamos de un brief a un producto en semanas, no en meses.',
    category: 'Metodología',
    author: 'DevNexus',
    tags: ['Agile', 'Prototipado']
  },
  {
    id: 5,
    title: 'Cómo evitar que tu proyecto se vuelva un elefante blanco',
    excerpt: 'Presupuestos inflados, plazos que se esfuman y resultados que no cumplen. Te mostramos los errores más comunes y cómo evitarlos desde la primera reunión.',
    category: 'Gestión',
    author: 'DevNexus',
    tags: ['Proyectos', 'Resultados']
  },
  {
    id: 6,
    title: 'La guía definitiva para elegir tu stack tecnológico sin arrepentirte',
    excerpt: 'No hay una respuesta mágica, pero sí un método. Te explicamos cómo evaluar tecnologías según tu presupuesto, equipo y objetivos de negocio.',
    category: 'Tecnología',
    author: 'DevNexus',
    tags: ['Stack', 'Decisiones']
  }
]

export default function Blog() {
  return (
    <section id="blog" className="blog reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recursos</span>
          <h2 className="section-title">Artículos y conocimientos</h2>
          <p className="section-subtitle">
            Compartimos lo que aprendemos construyendo software. Clean Code, arquitectura y tecnologías modernas.
          </p>
        </div>

        <div className="blog-grid">
          {ARTICLES.map((article) => (
            <article key={article.id} className="glass-card blog-card">
              <div className="blog-meta">
                <span className="blog-category">{article.category}</span>
              </div>
              
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>
              
              <div className="blog-footer">
                <div className="blog-author">
                  <div className="blog-avatar">
                    {article.author.charAt(0)}
                  </div>
                  <span className="blog-author-name">{article.author}</span>
                </div>
                
                <div className="blog-tags">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
