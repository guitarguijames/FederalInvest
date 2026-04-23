import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/sobre',     label: 'Sobre' },
  { to: '/solucoes',  label: 'Soluções' },
  { to: '/unidades',  label: 'Unidades' },
  { to: '/contato',   label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">F</span>
          <span className="navbar__logo-text">Federal <em>Invest</em></span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contato" className="btn btn-primary navbar__cta">
          Fale Conosco
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `navbar__drawer-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contato" className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>
          Fale Conosco
        </Link>
      </div>
    </header>
  )
}
