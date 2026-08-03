import React from 'react'
import './Loader.css'

export default function Loader({ isLoading }) {
  if (!isLoading) return null

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