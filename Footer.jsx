import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">F</span>
            <span className="footer__logo-text">Federal <em>Invest</em></span>
          </div>
          <p className="footer__tagline">
            Solidez e confiança em cada decisão financeira.
          </p>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4>Navegação</h4>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/unidades">Unidades</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <a href="mailto:contato@federalinvest.com.br">contato@federalinvest.com.br</a>
          <a href="tel:+551100000000">(11) 0000-0000</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Federal Invest. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
