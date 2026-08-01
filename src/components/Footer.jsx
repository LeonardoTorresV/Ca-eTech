import React from 'react'
import './Footer.css'

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 100 100" fill="none">
                <path d="M50 15 L85 32.5 V67.5 L50 85 L15 67.5 V32.5 Z" stroke="var(--color-logo-navy)" strokeWidth="5" strokeLinejoin="round" />
                <path d="M50 15 L50 50 M85 32.5 L50 50 M15 67.5 L50 50" stroke="var(--color-logo-red)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="8" fill="var(--color-logo-red)" />
                <circle cx="50" cy="15" r="4" fill="var(--color-logo-navy)" />
                <circle cx="85" cy="32.5" r="4" fill="var(--color-logo-navy)" />
                <circle cx="85" cy="67.5" r="4" fill="var(--color-logo-navy)" />
                <circle cx="50" cy="85" r="4" fill="var(--color-logo-navy)" />
                <circle cx="15" cy="67.5" r="4" fill="var(--color-logo-navy)" />
                <circle cx="15" cy="32.5" r="4" fill="var(--color-logo-navy)" />
              </svg>
              <span>DevNexus</span>
            </div>
            <p className="footer-brand-desc">
              Grupo especializado en desarrollo de software y soluciones digitales a medida. Diseñamos e implementamos aplicaciones rápidas, seguras y modulares con los más altos estándares de clean code.
            </p>
            <div className="footer-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Built with Clean Code</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Inicio</a></li>
              <li><a href="#servicios" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>Servicios</a></li>
              <li><a href="#proyectos" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>Proyectos</a></li>
              <li><a href="#nosotros" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>Nosotros</a></li>
              <li><a href="#contacto" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>Contacto</a></li>
              <li><a href="#blog" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacidad" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('privacy') }}>Privacidad</a></li>
              <li><a href="/terminos" className="footer-link" onClick={(e) => { e.preventDefault(); onNavigate('terms') }}>Términos</a></li>
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="footer-title">Redes</h4>
            <div className="footer-socials">
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a> */}
              <a href="https://www.tiktok.com/@caetech4?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="TikTok">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
          {/* clients */}
          <div>
            <h4 className="footer-title">Clientes</h4>
            <div className="footer-client-logos">
              <img src="img/client1-logo.jpg" alt="Client 1" className="footer-client-logo" />
              <img src="img/client2-logo.png" alt="Client 2" className="footer-client-logo" />
              <img src="img/client3-logo.jpg" alt="Client 3" className="footer-client-logo" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} DevNexus. Todos los derechos reservados. Diseñado e implementado con código limpio.
          </p>
        </div>
      </div>
    </footer>
  )
}
