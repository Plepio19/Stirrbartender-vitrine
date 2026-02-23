export type Language = 'en' | 'fr' | 'es';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr', 'es'];

export const translations = {
  en: {
    meta: {
      homeTitle: 'Stirr — The Art of Mixology',
      privacyTitle: 'Stirr — Privacy Policy',
      termsTitle: 'Stirr — Terms & Conditions',
      description: 'Stirr brings the art of cocktail making to your fingertips.',
    },
    home: {
      title: 'Stirr',
      slogan: 'Crafting moments, one cocktail at a time.',
      privacyButton: 'Privacy Policy',
      termsButton: 'Terms & Conditions',
    },
    common: {
      backHome: '← Back to Home',
      effectiveDate: 'Effective date: January 1, 2025',
      copyright: '© 2025 Stirr. All rights reserved.',
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'Your privacy is important to us. This Privacy Policy explains how Stirr ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you use our mobile application.',
      sections: [
        {
          title: '1. Introduction',
          content: 'Welcome to Stirr. We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy practices of our mobile application and related services. By using our application, you agree to the collection and use of information in accordance with this policy.',
        },
        {
          title: '2. Data We Collect',
          content: 'We may collect information that you provide directly to us, including: account information (email address, username), user preferences and settings, cocktail recipes you create or save, your home bar inventory, and usage data such as features accessed and interactions within the app.',
        },
        {
          title: '3. How We Use Your Data',
          content: 'We use the collected information to: provide, operate, and maintain our application; improve, personalize, and expand our services; understand and analyze how you use our application; develop new products, services, and features; communicate with you for customer service, updates, and promotional purposes (with your consent).',
        },
        {
          title: '4. Cookies and Tracking Technologies',
          content: 'Our application may use cookies, local storage, and similar technologies to enhance your experience. These technologies help us remember your preferences, understand usage patterns, and improve our services. You can manage your preferences through your device settings.',
        },
        {
          title: '5. Data Retention',
          content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When you delete your account, we will delete or anonymize your personal data within 30 days, unless retention is required by law.',
        },
        {
          title: '6. Your Rights',
          content: 'Depending on your location, you may have certain rights regarding your personal information, including: the right to access your data; the right to correct inaccurate data; the right to delete your data; the right to data portability; the right to object to processing; and the right to withdraw consent.',
        },
        {
          title: '7. Contact Us',
          content: 'If you have any questions about this Privacy Policy or our data practices, please contact us at: privacy@stirrapp.com. We will respond to your inquiry within 30 business days.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      intro: 'These Terms and Conditions ("Terms") govern your use of the Stirr mobile application ("Application") operated by Stirr ("we", "us", or "our"). Please read these Terms carefully before using our Application.',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By downloading, installing, or using the Stirr application, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Application. We reserve the right to modify these Terms at any time, and your continued use of the Application constitutes acceptance of such modifications.',
        },
        {
          title: '2. Use of the Service',
          content: 'Stirr grants you a limited, non-exclusive, non-transferable, revocable license to use the Application for personal, non-commercial purposes. You agree not to: use the Application for any unlawful purpose; attempt to reverse engineer the Application; remove any copyright or proprietary notices; transfer your account to another person without our consent.',
        },
        {
          title: '3. Intellectual Property',
          content: 'The Application and its original content, features, and functionality are owned by Stirr and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. Our trademarks may not be used in connection with any product or service without our prior written consent.',
        },
        {
          title: '4. Disclaimer',
          content: 'The Application is provided on an "AS IS" and "AS AVAILABLE" basis. Stirr makes no warranties, expressed or implied, regarding the operation of the Application or the information, content, or materials included therein. Cocktail recipes are for informational purposes only. Please drink responsibly and in accordance with local laws.',
        },
        {
          title: '5. Limitation of Liability',
          content: 'In no event shall Stirr, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the Application.',
        },
        {
          title: '6. Changes to Terms',
          content: 'We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
        },
        {
          title: '7. Governing Law',
          content: 'These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Paris, France.',
        },
        {
          title: '8. Contact Us',
          content: 'If you have any questions about these Terms, please contact us at: legal@stirrapp.com. We are committed to resolving any disputes fairly and promptly.',
        },
      ],
    },
  },
  fr: {
    meta: {
      homeTitle: 'Stirr — L\'Art de la Mixologie',
      privacyTitle: 'Stirr — Politique de Confidentialité',
      termsTitle: 'Stirr — Conditions Générales',
      description: 'Stirr met l\'art du cocktail à portée de main.',
    },
    home: {
      title: 'Stirr',
      slogan: 'Créer des moments, un cocktail à la fois.',
      privacyButton: 'Politique de Confidentialité',
      termsButton: 'Conditions Générales',
    },
    common: {
      backHome: '← Retour à l\'accueil',
      effectiveDate: 'Date d\'effet : 1er janvier 2025',
      copyright: '© 2025 Stirr. Tous droits réservés.',
    },
    privacy: {
      title: 'Politique de Confidentialité',
      intro: 'Votre vie privée est importante pour nous. Cette Politique de Confidentialité explique comment Stirr ("nous" ou "notre") collecte, utilise, divulgue et protège vos informations lorsque vous utilisez notre application mobile.',
      sections: [
        {
          title: '1. Introduction',
          content: 'Bienvenue sur Stirr. Nous nous engageons à protéger vos informations personnelles et votre droit à la vie privée. Cette Politique de Confidentialité régit les pratiques de confidentialité de notre application mobile et services associés. En utilisant notre application, vous acceptez la collecte et l\'utilisation des informations conformément à cette politique.',
        },
        {
          title: '2. Données que nous collectons',
          content: 'Nous pouvons collecter les informations que vous nous fournissez directement, notamment : les informations de compte (adresse e-mail, nom d\'utilisateur), vos préférences et paramètres, les recettes de cocktails que vous créez ou enregistrez, l\'inventaire de votre bar, et les données d\'utilisation telles que les fonctionnalités consultées et les interactions au sein de l\'application.',
        },
        {
          title: '3. Comment nous utilisons vos données',
          content: 'Nous utilisons les informations collectées pour : fournir, exploiter et maintenir notre application ; améliorer, personnaliser et développer nos services ; comprendre et analyser comment vous utilisez notre application ; développer de nouveaux produits, services et fonctionnalités ; communiquer avec vous pour le service client, les mises à jour et à des fins promotionnelles (avec votre consentement).',
        },
        {
          title: '4. Cookies et technologies de suivi',
          content: 'Notre application peut utiliser des cookies, le stockage local et des technologies similaires pour améliorer votre expérience. Ces technologies nous aident à mémoriser vos préférences, comprendre les habitudes d\'utilisation et améliorer nos services. Vous pouvez gérer vos préférences via les paramètres de votre appareil.',
        },
        {
          title: '5. Conservation des données',
          content: 'Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées, y compris pour satisfaire aux exigences légales, comptables ou de reporting. Lorsque vous supprimez votre compte, nous supprimons ou anonymisons vos données personnelles dans un délai de 30 jours, sauf si la conservation est requise par la loi.',
        },
        {
          title: '6. Vos droits',
          content: 'Selon votre localisation, vous pouvez avoir certains droits concernant vos informations personnelles, notamment : le droit d\'accéder à vos données ; le droit de corriger les données inexactes ; le droit de supprimer vos données ; le droit à la portabilité des données ; le droit de vous opposer au traitement ; et le droit de retirer votre consentement.',
        },
        {
          title: '7. Nous contacter',
          content: 'Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter à : privacy@stirrapp.com. Nous répondrons à votre demande dans un délai de 30 jours ouvrables.',
        },
      ],
    },
    terms: {
      title: 'Conditions Générales',
      intro: 'Ces Conditions Générales ("Conditions") régissent votre utilisation de l\'application mobile Stirr ("Application") exploitée par Stirr ("nous" ou "notre"). Veuillez lire attentivement ces Conditions avant d\'utiliser notre Application.',
      sections: [
        {
          title: '1. Acceptation des conditions',
          content: 'En téléchargeant, installant ou utilisant l\'application Stirr, vous acceptez d\'être lié par ces Conditions. Si vous n\'acceptez pas ces Conditions, vous ne devez pas accéder ni utiliser l\'Application. Nous nous réservons le droit de modifier ces Conditions à tout moment, et votre utilisation continue de l\'Application constitue l\'acceptation de ces modifications.',
        },
        {
          title: '2. Utilisation du service',
          content: 'Stirr vous accorde une licence limitée, non exclusive, non transférable et révocable pour utiliser l\'Application à des fins personnelles et non commerciales. Vous vous engagez à ne pas : utiliser l\'Application à des fins illégales ; tenter de désosser l\'Application ; supprimer les mentions de droits d\'auteur ou de propriété ; transférer votre compte à une autre personne sans notre consentement.',
        },
        {
          title: '3. Propriété intellectuelle',
          content: 'L\'Application et son contenu original, ses fonctionnalités et sa fonctionnalité sont la propriété de Stirr et sont protégés par les lois internationales sur le droit d\'auteur, les marques, les brevets, les secrets commerciaux et autres lois sur la propriété intellectuelle. Nos marques ne peuvent pas être utilisées en relation avec un produit ou service sans notre consentement écrit préalable.',
        },
        {
          title: '4. Avertissement',
          content: 'L\'Application est fournie "EN L\'ÉTAT" et "SELON DISPONIBILITÉ". Stirr n\'offre aucune garantie, expresse ou implicite, concernant le fonctionnement de l\'Application ou les informations, contenus ou matériaux qui y sont inclus. Les recettes de cocktails sont fournies à titre informatif uniquement. Veuillez consommer de manière responsable et conformément aux lois locales.',
        },
        {
          title: '5. Limitation de responsabilité',
          content: 'En aucun cas Stirr, ses directeurs, employés, partenaires, agents, fournisseurs ou affiliés ne seront responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris, sans limitation, la perte de profits, de données, d\'utilisation, de clientèle ou d\'autres pertes intangibles, résultant de votre accès ou utilisation de l\'Application.',
        },
        {
          title: '6. Modifications des conditions',
          content: 'Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment à notre seule discrétion. Si une révision est importante, nous fournirons un préavis d\'au moins 30 jours avant l\'entrée en vigueur des nouvelles conditions. Ce qui constitue un changement important sera déterminé à notre seule discrétion.',
        },
        {
          title: '7. Droit applicable',
          content: 'Ces Conditions seront régies et interprétées conformément aux lois françaises, sans égard à ses dispositions relatives aux conflits de lois. Tout litige découlant de ou en relation avec ces Conditions sera soumis à la compétence exclusive des tribunaux de Paris, France.',
        },
        {
          title: '8. Nous contacter',
          content: 'Si vous avez des questions concernant ces Conditions, veuillez nous contacter à : legal@stirrapp.com. Nous nous engageons à résoudre tout litige de manière équitable et rapide.',
        },
      ],
    },
  },
  es: {
    meta: {
      homeTitle: 'Stirr — El Arte de la Mixología',
      privacyTitle: 'Stirr — Política de Privacidad',
      termsTitle: 'Stirr — Términos y Condiciones',
      description: 'Stirr pone el arte de la coctelería al alcance de tus manos.',
    },
    home: {
      title: 'Stirr',
      slogan: 'Creando momentos, un cóctel a la vez.',
      privacyButton: 'Política de Privacidad',
      termsButton: 'Términos y Condiciones',
    },
    common: {
      backHome: '← Volver al inicio',
      effectiveDate: 'Fecha de vigencia: 1 de enero de 2025',
      copyright: '© 2025 Stirr. Todos los derechos reservados.',
    },
    privacy: {
      title: 'Política de Privacidad',
      intro: 'Su privacidad es importante para nosotros. Esta Política de Privacidad explica cómo Stirr ("nosotros" o "nuestro") recopila, usa, divulga y protege su información cuando utiliza nuestra aplicación móvil.',
      sections: [
        {
          title: '1. Introducción',
          content: 'Bienvenido a Stirr. Estamos comprometidos a proteger su información personal y su derecho a la privacidad. Esta Política de Privacidad rige las prácticas de privacidad de nuestra aplicación móvil y servicios relacionados. Al usar nuestra aplicación, usted acepta la recopilación y uso de información de acuerdo con esta política.',
        },
        {
          title: '2. Datos que recopilamos',
          content: 'Podemos recopilar información que usted nos proporciona directamente, incluyendo: información de cuenta (dirección de correo electrónico, nombre de usuario), preferencias y configuraciones del usuario, recetas de cócteles que crea o guarda, el inventario de su bar en casa, y datos de uso como funciones accedidas e interacciones dentro de la aplicación.',
        },
        {
          title: '3. Cómo usamos sus datos',
          content: 'Usamos la información recopilada para: proporcionar, operar y mantener nuestra aplicación; mejorar, personalizar y expandir nuestros servicios; comprender y analizar cómo usa nuestra aplicación; desarrollar nuevos productos, servicios y funciones; comunicarnos con usted para servicio al cliente, actualizaciones y fines promocionales (con su consentimiento).',
        },
        {
          title: '4. Cookies y tecnologías de seguimiento',
          content: 'Nuestra aplicación puede usar cookies, almacenamiento local y tecnologías similares para mejorar su experiencia. Estas tecnologías nos ayudan a recordar sus preferencias, comprender patrones de uso y mejorar nuestros servicios. Puede administrar sus preferencias a través de la configuración de su dispositivo.',
        },
        {
          title: '5. Retención de datos',
          content: 'Retenemos su información personal solo durante el tiempo necesario para cumplir los fines para los que fue recopilada, incluyendo satisfacer requisitos legales, contables o de informes. Cuando elimina su cuenta, eliminaremos o anonimizaremos sus datos personales dentro de 30 días, a menos que la retención sea requerida por ley.',
        },
        {
          title: '6. Sus derechos',
          content: 'Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, incluyendo: el derecho a acceder a sus datos; el derecho a corregir datos inexactos; el derecho a eliminar sus datos; el derecho a la portabilidad de datos; el derecho a oponerse al procesamiento; y el derecho a retirar el consentimiento.',
        },
        {
          title: '7. Contáctenos',
          content: 'Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en: privacy@stirrapp.com. Responderemos a su consulta dentro de 30 días hábiles.',
        },
      ],
    },
    terms: {
      title: 'Términos y Condiciones',
      intro: 'Estos Términos y Condiciones ("Términos") rigen su uso de la aplicación móvil Stirr ("Aplicación") operada por Stirr ("nosotros" o "nuestro"). Por favor lea estos Términos cuidadosamente antes de usar nuestra Aplicación.',
      sections: [
        {
          title: '1. Aceptación de términos',
          content: 'Al descargar, instalar o usar la aplicación Stirr, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, no debe acceder ni usar la Aplicación. Nos reservamos el derecho de modificar estos Términos en cualquier momento, y su uso continuo de la Aplicación constituye la aceptación de dichas modificaciones.',
        },
        {
          title: '2. Uso del servicio',
          content: 'Stirr le otorga una licencia limitada, no exclusiva, no transferible y revocable para usar la Aplicación con fines personales y no comerciales. Usted acepta no: usar la Aplicación para ningún propósito ilegal; intentar realizar ingeniería inversa de la Aplicación; eliminar avisos de derechos de autor o propiedad; transferir su cuenta a otra persona sin nuestro consentimiento.',
        },
        {
          title: '3. Propiedad intelectual',
          content: 'La Aplicación y su contenido original, características y funcionalidad son propiedad de Stirr y están protegidos por leyes internacionales de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual. Nuestras marcas no pueden usarse en conexión con ningún producto o servicio sin nuestro consentimiento previo por escrito.',
        },
        {
          title: '4. Descargo de responsabilidad',
          content: 'La Aplicación se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". Stirr no ofrece garantías, expresas o implícitas, con respecto al funcionamiento de la Aplicación o la información, contenido o materiales incluidos en ella. Las recetas de cócteles son solo para fines informativos. Por favor beba responsablemente y de acuerdo con las leyes locales.',
        },
        {
          title: '5. Limitación de responsabilidad',
          content: 'En ningún caso Stirr, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de su acceso o uso de la Aplicación.',
        },
        {
          title: '6. Cambios en los términos',
          content: 'Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra sola discreción. Si una revisión es material, proporcionaremos al menos 30 días de aviso antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material será determinado a nuestra sola discreción.',
        },
        {
          title: '7. Ley aplicable',
          content: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de Francia, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja bajo o en conexión con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de París, Francia.',
        },
        {
          title: '8. Contáctenos',
          content: 'Si tiene alguna pregunta sobre estos Términos, contáctenos en: legal@stirrapp.com. Estamos comprometidos a resolver cualquier disputa de manera justa y rápida.',
        },
      ],
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}

