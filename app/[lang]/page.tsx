import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, SUPPORTED_LANGUAGES, type Language } from '@/src/i18n/translations';

const APP_STORE_URL = 'https://apple.co/3Rwisns';

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
    <div className="home">
      {/* Top bar: nav (left), logo (center), language switcher (right) */}
      <header className="topbar">
        <nav className="nav-pill" aria-label="Main navigation">
          <Link href={`/${lang}`} className="nav-link active">
            {t.nav.home}
          </Link>
          <Link href={`/${lang}/pricing`} className="nav-link">
            {t.nav.pricing}
          </Link>
        </nav>

        <Link href={`/${lang}`} className="topbar__logo" aria-label="Stirr">
          <Image src="/StirrLogoFinal3.png" alt="Stirr" width={120} height={120} priority />
        </Link>

        <nav className="lang-switcher lang-switcher--light" aria-label="Language selector">
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

      {/* Hero */}
      <main className="home-hero">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="store-badge animate-fade-in"
          aria-label={t.home.appStoreAlt}
        >
          <img src={`/${lang}-black.svg`} alt={t.home.appStoreAlt} />
        </a>

        <p className="home-hero__tagline animate-fade-in animate-delay-1">
          {t.home.tagline}
        </p>
        <p className="home-hero__description animate-fade-in animate-delay-1">
          {t.home.description}
        </p>

        <ul className="features animate-fade-in animate-delay-2">
          {t.home.features.map((f, i) => (
            <li key={i} className="feature">
              <span className="feature__title">{f.title}</span>
              <span className="feature__desc">{f.desc}</span>
            </li>
          ))}
        </ul>

        <div className="phones animate-fade-in animate-delay-3">
          <Image
            src={`/ThreePhone-${lang}.png`}
            alt={t.home.phonesAlt}
            width={5098}
            height={3609}
            sizes="(max-width: 900px) 100vw, 1000px"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <nav className="home-footer__links" aria-label="Legal">
          <Link href={`/${lang}/privacy`}>{t.home.privacyButton}</Link>
          <Link href={`/${lang}/terms`}>{t.home.termsButton}</Link>
          <Link href={`/${lang}/credits`}>{t.common.creditsLink}</Link>
        </nav>
        <p className="home-footer__text">{t.common.copyright}</p>
      </footer>
    </div>
  );
}
