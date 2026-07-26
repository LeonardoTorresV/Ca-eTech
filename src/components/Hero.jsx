import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero reveal">
      <div className="container hero-grid">
        {/* Left Side: Value Proposition */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Especialistas en Desarrollo Web &bull; Clean Code</span>
          </div>
          
          <h1 className="hero-title">
            Creamos Software Excepcional a la Medida
          </h1>
          
          <p className="hero-subtitle">
            Somos un equipo técnico enfocado en resultados y especializado en el desarrollo de software a medida.
            Transformamos tus necesidades de negocio en aplicaciones web y PWA robustas, escalables y con código limpio.
          </p>
          
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">
              Hablemos de tu idea
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="https://wa.me/5491100000000?text=Hola!%20Me%20gustaria%20saber%20mas%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
               Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Mockup / Illustration */}
        <div className="hero-visual">
          <div className="hero-visual-bg"></div>
          {/* Stunning floating visual representing high-tech code editors & mock browser preview */}
          <div className="hero-mockup animate-float">
            <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
              {/* Laptop Body Outer Shadow */}
              <rect x="35" y="20" width="430" height="290" rx="16" fill="var(--color-bg-card)" stroke="var(--color-border)" strokeWidth="2" />
              
              {/* Screen Area */}
              <rect x="45" y="30" width="410" height="250" rx="10" fill="#0b1319" />
              
              {/* Window Header */}
              <rect x="45" y="30" width="410" height="30" rx="10" fill="#15202b" />
              {/* Dots */}
              <circle cx="65" cy="45" r="5" fill="#ef4444" />
              <circle cx="80" cy="45" r="5" fill="#f59e0b" />
              <circle cx="95" cy="45" r="5" fill="#10b981" />
              {/* Window Title */}
              <text x="250" y="50" fill="#64748b" fontSize="11" fontFamily="var(--font-body)" textAnchor="middle">workspace - devnexus.js</text>

              {/* Sidebar */}
              <rect x="45" y="60" width="70" height="220" fill="#0f1922" />
              <line x1="115" y1="60" x2="115" y2="280" stroke="#1c2d3d" />
              
              {/* Sidebar File Tree Placeholders */}
              <rect x="55" y="75" width="40" height="8" rx="2" fill="#334155" />
              <rect x="60" y="95" width="45" height="6" rx="2" fill="#1e293b" />
              <rect x="60" y="110" width="35" height="6" rx="2" fill="#1e293b" />
              <rect x="65" y="125" width="40" height="6" rx="2" fill="var(--color-primary)" opacity="0.8" />
              <rect x="60" y="140" width="45" height="6" rx="2" fill="#1e293b" />
              
              {/* Code Area */}
              <g className="hero-mockup-screen">
                {/* Code Lines */}
                <text x="130" y="90" fill="var(--color-primary)" fontSize="12" fontFamily="Courier, monospace" fontWeight="bold">const</text>
                <text x="175" y="90" fill="#f1f5f9" fontSize="12" fontFamily="Courier, monospace">team = &lbrace;</text>
                
                <text x="150" y="110" fill="#38bdf8" fontSize="12" fontFamily="Courier, monospace">role:</text>
                <text x="195" y="110" fill="#e2e8f0" fontSize="12" fontFamily="Courier, monospace">"Software Builders",</text>
                
                <text x="150" y="130" fill="#38bdf8" fontSize="12" fontFamily="Courier, monospace">skills:</text>
                <text x="210" y="130" fill="#fb923c" fontSize="12" fontFamily="Courier, monospace">["Clean Code", "Speed"],</text>
                
                <text x="150" y="150" fill="#38bdf8" fontSize="12" fontFamily="Courier, monospace">stack:</text>
                <text x="200" y="150" fill="#a78bfa" fontSize="12" fontFamily="Courier, monospace">"Fullstack Devs"</text>
                
                <text x="130" y="170" fill="#f1f5f9" fontSize="12" fontFamily="Courier, monospace">&rbrace;;</text>
                
                <text x="130" y="200" fill="#10b981" fontSize="12" fontFamily="Courier, monospace">function</text>
                <text x="195" y="200" fill="#38bdf8" fontSize="12" fontFamily="Courier, monospace">deliverValue</text>
                <text x="280" y="200" fill="#f1f5f9" fontSize="12" fontFamily="Courier, monospace">() &lbrace;</text>
                
                <text x="150" y="220" fill="#e2e8f0" fontSize="12" fontFamily="Courier, monospace">return team.createCode();</text>
                
                <text x="130" y="240" fill="#f1f5f9" fontSize="12" fontFamily="Courier, monospace">&rbrace;</text>
              </g>

              {/* Glowing decorative floating circles */}
              <circle cx="380" cy="180" r="30" fill="url(#circleGrad)" />
              <path d="M365 180H395M380 165V195" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
              
              {/* Laptop Keyboard Base */}
              <path d="M10 310H490L465 330H35L10 310Z" fill="var(--color-bg-card)" stroke="var(--color-border)" strokeWidth="2" />
              <rect x="210" y="318" width="80" height="6" rx="3" fill="var(--color-border)" />
              
              {/* Definitions */}
              <defs>
                <linearGradient id="circleGrad" x1="350" y1="150" x2="410" y2="210" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--color-primary)" />
                  <stop offset="1" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
