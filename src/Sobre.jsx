import './PageHero.css'
import './Sobre.css'

const values = [
  { title: 'Transparência', desc: 'Relações claras e honestas em cada passo da jornada do cliente.' },
  { title: 'Excelência', desc: 'Padrão elevado em análises, atendimento e entrega de resultados.' },
  { title: 'Responsabilidade', desc: 'Comprometimento com o futuro financeiro de cada cliente.' },
  { title: 'Inovação', desc: 'Tecnologia e metodologias modernas a serviço do investidor.' },
]

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label fade-up">Quem somos</span>
          <h1 className="fade-up fade-up-d1">Mais de 15 anos construindo<br />histórias de sucesso</h1>
          <p className="page-hero__sub fade-up fade-up-d2">
            Nascemos com o propósito de democratizar o acesso a investimentos inteligentes,
            oferecendo soluções que antes eram exclusivas de grandes fortunas.
          </p>
        </div>
      </section>

      <section className="section sobre-story">
        <div className="container sobre-story__inner">
          <div className="sobre-story__text fade-up">
            <span className="section-label">Nossa história</span>
            <h2>Uma empresa fundada na confiança</h2>
            <div className="divider" />
            <p>
              Fundada em 2009, a Federal Invest surgiu da visão de que todo brasileiro merece
              acesso a uma gestão financeira de qualidade. Começamos com uma pequena equipe em
              São Paulo e hoje somos referência nacional em assessoria e gestão de investimentos.
            </p>
            <p style={{ marginTop: 16 }}>
              Ao longo dos anos, expandimos nossa presença para oito estados brasileiros,
              sempre mantendo o compromisso com a personalização do atendimento e a busca
              incessante pelos melhores resultados para nossos clientes.
            </p>
          </div>
          <div className="sobre-story__visual fade-up fade-up-d2">
            <div className="sobre-story__card">
              <strong>2009</strong>
              <span>Fundação em São Paulo</span>
            </div>
            <div className="sobre-story__card">
              <strong>2014</strong>
              <span>Expansão para 4 estados</span>
            </div>
            <div className="sobre-story__card">
              <strong>2019</strong>
              <span>R$ 1 bilhão sob gestão</span>
            </div>
            <div className="sobre-story__card sobre-story__card--blue">
              <strong>Hoje</strong>
              <span>8 unidades · R$ 2B+ em AUM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section sobre-values">
        <div className="container">
          <span className="section-label">Nossos valores</span>
          <h2>O que nos move todos os dias</h2>
          <div className="divider" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="value-card__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
