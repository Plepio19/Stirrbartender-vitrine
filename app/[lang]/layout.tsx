import { redirect } from 'next/navigation';
import { isValidLanguage, type Language } from '@/src/i18n/translations';

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'es' },
  ];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isValidLanguage(params.lang)) {
    redirect('/en');
  }

  return <>{children}</>;
}

