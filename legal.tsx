type LegalSection = { title: string; paragraphs?: string[]; items?: string[] };

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="/" aria-label="Voltar ao início"><img src="/assets/logo-excel-avancado.png" alt="Excel Avançado" /></a>
        <a className="legal-back" href="/">← Voltar ao site</a>
      </header>
      <section className="legal-hero">
        <div className="legal-grid" />
        <div className="legal-shell">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Última atualização: 11 de agosto de 2026</span>
        </div>
      </section>
      <article className="legal-content legal-shell">
        {sections.map((section, index) => (
          <section key={section.title}>
            <div className="legal-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </div>
          </section>
        ))}
      </article>
      <footer className="legal-footer"><div className="legal-shell"><span>© 2026 Excel Avançado</span><div><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div></div></footer>
    </main>
  );
}
