"use client";

import { useEffect, useMemo, useState } from "react";

const ASSET_BASE = "https://excelpratico.shop/assets";

const curriculum = [
  ["01", "Fundamentos bem organizados", "Comece pela base certa: interface, células, referências, formatação e organização de dados."],
  ["02", "Fórmulas e funções", "Aprenda a construir cálculos, combinar funções e resolver tarefas com mais segurança."],
  ["03", "Busca e tratamento de dados", "Trabalhe com textos, datas, filtros, validações, buscas e cruzamentos de informações."],
  ["04", "Tabelas e análises", "Organize bases maiores e transforme dados em informações úteis para decisões e relatórios."],
  ["05", "Gráficos e visualização", "Crie apresentações visuais mais claras, profissionais e fáceis de interpretar."],
  ["06", "Tabelas dinâmicas", "Resuma grandes volumes de informação e monte análises com muito mais agilidade."],
  ["07", "Dashboards", "Estruture painéis para acompanhar indicadores, metas, resultados e evolução."],
  ["08", "Automação e recursos avançados", "Avance para recursos que reduzem tarefas repetitivas e ampliam sua autonomia no Excel."],
];

const gallery = [
  ["dashboards/dashboard_01.webp", "Dashboard Financeiro"],
  ["dashboards/dashboard_02.webp", "Dashboard de Vendas"],
  ["dashboards/dashboard_03.webp", "Gestão e KPIs"],
  ["dashboards/dashboard_04.webp", "Fluxo de Caixa"],
  ["dashboards/dashboard_05.webp", "Orçamento"],
  ["dashboards/dashboard_06.webp", "Estoque"],
  ["planilhas/planilha_01-v2.webp", "Controle Financeiro"],
  ["planilhas/planilha_02-v2.webp", "Precificação"],
  ["planilhas/planilha_03-v2.webp", "Planejamento Mensal"],
  ["planilhas/planilha_04-v2.webp", "Cadastro de Clientes"],
];

const reviews = [
  ["avaliacoes/bruno-eva-wellyton.webp", "Avaliações de Bruno, Eva e Wellyton"],
  ["avaliacoes/ingara-fernando.webp", "Avaliações de Ingara e Fernando"],
  ["avaliacoes/hudsson-josi.webp", "Avaliações de Hudsson e Josi"],
  ["avaliacoes/welbert-luana-bazar.webp", "Avaliações de Welbert, Luana e Bazar Tucum"],
];

const faqs = [
  ["Preciso já saber Excel?", "Não. A estrutura começa pelos fundamentos e avança progressivamente até recursos mais completos."],
  ["O curso é online?", "Sim. O acesso é feito pela área de membros e pode ser acompanhado no seu ritmo pelo computador ou celular."],
  ["As 75 mil planilhas fazem parte da compra?", "Sim. O pacote de planilhas editáveis é entregue junto com o curso como material complementar da oferta."],
  ["O que mais acompanha o curso?", "Além das aulas e das planilhas, a oferta reúne dashboards e materiais extras, incluindo modelos para PowerPoint, Word e Power BI."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado na compra."],
  ["O pagamento é mensal?", "Não. A página trabalha com uma inscrição de pagamento único; as condições finais sempre aparecem no checkout antes da confirmação."],
  ["Tem garantia?", "Sim. Você tem 7 dias para conhecer o conteúdo e pode solicitar o cancelamento dentro desse período conforme as condições do checkout."],
  ["Como funciona o suporte?", "Para dúvidas de acesso ou entrega, utilize o contato informado na área de membros e nos materiais recebidos após a compra."],
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 3.4 3.4L16 5.8" /></svg>;
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`brand-mark ${footer ? "brand-mark-footer" : ""}`} aria-label="Excel Avançado">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 48 48"><rect x="5" y="7" width="29" height="34" rx="6" /><path d="M18 16 10 32M10 16l8 16" /><path d="M31 13h11v22H31" /></svg>
      </span>
      <span className="brand-copy"><strong>EXCEL</strong><small>AVANÇADO</small></span>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="product-stage" aria-label="Curso Excel Avançado com biblioteca de planilhas e materiais extras">
      <div className="product-glow" />
      <div className="course-box">
        <div className="course-box-grid" />
        <span className="course-tag">CURSO COMPLETO</span>
        <div className="course-x">X</div>
        <p>EXCEL</p>
        <h3>AVANÇADO</h3>
        <small>Do essencial aos recursos avançados</small>
      </div>
      <div className="bonus-card bonus-card-a"><strong>75 MIL+</strong><span>planilhas editáveis</span></div>
      <div className="bonus-card bonus-card-b"><strong>+ EXTRAS</strong><span>dashboards e templates</span></div>
    </div>
  );
}

export function LandingPage() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  const [reviewOpen, setReviewOpen] = useState<string | null>(null);
  const [sticky, setSticky] = useState(false);
  const [promoText, setPromoText] = useState("CONDIÇÃO ESPECIAL DISPONÍVEL HOJE — PAGAMENTO ÚNICO");
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const now = new Date();
    const date = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" }).format(now);
    setPromoText(`CONDIÇÃO ESPECIAL DISPONÍVEL HOJE, ${date} — PAGAMENTO ÚNICO`);

    const onScroll = () => setSticky(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buy = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
      return;
    }
    setCheckoutNotice(true);
  };

  return (
    <main>
      <div className="promo-bar"><span>{promoText}</span></div>

      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <div className="container hero-grid">
          <div className="hero-copy-wrap">
            <Logo />
            <p className="eyebrow">APRENDA EXCEL DE VERDADE E LEVE UMA BIBLIOTECA COMPLETA JUNTO</p>
            <h1>Domine o Excel e receba <span>75 MIL planilhas editáveis</span> como parte do pacote.</h1>
            <p className="hero-subtitle">O foco é o <b>Curso Excel Avançado</b>: uma formação online organizada para você evoluir no Excel e ainda sair com uma biblioteca enorme de materiais prontos para usar.</p>
            <div className="hero-points"><span>Curso online completo</span><span>Planilhas, dashboards e materiais extras</span></div>
            <a className="cta cta-primary" href="#oferta">QUERO CONHECER O PACOTE <Arrow /></a>
          </div>
          <ProductVisual />
        </div>
      </section>

      <section className="section problem" aria-labelledby="problem-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">NÃO É SÓ ASSISTIR AULA. É SABER FAZER.</p>
            <h2 id="problem-title">Pare de depender de tentativa e erro toda vez que o Excel aparece na sua frente.</h2>
            <p>Fórmulas quebradas, relatórios confusos e planilhas improvisadas viram um problema quando falta uma sequência clara de aprendizado. A proposta aqui é simples: aprender, praticar e ter modelos prontos para consultar quando precisar.</p>
          </div>
          <div className="problem-grid">
            <article className="problem-item"><span className="number">01</span><div><h3>Aprenda com sequência</h3><p>O conteúdo foi organizado para você evoluir dos fundamentos até ferramentas mais avançadas sem ficar pulando de tutorial em tutorial.</p></div></article>
            <article className="problem-item"><span className="number">02</span><div><h3>Pratique com aplicação real</h3><p>Use materiais de apoio e modelos para entender como o Excel funciona fora da teoria.</p></div></article>
            <article className="problem-item"><span className="number">03</span><div><h3>Tenha uma biblioteca pronta</h3><p>Além do curso, você recebe milhares de arquivos para adaptar, estudar e usar como ponto de partida.</p></div></article>
          </div>
          <div className="section-cta"><a className="text-cta" href="#conteudo">VER O QUE VOU APRENDER <Arrow /></a></div>
        </div>
      </section>

      <section className="section course-section" id="conteudo" aria-labelledby="course-title">
        <div className="container container-wide">
          <div className="section-heading center">
            <p className="eyebrow">DO BÁSICO AOS RECURSOS MAIS AVANÇADOS</p>
            <h2 id="course-title">Um curso para transformar o Excel em uma ferramenta que você realmente sabe usar.</h2>
            <p>Você avança por etapas, entendendo a lógica por trás das ferramentas em vez de apenas decorar onde clicar.</p>
          </div>
          <div className="curriculum-grid">
            {curriculum.map(([number, title, text]) => (
              <article className="curriculum-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="section-cta"><a className="cta cta-primary" href="#oferta">QUERO ACESSAR O CURSO</a></div>
        </div>
      </section>

      <section className="section showcase" id="bonus" aria-labelledby="showcase-title">
        <div className="container container-wide">
          <div className="section-heading center">
            <p className="eyebrow">E O CURSO NÃO VEM SOZINHO</p>
            <h2 id="showcase-title">Você também recebe mais de 75 mil planilhas editáveis e dashboards.</h2>
            <p>Use a biblioteca como referência, material de prática ou ponto de partida para controles reais. Escolha o modelo, edite com seus dados e adapte ao que você precisa.</p>
          </div>
          <div className="gallery" aria-label="Prévia das planilhas e dashboards incluídos">
            {gallery.map(([src, label]) => (
              <figure className="gallery-card" key={src}><img src={`${ASSET_BASE}/${src}`} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>
            ))}
          </div>
          <div className="swipe-hint">← deslize para ver mais →</div>
        </div>
      </section>

      <section className="section categories" aria-labelledby="categories-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">MATERIAL PARA CONSULTAR SEMPRE</p>
            <h2 id="categories-title">Arquivos para diferentes áreas, rotinas e necessidades.</h2>
          </div>
          <div className="category-cloud">
            {[
              "Financeiro", "Fluxo de Caixa", "Vendas", "Estoque", "Administrativo", "RH e DP", "Gestão", "Marketing", "Contábil", "Produção", "Engenharia", "Agro", "Saúde", "Escolar", "Imóveis", "Metas", "Logística", "Serviços", "Dashboards", "Power BI", "PowerPoint", "Word"
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section extras" aria-labelledby="extras-title">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow eyebrow-light">UM PACOTE MUITO MAIOR QUE O CURSO</p>
            <h2 id="extras-title">Além das aulas, você recebe uma coleção completa de materiais digitais.</h2>
          </div>
          <div className="extras-grid">
            <article><b>75 MIL+</b><h3>Planilhas editáveis</h3><p>Modelos para finanças, gestão, vendas, estoque, organização e dezenas de outras finalidades.</p></article>
            <article><b>50 MIL</b><h3>Slides PowerPoint</h3><p>Modelos para acelerar apresentações profissionais, acadêmicas e comerciais.</p></article>
            <article><b>4 MIL</b><h3>Modelos Word</h3><p>Documentos editáveis para diferentes situações e rotinas.</p></article>
            <article><b>800</b><h3>Templates Power BI</h3><p>Materiais para explorar painéis, visualizações e projetos de dados.</p></article>
          </div>
        </div>
      </section>

      <section className="section reviews-section" aria-labelledby="reviews-title">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow">AVALIAÇÕES DE CLIENTES</p>
            <h2 id="reviews-title">Veja algumas experiências com nossos materiais.</h2>
          </div>
          <div className="reviews-mask">
            <div className="reviews-track">
              {[...reviews, ...reviews].map(([src, alt], index) => (
                <button className="review-card" type="button" key={`${src}-${index}`} onClick={() => setReviewOpen(`${ASSET_BASE}/${src}`)} aria-label={`Ampliar ${alt}`}>
                  <img src={`${ASSET_BASE}/${src}`} alt={alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <p className="reviews-hint">Toque em uma avaliação para ampliar.</p>
        </div>
      </section>

      <section className="section pricing" id="oferta" aria-labelledby="pricing-title">
        <div className="container container-pricing">
          <div className="section-heading center">
            <p className="eyebrow">A OFERTA AGORA É COMPLETA</p>
            <h2 id="pricing-title">Leve o Curso Excel Avançado e todo o pacote de materiais em uma única inscrição.</h2>
            <p>O curso é o produto principal. As planilhas, dashboards e templates entram juntos para você aprender e já ter uma biblioteca pronta para usar.</p>
          </div>
          <article className="offer-card">
            <div className="offer-main">
              <div className="value-badge">PACOTE COMPLETO</div>
              <Logo />
              <h3>CURSO EXCEL AVANÇADO</h3>
              <p className="offer-lead">Formação online + biblioteca de materiais.</p>
              <ul className="feature-list feature-list-strong">
                {[
                  "Curso completo de Excel do essencial ao avançado",
                  "Aulas organizadas para acompanhar no seu ritmo",
                  "Material extra de apoio e prática",
                  "Mais de 75 MIL planilhas editáveis",
                  "Dashboards e modelos para diferentes áreas",
                  "50 mil slides para PowerPoint",
                  "4 mil modelos editáveis no Word",
                  "800 templates para Power BI",
                  "Área de membros online",
                  "7 dias de garantia"
                ].map((item) => <li key={item}><span><Check /></span>{item}</li>)}
              </ul>
            </div>
            <div className="price-panel">
              <span className="price-label">PAGAMENTO ÚNICO</span>
              <div className="price-old">De <s>R$ 297,00</s> por</div>
              <div className="price-current"><small>R$</small><strong>147</strong><i>,00</i></div>
              <p>ou parcele conforme as condições disponíveis no checkout</p>
              <button className="cta cta-primary checkout-cta" type="button" onClick={buy}>SIM, QUERO O PACOTE COMPLETO <Arrow /></button>
              <div className="security-line"><span>7 dias de garantia</span><span>Compra segura</span><span>Acesso online</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section guarantee" aria-labelledby="guarantee-title">
        <div className="container guarantee-card">
          <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
          <div><p className="eyebrow">GARANTIA</p><h2 id="guarantee-title">Você tem 7 dias para conhecer o curso e os materiais.</h2><p>Acesse o conteúdo, avalie a entrega e, se decidir não continuar dentro do prazo, solicite o cancelamento conforme as condições apresentadas no checkout.</p></div>
        </div>
      </section>

      <section className="section faq" aria-labelledby="faq-title">
        <div className="container container-narrow">
          <div className="section-heading center"><p className="eyebrow eyebrow-light">SEM COMPLICAÇÃO</p><h2 id="faq-title">Dúvidas frequentes</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner"><p className="eyebrow eyebrow-light">PRONTO PARA COMEÇAR?</p><h2>Aprenda Excel e já tenha os materiais para colocar o conhecimento em prática.</h2><p>Curso, planilhas, dashboards e templates reunidos em um único pacote.</p><a className="cta cta-light" href="#oferta">QUERO VER A OFERTA <Arrow /></a></div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid"><div><Logo footer /><p>Curso Excel Avançado com materiais para aprender, praticar e usar no dia a dia.</p></div><div className="footer-links"><a href="mailto:excelavancadoea@gmail.com">excelavancadoea@gmail.com</a><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div></div>
        <div className="container footer-legal"><p>Este site não é afiliado ao Facebook, Instagram ou qualquer empresa do grupo Meta. Após sair dessas plataformas, a responsabilidade é exclusivamente deste site.</p><small>© {currentYear} Excel Avançado. Todos os direitos reservados.</small></div>
      </footer>

      {sticky && <a className="mobile-sticky-cta" href="#oferta">VER OFERTA <Arrow /></a>}

      {reviewOpen && (
        <div className="review-modal" role="dialog" aria-modal="true" aria-label="Avaliação ampliada" onClick={() => setReviewOpen(null)}>
          <button type="button" onClick={() => setReviewOpen(null)}>Fechar ×</button>
          <img src={reviewOpen} alt="Avaliação ampliada" onClick={(event) => event.stopPropagation()} />
        </div>
      )}

      {checkoutNotice && (
        <div className="checkout-modal" role="dialog" aria-modal="true" aria-label="Checkout não configurado" onClick={() => setCheckoutNotice(false)}>
          <div onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setCheckoutNotice(false)}>×</button><h3>Checkout em configuração</h3><p>O link de compra ainda não está disponível nesta configuração do site.</p></div>
        </div>
      )}
    </main>
  );
}
