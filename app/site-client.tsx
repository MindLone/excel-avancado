"use client";

import { useEffect, useState } from "react";

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function PlayIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5V7Z" /></svg>;
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 3.5 3.5L16 5.5" /></svg>;
}

const benefits = [
  ["Completo", "8 módulos com mais de 70 aulas"],
  ["Expert", "aprenda do zero ao avançado"],
  ["Prático", "exercícios guiados fáceis de entender"],
  ["Acessível", "use celular, tablet ou computador"],
];

const outcomes = [
  { icon: "01", title: "Organize dados com clareza", text: "Navegue, formate e estruture informações de maneira mais segura e eficiente." },
  { icon: "fx", title: "Use fórmulas com segurança", text: "Entenda a lógica por trás das fórmulas e acompanhe aplicações passo a passo." },
  { icon: "↗", title: "Crie análises visuais", text: "Transforme dados em gráficos, tabelas dinâmicas e painéis fáceis de interpretar." },
  { icon: "⚡", title: "Ganhe mais autonomia", text: "Resolva tarefas com menos dependência e avance no seu próprio ritmo." },
];

const topics = [
  ["Base", "Fundamentos e organização de dados", "Navegação, manipulação e formatação para construir uma base segura."],
  ["Fórmulas", "Fórmulas e funções", "A lógica dos cálculos e diferentes funções usadas no dia a dia."],
  ["Dados", "Textos, datas e horários", "Tratamento e organização de informações comuns em planilhas."],
  ["Busca", "Buscas e cruzamentos", "Recursos para localizar e relacionar informações em bases de dados."],
  ["Análise", "Tabelas dinâmicas", "Organização, resumo e análise de dados com mais agilidade."],
  ["Visual", "Gráficos", "Criação de gráficos para comunicar informações com clareza."],
  ["Auto", "Macros e VBA", "Primeiros passos em automação e nos fundamentos de macros e VBA."],
  ["Painéis", "Dashboards interativos", "Recursos para criar planilhas mais visuais e interativas."],
];

const audience = [
  "Está começando no Excel e precisa de uma sequência clara.",
  "Já conhece o básico, mas quer avançar em fórmulas e análises.",
  "Quer ter mais autonomia para realizar tarefas profissionais.",
  "Precisa criar planilhas, gráficos, relatórios ou controles.",
  "Deseja desenvolver uma habilidade valorizada em diferentes áreas.",
  "Prefere estudar online e no próprio ritmo.",
];

const offerItems = [
  "Curso completo do básico ao avançado",
  "Aulas em vídeo organizadas por módulos",
  "Apostila digital para consulta",
  "Arquivos práticos de treinamento",
  "Acervo de planilhas editáveis",
  "Emissão do documento de conclusão",
];

const faqs = [
  ["Preciso saber Excel antes de começar?", "Não. O treinamento começa pelos fundamentos e avança gradualmente até conteúdos mais completos."],
  ["Como o conteúdo está organizado?", "As aulas seguem uma sequência progressiva, começando pelo essencial e avançando por diferentes recursos do Excel."],
  ["Como vou receber o acesso?", "Após a confirmação da compra, as instruções de acesso serão enviadas para o e-mail usado no pagamento."],
  ["Posso assistir pelo celular?", "Sim. A área de membros pode ser acessada pelo celular ou pelo computador conectado à internet."],
  ["O curso possui arquivos para download?", "Sim. Você recebe apostila em PDF, arquivos para praticar e o acervo bônus de planilhas editáveis."],
  ["As planilhas bônus são exercícios?", "Não. Elas formam um acervo de arquivos editáveis para explorar, adaptar e usar como referência. Os arquivos de treinamento são entregues separadamente."],
  ["Receberei certificado?", "Sim. Depois de concluir o treinamento e cumprir o período de liberação, você poderá emitir seu certificado digital de conclusão."],
  ["Como funciona a garantia?", "Você possui 7 dias para avaliar o conteúdo. Dentro desse prazo, pode solicitar o cancelamento conforme as condições apresentadas no checkout."],
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span>{question}</span><i>{open ? "−" : "+"}</i>
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  const videoEmbedUrl = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL?.trim();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const onScroll = () => setShowSticky(window.scrollY > 720);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setVideoOpen(false); setCheckoutOpen(false); setMenuOpen(false); }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  const openCheckout = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
      return;
    }
    setCheckoutOpen(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Excel Avançado — início">
          <img src="/assets/logo-excel-avancado.png" alt="Excel Avançado" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#conteudo">Conteúdo</a>
          <a href="#area-de-membros">Área de membros</a>
          <a href="#bonus">Bônus</a>
          <a className="nav-cta" href="#oferta">Quero começar</a>
        </nav>

        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação móvel">
            <a href="#conteudo" onClick={() => setMenuOpen(false)}>Conteúdo</a>
            <a href="#area-de-membros" onClick={() => setMenuOpen(false)}>Área de membros</a>
            <a href="#bonus" onClick={() => setMenuOpen(false)}>Bônus</a>
            <a href="#oferta" onClick={() => setMenuOpen(false)}>Quero começar</a>
          </nav>
        )}
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" /><div className="sheet-grid" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Curso online • do básico ao avançado</p>
            <h1>Aprenda Excel do zero e<span> avance com segurança.</span></h1>
            <p className="hero-lead">Domine planilhas, fórmulas, dashboards e automações em um treinamento online, organizado e passo a passo.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#oferta">Quero começar agora <ArrowIcon /></a>
              <a className="text-link" href="#area-de-membros">Ver o curso por dentro</a>
            </div>
            <div className="hero-trust" aria-label="Informações da oferta">
              <span>✓ Acesso online</span><span>✓ Estude no seu ritmo</span>
            </div>
          </div>

          <div className="video-wrap">
            <div className="video-label">APRESENTAÇÃO DO CURSO</div>
            <button className="video-card" type="button" onClick={() => setVideoOpen(true)} aria-label="Abrir espaço do vídeo de apresentação">
              <img src="/assets/area-de-membros.webp" alt="Prévia da área de membros do Excel Avançado" />
              <span className="video-vignette" /><span className="play-button"><PlayIcon /></span>
              <span className="video-caption"><strong>Conheça o treinamento por dentro</strong><small>Assista à apresentação</small></span>
            </button>
            <div className="video-foot"><span><i /> Conteúdo organizado</span><span>Vídeo rápido</span></div>
          </div>
        </div>
      </section>

      <section className="benefit-band" aria-label="Principais benefícios">
        <div className="shell benefit-grid">
          {benefits.map(([value, label], index) => (
            <div className="benefit-item" key={label}><span className="benefit-index">0{index + 1}</span><div><strong>{value}</strong><small>{label}</small></div></div>
          ))}
        </div>
      </section>

      <section className="intro" id="conteudo">
        <div className="shell intro-grid" data-reveal>
          <p className="section-kicker">UMA SEQUÊNCIA CLARA PARA AVANÇAR</p>
          <h2>O Excel não precisa continuar sendo um obstáculo na sua rotina.</h2>
          <p>Você aprende os fundamentos, acompanha a aplicação e avança por recursos mais completos sem depender de conhecimento prévio.</p>
        </div>
      </section>

      <section className="outcomes section-pad">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div><p className="section-kicker">DO PRIMEIRO CONTATO À AUTONOMIA</p><h2>Transforme tarefas confusas em planilhas muito mais completas.</h2></div>
            <p>Desenvolva habilidades que podem ser aplicadas no trabalho, nos estudos e na organização do dia a dia.</p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((item) => (
              <article className="outcome-card" key={item.title} data-reveal>
                <span className="card-symbol">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><i />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="curriculum section-pad">
        <div className="curriculum-atmosphere" />
        <div className="shell">
          <div className="section-heading compact" data-reveal>
            <div><p className="section-kicker">CONTEÚDO ORGANIZADO POR ETAPAS</p><h2>Dos fundamentos a recursos mais avançados do Excel.</h2></div>
            <p>Uma sequência progressiva para começar pelo essencial e avançar no seu ritmo, sem uma grade cansativa e confusa.</p>
          </div>
          <div className="topic-grid">
            {topics.map(([tag, title, text], index) => (
              <article className="topic-card" key={title} data-reveal>
                <div className="topic-top"><span>{tag}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="center-action" data-reveal><a className="secondary-button" href="#oferta">Quero ter acesso ao curso <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="materials section-pad" id="bonus">
        <div className="shell materials-grid">
          <div className="materials-visual" data-reveal>
            <div className="portrait-frame"><img src="/assets/planilhas-bonus.webp" alt="Acervo com mais de cinco mil planilhas bônus editáveis" /></div>
          </div>
          <div className="materials-copy" data-reveal>
            <p className="section-kicker">MATERIAIS PARA APRENDER E PRATICAR</p>
            <h2>Você não recebe apenas as videoaulas.</h2>
            <p className="copy-lead">O treinamento reúne materiais para consultar conceitos, colocar os fundamentos em prática e explorar novas possibilidades no Excel.</p>
            <div className="material-list">
              <div><span>01</span><div><h3>Apostila digital em PDF</h3><p>Um material complementar para consultar durante os estudos.</p></div></div>
              <div><span>02</span><div><h3>Material prático de treinamento</h3><p>Arquivos preparados para exercitar fundamentos apresentados nas aulas.</p></div></div>
              <div><span>03</span><div><h3>Acervo de planilhas editáveis</h3><p>Mais de 5 mil modelos variados para explorar, adaptar e usar como referência.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="members section-pad" id="area-de-membros">
        <div className="members-bg" />
        <div className="shell">
          <div className="members-copy" data-reveal>
            <p className="section-kicker">OLHA COMO É A ÁREA DE MEMBROS</p>
            <h2>Todo o conteúdo organizado em um ambiente simples de usar.</h2>
            <p>Assim que a compra for confirmada, você recebe as instruções por e-mail. Dentro da plataforma, aulas e materiais ficam separados para você encontrar tudo com facilidade.</p>
            <div className="members-points"><span>✓ Aulas por módulos</span><span>✓ Computador ou celular</span><span>✓ Continue de onde parou</span></div>
          </div>
          <div className="members-device" data-reveal>
            <div className="browser-bar"><i /><i /><i /><span>Área de membros • Excel Avançado</span></div>
            <img src="/assets/area-de-membros-real.webp" alt="Tela real da área de membros do curso Excel Avançado" />
          </div>
        </div>
      </section>

      <section className="certificate section-pad">
        <div className="shell certificate-grid">
          <div className="certificate-copy" data-reveal>
            <p className="section-kicker">CONCLUSÃO RECONHECIDA</p>
            <h2>Finalize o treinamento e registre sua conquista.</h2>
            <p>Depois de concluir o curso e cumprir o período de liberação, você poderá emitir seu certificado digital com o nome informado no cadastro.</p>
            <div className="certificate-note"><span><CheckIcon /></span><p><strong>Emissão inclusa</strong><small>Sem cobrança adicional na conclusão.</small></p></div>
          </div>
          <div className="certificate-visual" data-reveal><div className="gold-glow" /><img src="/assets/certificado-novo.webp" alt="Modelo do certificado de conclusão do Excel Avançado" /></div>
        </div>
      </section>

      <section className="audience section-pad">
        <div className="shell audience-grid">
          <div className="audience-title" data-reveal><p className="section-kicker">PARA QUEM É</p><h2>Este treinamento foi pensado para você que quer avançar com clareza.</h2><p>Você não precisa ser bom em matemática nem ter experiência prévia.</p></div>
          <div className="audience-list">
            {audience.map((item, index) => <div key={item} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><i><CheckIcon /></i></div>)}
          </div>
        </div>
      </section>

      <section className="offer section-pad" id="oferta">
        <div className="offer-glow" />
        <div className="shell offer-shell">
          <div className="offer-heading" data-reveal><p className="section-kicker">OFERTA DE LANÇAMENTO</p><h2>Comece hoje a desenvolver suas habilidades no Excel.</h2><p>Uma única inscrição reúne as aulas, materiais e bônus para você avançar de forma organizada.</p></div>
          <div className="offer-card" data-reveal>
            <div className="offer-list"><p>Você recebe:</p>{offerItems.map((item) => <div key={item}><span><CheckIcon /></span>{item}</div>)}</div>
            <div className="price-box">
              <span className="price-label">PAGAMENTO ÚNICO</span>
              <div className="price"><small>R$</small><strong>97</strong><i>,00</i></div>
              <p>Oferta de lançamento</p>
              <button className="primary-button checkout-button" type="button" onClick={openCheckout}>Quero me inscrever agora <ArrowIcon /></button>
              <small className="access-note">Acesso enviado por e-mail após a confirmação do pagamento.</small>
            </div>
          </div>
          <div className="guarantee" data-reveal>
            <div className="guarantee-seal"><span>7</span><small>DIAS</small></div>
            <div><h3>Você tem 7 dias para conhecer o treinamento.</h3><p>Acesse o conteúdo e avalie com calma. Se decidir não continuar dentro do prazo, solicite o cancelamento conforme as condições do checkout.</p></div>
          </div>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="shell faq-grid">
          <div className="faq-heading" data-reveal><p className="section-kicker">PERGUNTAS FREQUENTES</p><h2>O que você precisa saber antes de começar.</h2><p>Ainda ficou alguma dúvida? As respostas principais estão aqui.</p></div>
          <div className="faq-list" data-reveal>{faqs.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-grid" />
        <div className="shell" data-reveal><p>Comece pelos fundamentos. Avance no seu ritmo.</p><h2>O melhor momento para deixar de adiar o Excel é agora.</h2><a className="primary-button" href="#oferta">Começar meu treinamento <ArrowIcon /></a><small>Acesso online • Estude no seu ritmo</small></div>
      </section>

      <footer className="footer">
        <div className="shell footer-top"><img src="/assets/logo-excel-avancado.png" alt="Excel Avançado" /><p>Curso online completo do básico ao avançado.</p><nav aria-label="Links legais"><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav></div>
        <div className="shell footer-bottom"><span>© 2026 Excel Avançado. Todos os direitos reservados.</span><span>Curso livre online do básico ao avançado.</span></div>
      </footer>

      <button className={`mobile-sticky ${showSticky ? "show" : ""}`} type="button" onClick={openCheckout}>Quero começar <ArrowIcon /></button>

      {videoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Vídeo de apresentação">
          <button className="modal-backdrop" type="button" onClick={() => setVideoOpen(false)} aria-label="Fechar vídeo" />
          <div className="modal-panel"><button className="modal-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Fechar"><CloseIcon /></button><div className="video-slot">{videoEmbedUrl ? <iframe src={videoEmbedUrl} title="Apresentação do curso Excel Avançado" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <><div className="slot-icon"><PlayIcon /></div><strong>Espaço preparado para o seu vídeo</strong><p>O player em 16:9 será colocado aqui quando você configurar o link.</p></>}</div></div>
        </div>
      )}

      {checkoutOpen && (
        <div className="checkout-modal" role="dialog" aria-modal="true" aria-label="Conectar checkout">
          <button className="modal-backdrop" type="button" onClick={() => setCheckoutOpen(false)} aria-label="Fechar" />
          <div className="checkout-panel">
            <button className="modal-close" type="button" onClick={() => setCheckoutOpen(false)} aria-label="Fechar"><CloseIcon /></button>
            <span className="checkout-icon">EA</span><p className="section-kicker">BOTÃO DE COMPRA PREPARADO</p><h3>Falta apenas conectar o link do seu checkout.</h3><p>Quando você enviar o link da Kiwify, este botão levará o visitante diretamente para o pagamento.</p><button type="button" className="secondary-button" onClick={() => setCheckoutOpen(false)}>Entendi</button>
          </div>
        </div>
      )}
    </main>
  );
}
