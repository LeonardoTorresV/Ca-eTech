import React, { useState, useEffect } from 'react'
import './Loader.css'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loader-overlay">
      <div className="loader-spinner">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="var(--color-border)" strokeWidth="6" />
          <path d="M38 28 L52 20 M24 52 L24 36 L38 28 M24 52 L38 60 L45.5 55.5" stroke="var(--color-primary)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite" />
          </path>
          <circle cx="50" cy="20" r="4.5" fill="var(--color-accent)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="24" cy="36" r="4.5" fill="var(--color-primary)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="76" cy="36" r="4.5" fill="var(--color-accent)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  )
}
