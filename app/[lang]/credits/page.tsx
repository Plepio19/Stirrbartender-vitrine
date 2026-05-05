import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, SUPPORTED_LANGUAGES, type Language } from '@/src/i18n/translations';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  return {
    title: t.meta.creditsTitle,
    description: t.meta.description,
  };
}

export default function CreditsPage({ params }: PageProps) {
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
              href={`/${l}/credits`}
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
          <h1 className="legal-title">{t.credits.title}</h1>
        </header>

        <p className="legal-intro">{t.credits.intro}</p>

        <ul className="credits-list">
          {t.credits.items.map((item, index) => (
            <li key={index} className="credits-list__item">
              {item.name} by {item.author} from{' '}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.urlTitle}
                className="credits-link"
              >
                Noun Project
              </a>{' '}
              (CC BY 3.0)
            </li>
          ))}
        </ul>

        <p className="credits-license">
          {t.credits.license}{' '}
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="credits-link"
          >
            {t.credits.licenseLink}
          </a>.
        </p>
      </main>

      {/* Footer */}
      <footer className="footer footer--light">
        <p className="footer__text">{t.common.copyright}</p>
      </footer>
    </div>
  );
}
