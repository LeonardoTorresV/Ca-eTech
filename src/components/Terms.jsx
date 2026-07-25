import React from 'react'
import './Legal.css'

export default function Terms({ onBack }) {
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
          <h1>Términos y Condiciones</h1>
          <p className="legal-updated">Última actualización: 2026</p>

          <h2>1. Aceptación de términos</h2>
          <p>Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo, por favor no utilice nuestros servicios.</p>

          <h2>2. Propiedad intelectual</h2>
          <p>Todo el código, diseños y materiales entregados al cliente pasan a ser propiedad del cliente una vez realizado el pago completo. DevNexus se reserva el derecho de mostrar el trabajo en su portafolio.</p>

          <h2>3. Confidencialidad</h2>
          <p>Nos comprometemos a firmar un Acuerdo de Confidencialidad (NDA) antes de comenzar cualquier proyecto. Toda la información compartida por el cliente será tratada como confidencial.</p>

          <h2>4. Pagos</h2>
          <p>Los pagos se realizan en hitos: 30% al inicio del proyecto, 40% al finalizar el desarrollo y 30% después de 30 días de soporte. Los precios no incluyen costos de hosting, dominios o servicios de terceros.</p>

          <h2>5. Garantía</h2>
          <p>Ofrecemos 30 días de garantía post-entrega para corrección de bugs. Esta garantía no cubre modificaciones de alcance o cambios en los requisitos iniciales.</p>

          <h2>6. Soporte</h2>
          <p>El soporte post-entrega se brinda según el plan acordado. Para soporte fuera del alcance, se presupuestan horas adicionales.</p>

          <h2>7. Jurisdicción</h2>
           <p>Estos términos se rigen por las leyes aplicables en la jurisdicción correspondiente. Cualquier disputa se resolverá según la normativa vigente.</p>

          <h2>8. Contacto</h2>
          <p>Para consultas sobre estos términos, contáctenos en <a href="mailto:info@devnexus.com">info@devnexus.com</a>.</p>
        </div>
      </div>
    </div>
  )
}
