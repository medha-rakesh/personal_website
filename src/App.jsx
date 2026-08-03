import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Intro from './components/Intro.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const layers = document.querySelectorAll('[data-parallax]')
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        layers.forEach((layer) => {
          const rect = layer.parentElement.getBoundingClientRect()
          const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
          layer.style.setProperty('--par', `${(-progress * 60).toFixed(1)}px`)
        })
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Intro />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
