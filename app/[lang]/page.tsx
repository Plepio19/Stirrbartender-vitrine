import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, SUPPORTED_LANGUAGES, type Language } from '@/src/i18n/translations';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  return {
    title: t.meta.homeTitle,
    description: t.meta.description,
  };
}

export default function HomePage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);

  return (
    <div className="gradient-bg">
      {/* Header with Language Switcher */}
      <header className="header">
        <nav className="lang-switcher" aria-label="Language selector">
          {SUPPORTED_LANGUAGES.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className={`lang-btn ${l === lang ? 'active' : ''}`}
              aria-current={l === lang ? 'page' : undefined}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1 className="hero__title animate-fade-in">
          {t.home.title}
        </h1>
        <p className="hero__slogan animate-fade-in animate-delay-1">
          {t.home.slogan}
        </p>
        
        {/* CTA Buttons */}
        <div className="cta-group animate-fade-in animate-delay-2">
          <Link href={`/${lang}/privacy`} className="btn-outline">
            {t.home.privacyButton}
          </Link>
          <Link href={`/${lang}/terms`} className="btn-outline">
            {t.home.termsButton}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <Link href={`/${lang}/credits`} className="footer__credits-link">
          {t.common.creditsLink}
        </Link>
        <p className="footer__text">{t.common.copyright}</p>
      </footer>
    </div>
  );
}

