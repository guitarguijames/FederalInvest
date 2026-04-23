import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { value: '15+', label: 'Anos de mercado' },
  { value: 'R$ 2B+', label: 'Em ativos geridos' },
  { value: '12k+', label: 'Clientes ativos' },
  { value: '8', label: 'Unidades no Brasil' },
]

const features = [
  {
    icon: '◈',
    title: 'Gestão Patrimonial',
    desc: 'Planejamento personalizado para preservar e multiplicar seu patrimônio com inteligência e segurança.',
  },
  {
    icon: '◉',
    title: 'Investimentos',
    desc: 'Portfólios diversificados alinhados ao seu perfil de risco, com acompanhamento contínuo.',
  },
  {
    icon: '◐',
    title: 'Consultoria Financeira',
    desc: 'Análise profunda e estratégias sob medida para cada etapa da sua jornada financeira.',
  },
  {
    icon: '◌',
    title: 'Previdência Privada',
    desc: 'Soluções para garantir tranquilidade e independência financeira no longo prazo.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-grid" aria-hidden />
        <div className="container hero__content">
          <span className="section-label fade-up">Federal Invest</span>
          <h1 className="fade-up fade-up-d1">
            Inteligência<br />
            <em>financeira</em> que<br />
            transforma vidas.
          </h1>
          <p className="hero__sub fade-up fade-up-d2">
            Há mais de 15 anos ajudamos pessoas e empresas a construir um futuro
            mais sólido, com estratégias de investimento personalizadas e gestão
            patrimonial de excelência.
          </p>
          <div className="hero__actions fade-up fade-up-d3">
            <Link to="/solucoes" className="btn btn-primary">Nossas Soluções</Link>
            <Link to="/sobre" className="btn btn-outline">Conheça a Federal</Link>
          </div>
        </div>

        <div className="hero__badge">
          <span>Regulada pela CVM</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section features">
        <div className="container">
          <span className="section-label">O que fazemos</span>
          <h2>Soluções para cada<br />momento da sua vida</h2>
          <div className="divider" />
          <div className="features__grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to="/solucoes" className="feature-card__link">
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Pronto para dar o<br />próximo passo?</h2>
            <p>Agende uma conversa com um de nossos especialistas. Sem compromisso.</p>
          </div>
          <Link to="/contato" className="btn btn-primary" style={{ fontSize: 15, padding: '16px 36px' }}>
            Agendar Reunião
          </Link>
        </div>
      </section>
    </>
  )
}
