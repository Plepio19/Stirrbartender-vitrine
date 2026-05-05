import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, SUPPORTED_LANGUAGES, type Language } from '@/src/i18n/translations';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  return {
    title: t.meta.termsTitle,
    description: t.meta.description,
  };
}

export default function TermsPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);

  return (
    <div className="legal-page">
      {/* Header */}
      <header className="header header--light">
        <Link href={`/${lang}`} className="logo">
          stirr
        </Link>
        <nav className="lang-switcher" aria-label="Language selector">
          {SUPPORTED_LANGUAGES.map((l) => (
            <Link
              key={l}
              href={`/${l}/terms`}
              className={`lang-btn ${l === lang ? 'active' : ''}`}
              aria-current={l === lang ? 'page' : undefined}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="legal-content">
        <Link href={`/${lang}`} className="back-link">
          {t.common.backHome}
        </Link>

        <header className="legal-header">
          <h1 className="legal-title">{t.terms.title}</h1>
          <p className="legal-date">{t.common.effectiveDate}</p>
        </header>

        <p className="legal-intro">{t.terms.intro}</p>

        {t.terms.sections.map((section, index) => (
          <section key={index} className="legal-section">
            <h2 className="legal-section__title">{section.title}</h2>
            <p className="legal-section__content">{section.content}</p>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer footer--light">
        <Link href={`/${lang}/credits`} className="footer__credits-link footer__credits-link--light">
          {t.common.creditsLink}
        </Link>
        <p className="footer__text">{t.common.copyright}</p>
      </footer>
    </div>
  );
}

