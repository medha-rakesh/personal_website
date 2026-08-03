import { useRef, useState, useEffect } from 'react'

export default function Carousel({ children }) {
  const ref = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }

  useEffect(() => {
    update()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const nudge = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(440, el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="carousel-top">
        <span className="carousel-hint">← scroll →</span>
        <span className="spacer" />
        <div className="carousel-ctrls">
          <button
            className="carousel-btn"
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="carousel-btn"
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
      <div className="carousel" ref={ref}>
        {children}
      </div>
    </div>
  )
}
