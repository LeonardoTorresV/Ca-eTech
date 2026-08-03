import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyTrustUs from './components/WhyTrustUs'
import Stats from './components/Stats'
import Team from './components/Team'
import Process from './components/Process'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import BannerCTA from './components/BannerCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import useReveal from './hooks/useReveal'
import TrustUs from './components/TrustUs'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  useReveal(currentPage, isLoading)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'privacy') {
    return <Privacy onBack={() => navigateTo('home')} />
  }

  if (currentPage === 'terms') {
    return <Terms onBack={() => navigateTo('home')} />
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      {isLoading ? null : (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <WhyTrustUs />
            <Stats />
            <TrustUs />
            <Process />
            <Services />
            <TechStack />
            <Projects />
            <Blog />
            <FAQ />
            <BannerCTA />
            <Contact onNavigate={navigateTo} />
          </main>

          <Footer onNavigate={navigateTo} />
          <ScrollToTop currentPage={currentPage} />
        </>
      )}
    </>
  )
}