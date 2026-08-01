import React, { useState } from 'react'
import './Contact.css'

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    tipoProyecto: '',
    timelineDeseado: '',
    mensaje: '',
    aceptaTerminos: false
  })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = 'El nombre es requerido'
    if (!formData.correoElectronico.trim()) newErrors.correoElectronico = 'El email es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.correoElectronico)) newErrors.correoElectronico = 'Email inválido'
     if (!formData.tipoProyecto) newErrors.tipoProyecto = 'Selecciona un tipo de proyecto'
     if (!formData.timelineDeseado) newErrors.timelineDeseado = 'Selecciona un plazo'
     if (!formData.mensaje.trim()) newErrors.mensaje = 'Cuéntanos sobre tu proyecto'
    if (!formData.aceptaTerminos) newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('error')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('https://ca-etech-backend.onrender.com/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          nombreCompleto: '',
          correoElectronico: '',
          tipoProyecto: '',
          timelineDeseado: '',
          mensaje: '',
          aceptaTerminos: false
        })
        setErrors({})
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error en servidor:", errorData);
        setStatus('error')
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => {
        setStatus(null)
      }, 5000)
    }
  }

  return (
    <section id="contacto" className="contact reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">¡Hablemos de tu Proyecto!</h2>
          <p className="section-subtitle">
            Cuéntanos qué tienes en mente. Responderemos lo antes posible para agendar una videollamada y estructurar una propuesta.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct info and placeholders */}
          <div className="glass-card contact-info-card">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Canales de Atención</h3>
              <p className="contact-info-text">Si prefieres contactarnos directamente de forma inmediata, puedes escribirnos por cualquiera de estos medios:</p>
            </div>

            <div className="contact-methods">
              {/* WhatsApp Item */}
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="contact-method-details">
                  <h4>WhatsApp</h4>
                  {/* REEMPLAZAR: Cambia el número de teléfono por el tuyo en la URL y en el texto */}
                  <a href="https://wa.me/5491100000000?text=Hola!%20Me%20gustaria%20saber%20mas%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                    +54 9 11 0000-0000
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-method-details">
                  <h4>Correo Electrónico</h4>
                  {/* REEMPLAZAR: Cambia el correo por el tuyo */}
                  <a href="mailto:info@tu-startup.com">info@tu-startup.com</a>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                   <p>📍 <strong>Ubicación:</strong> Remoto Global</p>
                   <p>⏰ <strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00 (UTC-5)</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
                <input 
                  type="text" 
                  id="nombreCompleto" 
                  name="nombreCompleto" 
                  className={`form-input ${errors.nombreCompleto ? 'input-error' : ''}`}
                  placeholder="" 
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.nombreCompleto && <span className="error-text">{errors.nombreCompleto}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="correoElectronico" className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="correoElectronico" 
                  name="correoElectronico" 
                  className={`form-input ${errors.correoElectronico ? 'input-error' : ''}`}
                  placeholder="" 
                  value={formData.correoElectronico}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.correoElectronico && <span className="error-text">{errors.correoElectronico}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="tipoProyecto" className="form-label">Tipo de Proyecto</label>
                <select 
                  id="tipoProyecto" 
                  name="tipoProyecto" 
                  className={`form-input form-select ${errors.tipoProyecto ? 'input-error' : ''}`}
                  value={formData.tipoProyecto}
                  onChange={handleChange}
                >
                   <option value="">Selecciona una opción</option>
                  <option value="APLICACION_WEB">Aplicación Web</option>
                  <option value="PWA_MOBILE_WEB">PWA / Mobile Web</option>
                  <option value="BACKEND_API_REST">Backend / API REST</option>
                  <option value="ECOMMERCE">E-commerce</option>
                  <option value="LANDING_PAGE">Landing Page</option>
                  <option value="OTRO">Otro</option>
                </select>
                {errors.tipoProyecto && <span className="error-text">{errors.tipoProyecto}</span>}
              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="timelineDeseado" className="form-label">Timeline Deseado</label>
                  <select 
                    id="timelineDeseado" 
                    name="timelineDeseado" 
                    className={`form-input form-select ${errors.timelineDeseado ? 'input-error' : ''}`}
                    value={formData.timelineDeseado}
                    onChange={handleChange}
                   >
                     <option value="">Selecciona</option>
                     <option value="MENOS_1_MES">&lt; 1 mes</option>
                    <option value="ENTRE_1_3_MESES">1 - 3 meses</option>
                    <option value="ENTRE_3_6_MESES">3 - 6 meses</option>
                    <option value="MAS_6_MESES">&gt; 6 meses</option>
                  </select>
                  {errors.timelineDeseado && <span className="error-text">{errors.timelineDeseado}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje" className="form-label">Tu Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  className={`form-textarea ${errors.mensaje ? 'input-error' : ''}`}
                   placeholder="Cuéntanos un poco sobre tu idea, necesidades y plazos..." 
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
              </div>

              <div className="form-legal">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    id="aceptaTerminos"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                  />
                  <span className={`checkbox-custom ${errors.aceptaTerminos ? 'checkbox-error' : ''}`}></span>
                  Acepto la <a href="#privacidad" className="link-underline" onClick={(e) => { e.preventDefault(); onNavigate('privacy') }}>Política de Privacidad</a> y los <a href="#terminos" className="link-underline" onClick={(e) => { e.preventDefault(); onNavigate('terms') }}>Términos y Condiciones</a>
                </label>
                {errors.aceptaTerminos && <span className="error-text" style={{ display: 'block', marginTop: '0.25rem' }}>{errors.aceptaTerminos}</span>}
              </div>

              {/* Mensajes de respuesta en pantalla */}
              {status === 'success' && (
                <div className="form-status success">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="form-status error">
                  Hubo un problema. Por favor, completa todos los campos correctamente.
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading || status === 'success'}>
                {loading ? (
                  <span>Enviando mensaje...</span>
                ) : status === 'success' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                      <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
