import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, FileText, Mail, Menu, X } from 'lucide-react'
import '@fontsource-variable/bodoni-moda'
import '@fontsource-variable/manrope'
import {
  APROVACAO,
  AVISO_PRODUTOS,
  CAMPANHA,
  CONDICOES,
  DESTAQUES_RESTRICOES,
  DOCUMENTOS,
  FAQ,
  LINHAS,
  MAILTO_SAC,
  PASSOS,
} from './content/campanha'
import { RegulamentoLeitor } from './components/RegulamentoLeitor'

const base = import.meta.env.BASE_URL
const romanos = ['i', 'ii', 'iii', 'iv', 'v', 'vi']

const NAV = [
  { href: '#garantia', label: 'A garantia' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#condicoes', label: 'Condições' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function App() {
  const [menu, setMenu] = useState(false)
  const [regAberto, setRegAberto] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const abrirRegulamento = () => {
    setMenu(false)
    setRegAberto(true)
  }

  return (
    <>
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>

      {APROVACAO.modoAprovacao && (
        <p className="faixa-aprovacao" role="note">
          Proposta criativa para avaliação interna · Conteúdo sujeito à aprovação final do regulamento
        </p>
      )}

      <header className="topo">
        <div className="topo-inner">
          <a href="#inicio" className="topo-logo" aria-label="FranceFarma Cosméticos — início">
            <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" />
          </a>
          <nav id="menu-principal" className={`topo-nav ${menu ? 'aberto' : ''}`} aria-label="Principal">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenu(false)}>{n.label}</a>
                </li>
              ))}
            </ul>
            <button type="button" className="topo-reg" onClick={abrirRegulamento}>
              Regulamento
            </button>
          </nav>
          <button
            type="button"
            className="topo-menu"
            aria-expanded={menu}
            aria-controls="menu-principal"
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{menu ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO ------------------------------------------------------- */}
        <section id="inicio" className="hero" aria-labelledby="hero-titulo">
          <div className="hero-texto">
            <p className="kicker">
              <span>Campanha FranceFarma</span>
              <span aria-hidden="true">·</span>
              <span>Goiás</span>
              <span aria-hidden="true">·</span>
              <span>Compras de 14.09 a 31.12.2026</span>
            </p>
            <h1 id="hero-titulo">
              Satisfação garantida <em>ou seu dinheiro de volta.</em>
            </h1>
            <p className="hero-sub">
              Experimente os produtos participantes com tranquilidade. Se depois de usar você não ficar satisfeito, pode
              pedir o reembolso do valor pago, seguindo as condições do regulamento.
            </p>
            <div className="hero-ctas">
              <a href="#condicoes" className="btn btn-pri">
                Conheça as regras <ArrowRight aria-hidden="true" />
              </a>
              <a href="#produtos" className="btn btn-sec">
                Ver produtos participantes
              </a>
            </div>
            <p className="hero-nota">
              Para consumidores residentes em Goiás, maiores de 18 anos. Até 2 unidades por CPF. Pedido em até 30 dias da
              compra, com nota fiscal e devolução do produto na embalagem original.
            </p>
          </div>

          <figure className="hero-arte" aria-label="Composição com embalagens de produtos participantes">
            <div className="arco arco-a" aria-hidden="true" />
            <div className="arco arco-b" aria-hidden="true" />
            <div className="pedestal" aria-hidden="true" />
            <img
              className="p p-1"
              src={`${base}img/produtos/vid-hidratante-ureia.webp`}
              alt="Hidratante corporal Vidália"
              width="256"
              height="760"
              fetchPriority="high"
            />
            <img
              className="p p-2"
              src={`${base}img/produtos/vid-sabonete-facial.webp`}
              alt="Sabonete facial Vidália"
              width="150"
              height="553"
            />
            <img
              className="p p-3"
              src={`${base}img/produtos/intimo-suave.webp`}
              alt="Sabonete íntimo Íntimo pH"
              width="265"
              height="760"
            />
            <figcaption>Imagens ilustrativas · Produtos do Anexo I</figcaption>
          </figure>
        </section>

        {/* GARANTIA --------------------------------------------------- */}
        <section id="garantia" className="garantia" aria-labelledby="garantia-titulo">
          <p className="rotulo">A garantia</p>
          <blockquote className="manifesto">
            <p>Você conhece o produto na sua pele, no seu cabelo, na sua rotina. <em>A gente respeita a sua opinião.</em></p>
          </blockquote>
          <div className="garantia-cols">
            <div>
              <h2 id="garantia-titulo">Mais confiança para experimentar</h2>
              <p>
                A campanha foi criada para que você experimente os produtos participantes com confiança. Se, depois de
                usar conforme as instruções da embalagem, você não ficar satisfeito, pode solicitar ao SAC da FranceFarma
                o reembolso do valor efetivamente pago pelo produto.
              </p>
              <p>
                O motivo da insatisfação é seu: a análise verifica apenas os requisitos do regulamento e indícios de
                fraude, sem julgar a sua opinião sobre o produto.
              </p>
            </div>
            <ul className="lista-fina" aria-label="Pontos importantes">
              {DESTAQUES_RESTRICOES.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMO FUNCIONA ---------------------------------------------- */}
        <section id="como-funciona" className="passos" aria-labelledby="passos-titulo">
          <header className="sec-cab">
            <p className="rotulo">Como funciona</p>
            <h2 id="passos-titulo">Seis passos, do carrinho ao reembolso</h2>
          </header>
          <ol className="passos-lista">
            {PASSOS.map((p, i) => (
              <li key={p.titulo}>
                <span className="passo-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                  <p className="clausula">{p.clausula}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PRODUTOS --------------------------------------------------- */}
        <section id="produtos" className="produtos" aria-labelledby="produtos-titulo">
          <header className="sec-cab">
            <p className="rotulo">Produtos participantes · Anexo I</p>
            <h2 id="produtos-titulo">A seleção da campanha</h2>
            <p className="sec-intro">{AVISO_PRODUTOS}</p>
          </header>
          <div className="linhas">
            {LINHAS.map((l, i) => (
              <article key={l.id} className={`linha linha-${l.id}`}>
                <div className="linha-vitrine">
                  {l.imagens.map((im) => (
                    <img key={im.src} src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                  ))}
                </div>
                <div className="linha-info">
                  <span className="linha-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{l.nome}</h3>
                  <p className="linha-desc">{l.descricao}</p>
                  <ul>
                    {l.itens.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONDIÇÕES -------------------------------------------------- */}
        <section id="condicoes" className="condicoes" aria-labelledby="condicoes-titulo">
          <header className="sec-cab">
            <p className="rotulo">Condições principais</p>
            <h2 id="condicoes-titulo">O que você precisa saber antes de pedir</h2>
          </header>
          <dl className="cond-tabela">
            {CONDICOES.map((c) => (
              <div key={c.rotulo} className="cond-linha">
                <dt>{c.rotulo}</dt>
                <dd>
                  <strong>{c.valor}</strong>
                  <span>{c.detalhe}</span>
                  <small>Cláusula {c.clausula}</small>
                </dd>
              </div>
            ))}
          </dl>
          <p className="cond-aviso">
            O reembolso depende de análise e do cumprimento cumulativo das condições da cláusula 9. Não são aceitas
            solicitações sem nota ou cupom fiscal, com compra fora da vigência, embalagem descartada, conteúdo totalmente
            consumido, uso em desacordo com as instruções, indício de adulteração ou compra para revenda ou em nome de
            pessoa jurídica (cláusula 10).
          </p>
        </section>

        {/* DOCUMENTOS ------------------------------------------------- */}
        <section id="documentos" className="documentos" aria-labelledby="docs-titulo">
          <div className="docs-cab">
            <p className="rotulo">Documentos</p>
            <h2 id="docs-titulo">Separe antes de escrever ao SAC</h2>
            <p>Tudo em formato digital, anexado ao e-mail da solicitação.</p>
          </div>
          <ol className="docs-lista">
            {DOCUMENTOS.map((d, i) => (
              <li key={d.titulo}>
                <span className="docs-num" aria-hidden="true">{romanos[i]}.</span>
                <div>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SAC -------------------------------------------------------- */}
        <section id="sac" className="sac" aria-labelledby="sac-titulo">
          <div className="sac-inner">
            <p className="rotulo rotulo-claro">Solicitação</p>
            <h2 id="sac-titulo">
              Não ficou satisfeito? <em>Escreva para o SAC.</em>
            </h2>
            <p>
              O canal indicado no regulamento para enviar a solicitação é o e-mail <strong>{CAMPANHA.sacEmail}</strong>.
              O botão abaixo abre o seu programa de e-mail com um roteiro do que enviar; você anexa os documentos e envia
              pela sua conta. Este site não recebe nem processa solicitações.
            </p>
            <a href={MAILTO_SAC} className="btn btn-claro">
              <Mail aria-hidden="true" /> Escrever para {CAMPANHA.sacEmail}
            </a>
            <p className="sac-prazo">Prazo: até 30 dias corridos da emissão da nota fiscal (cláusula 6.2).</p>
          </div>
        </section>

        {/* FAQ -------------------------------------------------------- */}
        <section id="duvidas" className="faq" aria-labelledby="faq-titulo">
          <header className="sec-cab">
            <p className="rotulo">Perguntas frequentes</p>
            <h2 id="faq-titulo">Dúvidas comuns</h2>
          </header>
          <div className="faq-lista">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>
                  <span>{f.p}</span>
                  <span className="faq-icone" aria-hidden="true" />
                </summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* REGULAMENTO ------------------------------------------------ */}
        <section id="regulamento" className="regulamento" aria-labelledby="reg-sec-titulo">
          <div className="reg-sec-texto">
            <p className="rotulo">Regulamento</p>
            <h2 id="reg-sec-titulo">As regras completas, sem letras miúdas</h2>
            <p>
              A participação implica a aceitação integral do regulamento. Leia a íntegra no próprio site ou baixe o
              arquivo.
            </p>
            {APROVACAO.modoAprovacao && <p className="reg-status">{APROVACAO.versaoRegulamento}</p>}
          </div>
          <div className="reg-sec-acoes">
            <button type="button" className="btn btn-pri" onClick={() => setRegAberto(true)}>
              <FileText aria-hidden="true" /> Ler regulamento completo
            </button>
            <a href={CAMPANHA.regulamentoPdf} className="btn btn-sec" download>
              Baixar regulamento em PDF
            </a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-inner">
          <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" loading="lazy" />
          <div>
            <p className="rodape-camp">Campanha “{CAMPANHA.nome}”</p>
            <p>{CAMPANHA.avisoParticipacao}</p>
          </div>
          <ul className="rodape-links">
            <li>
              <button type="button" onClick={() => setRegAberto(true)}>Regulamento</button>
            </li>
            <li>
              <a href={`mailto:${CAMPANHA.sacEmail}`}>{CAMPANHA.sacEmail}</a>
            </li>
            <li>
              <a href={CAMPANHA.siteOficial} target="_blank" rel="noopener noreferrer">
                francefarma.com.br <ArrowUpRight aria-hidden="true" />
                <span className="sr"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="rodape-legal">
          Promotora: {CAMPANHA.promotora}. A campanha não é sorteio, concurso ou vale-brinde e não substitui os direitos
          previstos no Código de Defesa do Consumidor.
        </p>
      </footer>

      <RegulamentoLeitor aberto={regAberto} onFechar={() => setRegAberto(false)} />
    </>
  )
}
