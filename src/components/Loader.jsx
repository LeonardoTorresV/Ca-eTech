import React, { useState, useEffect } from 'react'
import './Loader.css'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-logo" />
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}