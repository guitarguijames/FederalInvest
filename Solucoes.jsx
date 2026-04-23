import { Link } from 'react-router-dom'
import './PageHero.css'
import './Solucoes.css'

const solucoes = [
  {
    tag: 'Pessoa Física',
    title: 'Gestão Patrimonial',
    desc: 'Planejamento completo para preservar, organizar e multiplicar o seu patrimônio. Trabalhamos com uma visão de longo prazo, considerando seu perfil, objetivos e tolerância ao risco.',
    items: ['Análise de perfil de investidor', 'Diversificação de portfólio', 'Rebalanceamento periódico', 'Relatórios transparentes'],
  },
  {
    tag: 'Renda Variável',
    title: 'Carteira de Investimentos',
    desc: 'Acesso às melhores oportunidades do mercado financeiro com suporte especializado. Renda fixa, renda variável, fundos e ativos internacionais.',
    items: ['Ações e FIIs', 'Tesouro Direto e CDBs', 'Fundos multimercado', 'BDRs e ETFs internacionais'],
  },
  {
    tag: 'Empresas',
    title: 'Consultoria Empresarial',
    desc: 'Soluções financeiras para empresas de todos os portes. Ajudamos sua empresa a ter saúde financeira e crescer de forma sustentável.',
    items: ['Gestão de caixa', 'Planejamento tributário', 'Captação de recursos', 'Fusões e aquisições'],
  },
  {
    tag: 'Longo Prazo',
    title: 'Previdência Privada',
    desc: 'Construa uma aposentadoria tranquila com as melhores soluções de previdência do mercado, otimizando benefícios fiscais e retorno no longo prazo.',
    items: ['PGBL e VGBL', 'Planos corporativos', 'Análise de portabilidade', 'Estratégias de resgate'],
  },
  {
    tag: 'Proteção',
    title: 'Seguros e Proteção',
    desc: 'Proteja o que você construiu. Oferecemos soluções de seguros integradas ao seu planejamento financeiro para cobrir riscos imprevistos.',
    items: ['Seguro de vida', 'Seguro patrimonial', 'Seguro empresarial', 'DI e invalidez'],
  },
  {
    tag: 'Educação',
    title: 'Educação Financeira',
    desc: 'Acreditamos que um cliente bem informado toma melhores decisões. Oferecemos conteúdo, workshops e consultorias educativas.',
    items: ['Workshops presenciais', 'Conteúdo online exclusivo', 'Consultoria de finanças pessoais', 'Planejamento de metas'],
  },
]

export default function Solucoes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label fade-up">O que oferecemos</span>
          <h1 className="fade-up fade-up-d1">Soluções completas para<br />cada objetivo financeiro</h1>
          <p className="page-hero__sub fade-up fade-up-d2">
            Do planejamento patrimonial à previdência, temos a solução certa para cada fase da
            sua vida financeira.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container solucoes-grid">
          {solucoes.map((s, i) => (
            <div key={i} className="solucao-card fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="solucao-card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <Link to="/contato" className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start', fontSize: 13 }}>
                Saber mais
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
