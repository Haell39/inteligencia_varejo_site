import './App.css'

const highlights = [
  {
    value: '-0.33',
    label: 'Correlacao Lead Time x Satisfacao',
    detail: 'Impacto logistico foi mais forte que o IPCA no curto prazo.',
  },
  {
    value: '-47%',
    label: 'Queda na nota com atraso',
    detail: 'De 4.29 para 2.27 quando ocorre ruptura logistica.',
  },
  {
    value: '+116%',
    label: 'Lead Time PE vs SP',
    detail: 'No Nordeste, o tempo de espera e o frete sobem de forma relevante.',
  },
  {
    value: '96.7%',
    label: 'Acuracia do modelo de atraso',
    detail: 'Modelo de classificacao para alerta precoce de ruptura.',
  },
]

const insights = [
  'Logistica e o principal driver da experiencia do cliente neste recorte de e-commerce.',
  'Inflacao (IPCA) nao explica sozinha as oscilacoes de vendas no curto prazo.',
  'Categorias com maior custo de frete concentram trade-offs entre ticket, atraso e satisfacao.',
  'Retencao mensal e muito baixa apos o primeiro mes, indicando risco de churn elevado.',
]

const models = [
  {
    title: 'Modelo 1 - Classificacao de Ruptura',
    metrics: ['Acuracia: 96.7%', 'Recall (atraso): 64%'],
    description:
      'Previne atrasos identificando pedidos com maior chance de ruptura antes da entrega.',
  },
  {
    title: 'Modelo 2 - Regressao de Satisfacao',
    metrics: ['MAE: 0.878', 'R2: 0.22 (+13% vs baseline)'],
    description:
      'Estima score de review para antecipar risco de experiencia ruim e orientar a operacao.',
  },
]

const galleryItems = [
  {
    src: '/assets/imgs/01_analise_inteligencia_varejo_fig_1.png',
    title: 'Lead Time e Satisfacao (PE x SP)',
  },
  {
    src: '/assets/imgs/01_analise_inteligencia_varejo_fig_2.png',
    title: 'Elasticidade: Vendas x Inflacao',
  },
  {
    src: '/assets/imgs/02_analise_avancada_clientes_fig_1.png',
    title: 'Segmentacao RFM de Clientes',
  },
  {
    src: '/assets/imgs/02_analise_avancada_clientes_fig_2.png',
    title: 'Demanda e Satisfacao por Categoria',
  },
  {
    src: '/assets/imgs/02_analise_avancada_clientes_fig_3.png',
    title: 'Custo e Trade-offs por Categoria',
  },
  {
    src: '/assets/imgs/02_analise_avancada_clientes_fig_4.png',
    title: 'Correlacao Logistica x Satisfacao',
  },
  {
    src: '/assets/imgs/02_analise_avancada_clientes_fig_5.png',
    title: 'Analise de Coorte de Retencao',
  },
  {
    src: '/assets/imgs/03_modelos_machine_learning_fig_1.png',
    title: 'Modelo 1: Matriz e Features',
  },
  {
    src: '/assets/imgs/03_modelos_machine_learning_fig_2.png',
    title: 'Modelo 2: Regressao e Features',
  },
]

const materials = [
  {
    title: 'Resumo Executivo',
    href: '/assets/reports/Resumo_Executivo.pdf',
    type: 'PDF',
  },
  {
    title: 'Resumo Tecnico',
    href: '/assets/reports/Resumo_Tecnico.pdf',
    type: 'PDF',
  },
  {
    title: 'Relatorio Geral',
    href: '/assets/reports/Relatorio_Geral.pdf',
    type: 'PDF',
  },
  {
    title: 'Slides da Apresentacao',
    href: '/assets/slides/Inteligência_de_Varejo_Dados,_Logística_e_ML.pdf',
    type: 'PDF',
  },
  {
    title: 'Arquivo PowerPoint',
    href: '/assets/slides/Inteligência_de_Varejo_Dados,_Logística_e_ML.pptx',
    type: 'PPTX',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section" id="topo">
        <p className="eyebrow">Portfolio de Data Science</p>
        <h1>Inteligencia de Varejo: Dados, Logistica e Machine Learning</h1>
        <p className="hero-copy">
          Projeto analitico focado em identificar os principais drivers de
          vendas, satisfacao e eficiencia operacional no e-commerce brasileiro
          com base em dados Olist e indicadores macroeconomicos.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#insights">
            Ver principais achados
          </a>
          <a className="btn btn-ghost" href="#materiais">
            Abrir materiais
          </a>
        </div>
      </header>

      <section className="highlights-grid" aria-label="Indicadores principais">
        {highlights.map((item) => (
          <article key={item.label} className="highlight-card">
            <p className="highlight-value">{item.value}</p>
            <h2>{item.label}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-block" id="insights">
        <div className="section-header">
          <p className="eyebrow">Achados estrategicos</p>
          <h2>O que este projeto mostra para decisao de negocio</h2>
        </div>
        <ul className="insights-list">
          {insights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ul>
      </section>

      <section className="section-block" id="modelos">
        <div className="section-header">
          <p className="eyebrow">Machine Learning aplicado</p>
          <h2>Modelos desenvolvidos</h2>
        </div>
        <div className="models-grid">
          {models.map((model) => (
            <article key={model.title} className="model-card">
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <div className="metric-row">
                {model.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="evidencias">
        <div className="section-header">
          <p className="eyebrow">Evidencias visuais</p>
          <h2>Graficos e analises do estudo</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.src} className="gallery-item">
              <img src={item.src} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-block" id="materiais">
        <div className="section-header">
          <p className="eyebrow">Entrega do projeto</p>
          <h2>Relatorios e apresentacao</h2>
        </div>
        <div className="materials-list">
          {materials.map((material) => (
            <a
              key={material.href}
              className="material-link"
              href={material.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{material.title}</span>
              <strong>{material.type}</strong>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Projeto por Rafael Dutra: Foco em analise de negocio, operacao e ML.</p>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </div>
  )
}

export default App
