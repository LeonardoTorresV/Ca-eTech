import React from 'react'
import './Legal.css'

export default function Privacy({ onBack }) {
  return (
    <div className="legal-page">
      <div className="container">
        <button className="legal-back" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al sitio
        </button>

        <div className="legal-content">
          <h1>Política de Privacidad</h1>
          <p className="legal-updated">Última actualización: 2026</p>

          <h2>1. Información que recopilamos</h2>
          <p>Recopilamos los datos que usted nos proporciona voluntariamente a través del formulario de contacto: nombre, correo electrónico, tipo de proyecto, presupuesto estimado y mensaje.</p>

          <h2>2. Uso de la información</h2>
          <p>Utilizamos esta información exclusivamente para responder a su consulta, enviar propuestas comerciales y brindar soporte post-venta. No compartimos sus datos con terceros sin su consentimiento.</p>

          <h2>3. Protección de datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración o divulgación.</p>

          <h2>4. Cookies</h2>
          <p>Este sitio no utiliza cookies de seguimiento. Solo almacenamos su preferencia de tema (claro/oscuro) en localStorage de su navegador.</p>

          <h2>5. Sus derechos</h2>
          <p>Usted puede solicitar en cualquier momento la eliminación de sus datos enviando un correo a <a href="mailto:info@devnexus.com">info@devnexus.com</a>.</p>

          <h2>6. Contacto</h2>
          <p>Para consultas sobre esta política, contáctenos en <a href="mailto:info@devnexus.com">info@devnexus.com</a>.</p>
        </div>
      </div>
    </div>
  )
}
