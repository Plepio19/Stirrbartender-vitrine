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
    title: t.meta.pricingTitle,
    description: t.meta.description,
  };
}

export default function PricingPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);

  return (
    <div className="home">
      {/* Top bar */}
      <header className="topbar">
        <nav className="nav-pill" aria-label="Main navigation">
          <Link href={`/${lang}`} className="nav-link">
            {t.nav.home}
          </Link>
          <Link href={`/${lang}/pricing`} className="nav-link active">
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
              href={`/${l}/pricing`}
              className={`lang-btn ${l === lang ? 'active' : ''}`}
              aria-current={l === lang ? 'page' : undefined}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      {/* Pricing */}
      <main className="pricing">
        <div className="pricing__head">
          <span className="pricing__badge">{t.pricing.badge}</span>
          <h1 className="pricing__title">{t.pricing.title}</h1>
          <p className="pricing__subtitle">{t.pricing.subtitle}</p>
        </div>

        <div className="plans">
          {/* Free plan */}
          <section className="plan">
            <h2 className="plan__name">{t.pricing.free.name}</h2>
            <div className="plan__price">
              <span className="plan__amount">{t.pricing.free.price}</span>
              <span className="plan__period">{t.pricing.free.period}</span>
            </div>
            <p className="plan__tagline">{t.pricing.free.tagline}</p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plan__cta plan__cta--outline"
            >
              {t.pricing.free.cta}
            </a>
            <ul className="plan__features">
              {t.pricing.free.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          {/* Stirr Gold plan */}
          <section className="plan plan--gold">
            <span className="plan__popular">{t.pricing.mostPopular}</span>
            <h2 className="plan__name">{t.pricing.gold.name}</h2>
            <div className="plan__price">
              <span className="plan__amount">{t.pricing.gold.priceMonth}</span>
              <span className="plan__period">{t.pricing.perMonth}</span>
            </div>
            <p className="plan__year">
              {t.pricing.gold.priceYear}
              {t.pricing.perYear}
            </p>
            <p className="plan__tagline">{t.pricing.gold.tagline}</p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="plan__cta plan__cta--gold"
            >
              {t.pricing.gold.cta}
            </a>
            <ul className="plan__features">
              {t.pricing.gold.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
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
