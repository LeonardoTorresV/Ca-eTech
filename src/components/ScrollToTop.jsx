import React, { useState, useEffect } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop({ currentPage }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const button = document.createElement('button')
    button.className = 'scroll-top-btn'
    button.setAttribute('aria-label', 'Volver arriba')
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    `

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    button.addEventListener('click', scrollToTop)

    if (visible && currentPage === 'home') {
      button.classList.add('visible')
      document.body.appendChild(button)
    } else {
      button.classList.remove('visible')
      if (button.parentNode) {
        button.parentNode.removeChild(button)
      }
    }

    return () => {
      button.removeEventListener('click', scrollToTop)
      if (button.parentNode) {
        button.parentNode.removeChild(button)
      }
    }
  }, [visible, currentPage])

  return null
}
