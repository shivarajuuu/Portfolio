import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const gallery = [
  { src: '/photos/IMG_6917 (1).jpg', alt: 'ABHIRAM in warm editorial light', className: 'gallery-wide' },
  { src: '/photos/IMG_6921 (1).jpg', alt: 'ABHIRAM in a black editorial look', className: 'gallery-tall' },
  { src: '/photos/IMG_6939 (1).jpg', alt: 'ABHIRAM in a black and white fashion portrait', className: 'gallery-tall' },
  { src: '/photos/IMG_6953.jpg', alt: 'ABHIRAM in a full-length editorial portrait', className: 'gallery-wide' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <button className="wordmark" onClick={() => navigate('home')} aria-label="Back to top">AR<span>.</span></button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <button onClick={() => navigate('portfolio')}>Portfolio</button>
          <button onClick={() => navigate('about')}>About</button>
          <button onClick={() => navigate('contact')}>Contact</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <section id="home" className="hero">
        <img className="hero-image" src="/photos/IMG_6911 (1).jpg" alt="ABHIRAM in an editorial studio portrait" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">Telangana · Hyderabad · Banjara Hills</p>
          <h1>Abhiram</h1>
          <p className="hero-caption">Model</p>
        </div>
        <button className="scroll-cue" onClick={() => navigate('portfolio')} aria-label="Scroll to portfolio"><span />Scroll to explore</button>
      </section>

      <section id="portfolio" className="portfolio section-pad">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>A study in<br /><em>presence.</em></h2>
          <p className="section-note">A collection of recent work<br />across fashion.</p>
        </div>
        <div className="gallery">
          {gallery.map((image, index) => (
            <figure className={`gallery-item ${image.className} reveal`} key={image.src} style={{ '--delay': `${index * 70}ms` }}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>0{index + 1} / </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-image reveal"><img src="/photos/IMG_6911 (1).jpg" alt="ABHIRAM portrait" loading="lazy" /></div>
        <div className="about-copy reveal">
          <p className="eyebrow">The person behind the image</p>
          <h2>Quietly<br /><em>distinct.</em></h2>
          <p>I’m an emerging model with a fresh perspective, driven by passion and a strong desire to grow. I’m committed to learning, adapting, and bringing my unique energy to every shoot as I start my journey in fashion.</p>
          <button className="text-link" onClick={() => navigate('contact')}>Work with ABHIRAM <span>↗</span></button>
        </div>
      </section>

      <section id="contact" className="contact section-pad reveal">
        <p className="eyebrow">Get in touch</p>
        <h2>Start a<br /><em>conversation.</em></h2>
        <a className="contact-email" href="mailto:hello@abheeramz@gmail.com">hello@abheeramz@gmail.com <span>↗</span></a>
        <a className="contact-email contact-phone" href="tel:+918790926322">+91 87909 26322 <span>↗</span></a>
        <div className="contact-footer"><span>© 2026 ABHIRAM</span></div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)