"use client";

import { useState } from "react";

const ASSET_BASE = "https://excelpratico.shop/assets";

const gallery = [
  ["dashboards/dashboard_01.webp", "Dashboard Financeiro"],
  ["dashboards/dashboard_02.webp", "Dashboard de Vendas"],
  ["dashboards/dashboard_03.webp", "Gestão e KPIs"],
  ["dashboards/dashboard_04.webp", "Fluxo de Caixa"],
  ["planilhas/planilha_01-v2.webp", "Controle Financeiro"],
  ["planilhas/planilha_02-v2.webp", "Precificação"],
  ["planilhas/planilha_03-v2.webp", "Planejamento"],
  ["planilhas/planilha_04-v2.webp", "Clientes"],
];

const reviews = [
  "avaliacoes/bruno-eva-wellyton.webp",
  "avaliacoes/ingara-fernando.webp",
  "avaliacoes/hudsson-josi.webp",
  "avaliacoes/welbert-luana-bazar.webp",
];

function Brand() {
  return (
    <div className="brand" aria-label="Excel Avançado">
      <span className="brand-icon">X</span>
      <span><strong>EXCEL</strong><small>AVANÇADO</small></span>
    </div>
  );
}

export function LandingPage() {
  const [openReview, setOpenReview] = useState<string | null>(null);
  const basicCheckout = process.env.NEXT_PUBLIC_CHECKOUT_BASICO?.trim();
  const completeCheckout = process.env.NEXT_PUBLIC_CHECKOUT_COMPLETO?.trim() || process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();

  const go = (url?: string) => {
    if (url) window.location.href = url;
  };

  return (
    <main>
      <div className="promo-bar">CONDIÇÃO ESPECIAL DISPONÍVEL HOJE — PAGAMENTO ÚNICO</div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy-wrap">
            <Brand />
            <p className="eyebrow">CURSO + BIBLIOTECA COMPLETA</p>
            <h1>Aprenda Excel e receba <span>50 MIL planilhas editáveis.</span></h1>
            <p className="hero-subtitle">Curso Excel Avançado, dashboards e materiais prontos para estudar, praticar e usar.</p>
            <div className="hero-points"><span>Curso online</span><span>50 mil planilhas</span><span>Dashboards + bônus</span></div>
            <a className="cta cta-primary" href="#ofertas">QUERO VER OS PACOTES →</a>
          </div>

          <div className="hero-visual" aria-label="Pacote Excel Avançado">
            <div className="hero-glow" />
            <div className="course-box">
              <span>CURSO COMPLETO</span>
              <b>X</b>
              <p>EXCEL</p>
              <h3>AVANÇADO</h3>
              <small>do básico ao avançado</small>
            </div>
            <div className="hero-stat hero-stat-a"><strong>50 MIL+</strong><span>planilhas editáveis</span></div>
            <div className="hero-stat hero-stat-b"><strong>+ BÔNUS</strong><span>dashboards e templates</span></div>
          </div>
        </div>
      </section>

      <section className="section benefit-strip">
        <div className="container benefit-grid">
          <article><span>01</span><h3>Aprenda</h3><p>Curso organizado do básico ao avançado.</p></article>
          <article><span>02</span><h3>Pratique</h3><p>Use materiais e arquivos reais.</p></article>
          <article><span>03</span><h3>Leve junto</h3><p>50 mil planilhas e bônus editáveis.</p></article>
        </div>
      </section>

      <section className="section showcase">
        <div className="container container-wide">
          <div className="section-heading center">
            <p className="eyebrow">VEJA NA PRÁTICA</p>
            <h2>Planilhas e dashboards que já vêm no pacote.</h2>
            <p>Escolha, edite com seus dados e use.</p>
          </div>
          <div className="gallery">
            {gallery.map(([src, label]) => (
              <figure className="gallery-card" key={src}>
                <img src={`${ASSET_BASE}/${src}`} alt={label} loading="lazy" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="swipe-hint">← deslize para ver mais →</div>
        </div>
      </section>

      <section className="section extras">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow eyebrow-light">NO PACOTE COMPLETO</p>
            <h2>Mais conteúdo. Quase o mesmo preço.</h2>
          </div>
          <div className="extras-grid">
            <article><b>50 MIL</b><span>Planilhas</span></article>
            <article><b>50 MIL</b><span>Slides PowerPoint</span></article>
            <article><b>4 MIL</b><span>Modelos Word</span></article>
            <article><b>800</b><span>Templates Power BI</span></article>
          </div>
        </div>
      </section>

      <section className="section pricing" id="ofertas">
        <div className="container container-pricing">
          <div className="section-heading center">
            <p className="eyebrow">ESCOLHA SEU ACESSO</p>
            <h2>Comece pelo curso ou leve o pacote completo.</h2>
          </div>

          <div className="price-grid">
            <article className="price-card price-basic">
              <div className="plan-head">
                <p className="plan-kicker">OPÇÃO DE ENTRADA</p>
                <h3>CURSO</h3>
                <p>Para quem quer apenas aprender Excel.</p>
              </div>
              <div className="mini-course"><span>X</span><strong>EXCEL AVANÇADO</strong></div>
              <ul className="feature-list">
                <li>Curso Excel Avançado</li>
                <li>Aulas do básico ao avançado</li>
                <li>Material de apoio</li>
              </ul>
              <div className="price-row"><span>Pagamento único</span><strong><small>R$</small> 10</strong></div>
              <button className="cta cta-secondary" type="button" onClick={() => go(basicCheckout)}>QUERO O CURSO</button>
            </article>

            <article className="price-card price-complete">
              <div className="value-badge">MELHOR OPÇÃO</div>
              <div className="plan-head">
                <p className="plan-kicker">PACOTE COMPLETO</p>
                <h3>CURSO + 50 MIL</h3>
                <p>Curso completo com toda a biblioteca e bônus.</p>
              </div>
              <div className="mini-course mini-course-premium"><span>X</span><strong>EXCEL AVANÇADO</strong><em>+ 50 MIL PLANILHAS</em></div>
              <ul className="feature-list feature-list-strong">
                <li><strong>Curso Excel Avançado</strong></li>
                <li><strong>50 mil planilhas editáveis</strong></li>
                <li>Dashboards</li>
                <li>50 mil slides PowerPoint</li>
                <li>4 mil modelos Word</li>
                <li>800 templates Power BI</li>
                <li>Materiais extras</li>
              </ul>
              <div className="price-row price-row-complete"><span>Pagamento único</span><strong><small>R$</small> 19,90</strong></div>
              <button className="cta cta-primary" type="button" onClick={() => go(completeCheckout)}>SIM, QUERO O PACOTE COMPLETO</button>
              <div className="security-line"><span>Compra segura</span><span>7 dias de garantia</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow eyebrow-light">CLIENTES</p>
            <h2>Veja algumas avaliações.</h2>
          </div>
          <div className="reviews-track">
            {reviews.map((src) => (
              <button className="review-card" key={src} type="button" onClick={() => setOpenReview(src)}>
                <img src={`${ASSET_BASE}/${src}`} alt="Avaliação de cliente" loading="lazy" />
              </button>
            ))}
          </div>
          <p className="reviews-hint">Deslize para ver mais. Toque para ampliar.</p>
        </div>
      </section>

      <section className="section guarantee">
        <div className="container guarantee-card">
          <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
          <div><p className="eyebrow">GARANTIA</p><h2>Conheça o conteúdo por 7 dias.</h2></div>
        </div>
      </section>

      <section className="section faq">
        <div className="container container-narrow">
          <div className="section-heading center"><p className="eyebrow eyebrow-light">DÚVIDAS</p><h2>Perguntas frequentes</h2></div>
          <div className="faq-list">
            <details><summary>Preciso saber Excel antes?<span>+</span></summary><p>Não. O curso começa pela base e avança progressivamente.</p></details>
            <details><summary>As 50 mil planilhas estão no plano de R$19,90?<span>+</span></summary><p>Sim. Elas fazem parte do Pacote Completo.</p></details>
            <details><summary>O pagamento é mensal?<span>+</span></summary><p>Não. Os valores desta página são de pagamento único.</p></details>
            <details><summary>Como recebo o acesso?<span>+</span></summary><p>Após a confirmação da compra, o acesso é enviado para o e-mail usado no pagamento.</p></details>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><Brand /><p>Curso Excel Avançado + materiais editáveis.</p></div>
          <div className="footer-links"><a href="mailto:excelavancadoea@gmail.com">excelavancadoea@gmail.com</a><a href="/politica-de-privacidade">Política de Privacidade</a></div>
        </div>
        <div className="container footer-legal"><small>© 2026 Excel Avançado. Todos os direitos reservados.</small></div>
      </footer>

      {openReview && (
        <div className="review-modal" role="dialog" aria-modal="true" onClick={() => setOpenReview(null)}>
          <button type="button" aria-label="Fechar" onClick={() => setOpenReview(null)}>×</button>
          <img src={`${ASSET_BASE}/${openReview}`} alt="Avaliação ampliada" />
        </div>
      )}
    </main>
  );
}
