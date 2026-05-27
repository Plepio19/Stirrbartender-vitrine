export type Language = 'en' | 'fr' | 'es';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr', 'es'];

export const translations = {
  en: {
    meta: {
      homeTitle: 'Stirr — The Art of Mixology',
      pricingTitle: 'Stirr — Plans & Pricing',
      privacyTitle: 'Stirr — Privacy Policy',
      termsTitle: 'Stirr — Terms & Conditions',
      creditsTitle: 'Stirr — Icon Credits',
      description: 'Stirr brings the art of cocktail making to your fingertips.',
    },
    nav: {
      home: 'Home',
      pricing: 'Pricing',
    },
    home: {
      title: 'Stirr',
      slogan: 'Taste the detail',
      privacyButton: 'Privacy Policy',
      termsButton: 'Terms & Conditions',
      appStoreAlt: 'Download on the App Store',
      phonesAlt: 'Stirr app shown on three iPhones',
      tagline: 'Your cocktail bar, reinvented.',
      description: 'Stirr turns your home bar into a creative studio. Manage your stock, get personalized recommendations, and let AI craft and import recipes for you.',
      features: [
        { title: 'Smart stock management', desc: 'Keep track of every bottle and ingredient, and instantly see what you can make.' },
        { title: 'Personalized recommendations', desc: 'Tailored suggestions to build the perfect bar, one bottle at a time.' },
        { title: 'AI-assisted recipes', desc: 'Create original cocktails and import recipes effortlessly with AI.' },
        { title: 'Themed collections', desc: 'Curated collections so you always find the right cocktail for the moment.' },
      ],
    },
    pricing: {
      badge: 'Pricing',
      title: 'Plans & Pricing',
      subtitle: 'Start for free, or unlock everything with Stirr Gold.',
      perMonth: '/month',
      perYear: '/year',
      mostPopular: 'Most popular',
      free: {
        name: 'Free',
        price: '€0',
        period: '/month',
        tagline: 'Everything you need to start mixing.',
        cta: 'Get started',
        features: [
          'Access to all recipes',
          'Limited cocktail creation',
          'Limited ingredients in your bar',
          'Limited saves (likes & bookmarks)',
        ],
      },
      gold: {
        name: 'Stirr Gold',
        priceMonth: '€4.99',
        priceYear: '€39.99',
        tagline: 'Unlock the full Stirr experience.',
        cta: 'Go Gold',
        features: [
          'Unlimited cocktail creation',
          'Unlimited ingredients in your bar',
          'Unlimited saves (likes & bookmarks)',
          'Personalized recommendations',
          'Access to all themed collections',
          'Access to homemade ingredient recipes',
        ],
      },
    },
    common: {
      backHome: '← Back to Home',
      effectiveDate: 'Effective date: January 1, 2025',
      copyright: '© 2026 Stirr. All rights reserved.',
      creditsLink: 'Icon Credits',
    },
    privacy: {
      title: 'Stirr — Privacy Policy',
        intro: 'Protecting your privacy is a priority for Stirr. This Privacy Policy describes how we collect, use, store, and protect your personal data when you use the Stirr mobile application ("Application"). By using the Application, you agree to the practices described in this policy. If you do not agree to these terms, please do not use the Application.',
        sections: [
          {
            title: '1. Introduction',
            content: 'Protecting your privacy is a priority for Stirr. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use the Application. By using the Application, you agree to the practices described in this policy.',
          },
          {
            title: '2. Data Collected',
            content: 'We only collect data that is necessary to provide and improve the service, including: email address; username; full name (optional); information provided during onboarding (goals, level of experience, discovery of the app); recipes created; personalized ingredients; preferences, favorites, and ingredient inventory.',
          },
          {
            title: '3. Purposes of Processing',
            content: 'Your data is used to: provide and customize the Application’s features; synchronize your data between your devices; manage your user account; improve the user experience; develop new features; suggest cocktails tailored to your preferences; ensure security and prevent fraud; comply with our legal obligations. We never sell your personal data.',
          },
          {
            title: '4. Data Storage and Security',
            content: 'Your data is hosted on Supabase servers, which comply with recognized security standards, including SOC 2 Type II and GDPR compliance. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or disclosure.',
          },
          {
            title: '5. Retention Period',
            content: 'We only retain your personal data for as long as necessary for the purposes described above. Data related to your account is retained for as long as your account remains active. If you delete your account, your personal data will be deleted.',
          },
          {
            title: '6. Data Sharing',
            content: 'Your data may only be shared in the following cases: with our technical service providers (e.g., hosting via Supabase), strictly for the purpose of providing the service; when required by law; in the event of a request from an administrative or judicial authority. We do not share or sell your data for commercial purposes. Recipes that you choose to make public may be visible to other users.',
          },
          {
            title: '7. Cookies and Similar Technologies',
            content: 'Stirr uses local storage technologies and similar tools to keep your session active and improve performance, including image caching.',
          },
          {
            title: '8. Protection of Minors',
            content: 'Stirr is an application intended for people of legal drinking age in their country. We do not knowingly collect personal data about minors. If you believe that a minor has provided us with information, please contact us so that we can delete it.',
          },
          {
            title: '9. Links to Third-Party Services',
            content: 'The Application may contain links to third-party sites or services. We are not responsible for their privacy practices and encourage you to review their respective policies.',
          },
          {
            title: '10. Changes to the Policy',
            content: 'We may update this Privacy Policy at any time. In the event of a substantial change, we will notify you via the Application or by email. The date of the last update is shown at the top of the document.',
          },
          {
            title: '11. Contact',
            content: 'For any questions regarding the protection of your personal data: Email: contact@stirrbartender.com.',
          },
        ],
    },
    terms: {
        title: 'Terms and Conditions of Use',
        intro: 'These Terms and Conditions of Use ("Terms") govern your use of the Stirr mobile application ("Application"). By downloading, installing, accessing, or using the Application, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to all of these Terms, you must not use the Application.',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: 'By downloading, installing, accessing, or using the Application, you agree to be bound by these Terms. If you do not agree to all of these Terms, you must not use the Application. You represent that you are of legal drinking age in your country of residence.',
          },
          {
            title: '2. Description of the Service',
            content: 'Stirr is a mobile application dedicated to managing and discovering cocktails. It allows you to: discover and browse cocktail recipes; create, modify, and save your own recipes; manage a personal inventory of ingredients; mark cocktails as favorites or “to try”; create homemade (DIY) ingredients and their associated recipes.',
          },
          {
            title: '3. License to Use',
            content: 'Subject to your compliance with these Terms, Stirr grants you a limited, non-exclusive, non-transferable, revocable license to download and use the Application on your personal devices for strictly private and non-commercial purposes. This license does not constitute a transfer of ownership. You agree not to: copy, reproduce, or modify the Application; use the Application for commercial or public purposes; decompile, disassemble, or attempt to extract the source code; remove copyright or proprietary notices; distribute, resell, rent, or copy the Application to another server. Any violation will result in automatic termination of the license.',
          },
          {
            title: '4. User Account',
            content: 'Certain features require the creation of an account. You agree to: provide accurate, complete, and up-to-date information; keep your login details confidential; immediately notify Stirr of any unauthorized use; be responsible for all activity carried out under your account. A guest mode may be offered with limited features. Stirr reserves the right to suspend or delete an account in the event of a violation of these Terms.',
          },
          {
            title: '5. User Content',
            content: 'You retain all rights to the content you create through the Application (recipes, descriptions, custom ingredients). By posting content in the Application, you grant Stirr a non-exclusive, worldwide, royalty-free license necessary for the operation of the service to host, display, and distribute such content within the Application. You agree not to publish content that is: illegal, defamatory, hateful, or offensive; infringing on the intellectual property rights of others; containing viruses or malicious code; encouraging excessive or dangerous alcohol consumption. Stirr reserves the right to remove any content that does not comply with these rules.',
          },
          {
            title: '6. Intellectual Property',
            content: 'The Application, its design, features, source code, databases, logos, and original content are the exclusive property of Stirr and are protected by intellectual property laws. Classic cocktail recipes may be in the public domain. Recipes created by users remain their property, subject to the license granted to Stirr. No intellectual property rights are transferred to you under these Terms.',
          },
          {
            title: '7. Alcohol Warning',
            content: 'The Application features recipes for alcoholic beverages. The Application is intended for individuals who are of legal drinking age in their country. Stirr does not sell or distribute alcohol. We encourage responsible drinking. Never drive after consuming alcohol. Alcohol abuse is dangerous for your health. You are solely responsible for your consumption and for checking for allergens or dietary restrictions.',
          },
          {
            title: '8. Accuracy of Information',
            content: 'The recipes, descriptions, and information in the Application may contain technical or typographical errors or inaccuracies. Stirr does not guarantee that the content is accurate, complete, reliable, or up to date. Stirr may modify the content of the Application at any time without any obligation to update it.',
          },
          {
            title: '9. Links to Third-Party Sites',
            content: 'The Application may contain links to third-party sites or services. Stirr has not necessarily reviewed these services and accepts no responsibility for their content, policies, or operation. Access to these third-party services is at your own risk.',
          },
          {
            title: '10. Limitation of Liability',
            content: 'To the extent permitted by applicable law: the Application is provided “as is” and without warranty of any kind; Stirr disclaims all express or implied warranties, including warranties of merchantability or fitness for a particular purpose; Stirr is not responsible for the consequences of alcohol consumption.',
          },
          {
            title: '11. Termination',
            content: 'You may stop using the Application at any time and delete your account from the settings. Stirr may suspend or terminate your access in the event of: violation of these Terms; misuse of the service; legal obligation. In the event of termination, the user license shall terminate immediately. Data will be processed in accordance with the Privacy Policy.',
          },
          {
            title: '12. Changes to the Terms',
            content: 'Stirr may change these Terms at any time. The current version is the one published in the Application. By continuing to use the Application after any changes, you agree to the new Terms.',
          },
          {
            title: '13. Applicable Law and Jurisdiction',
            content: 'These Terms are governed by French law. Any dispute relating to their interpretation or execution shall be submitted to the competent French courts, subject to the mandatory provisions protecting consumers in their country of residence.',
          },
          {
            title: '14. Contact',
            content: 'For any questions regarding these Terms: Email: contact@stirrbartender.com.',
          },
        ],
    },
    credits: {
      title: 'Icon Credits',
      intro: 'Some icons used on this site are from The Noun Project and are used under the Creative Commons Attribution 3.0 license (CC BY 3.0).',
      items: [
        { name: 'Martini Glass', author: 'Bohdan Burmich', url: 'https://thenounproject.com/browse/icons/term/martini-glass/', urlTitle: 'Martini Glass Icons' },
        { name: 'Available', author: 'Setyo Ari Wibowo', url: 'https://thenounproject.com/browse/icons/term/available/', urlTitle: 'available Icons' },
        { name: 'Favorite', author: 'Landan Lloyd', url: 'https://thenounproject.com/browse/icons/term/favorite/', urlTitle: 'Favorite Icons' },
        { name: 'Bartender', author: 'Kael', url: 'https://thenounproject.com/browse/icons/term/bartender/', urlTitle: 'bartender Icons' },
        { name: 'Shaker', author: 'Amethyst Studio', url: 'https://thenounproject.com/browse/icons/term/shaker/', urlTitle: 'shaker Icons' },
        { name: 'Jiggers', author: 'Kiran Shastry', url: 'https://thenounproject.com/browse/icons/term/jiggers/', urlTitle: 'jiggers Icons' },
        { name: 'Beer', author: 'Start Up Graphic Design', url: 'https://thenounproject.com/browse/icons/term/beer/', urlTitle: 'Beer Icons' },
        { name: 'Bar', author: 'Rikas Dzihab', url: 'https://thenounproject.com/browse/icons/term/bar/', urlTitle: 'Bar Icons' },
        { name: 'Home', author: 'Gregor Cresnar', url: 'https://thenounproject.com/browse/icons/term/home/', urlTitle: 'Home Icons' },
      ],
      license: 'License:',
      licenseLink: 'Creative Commons Attribution 3.0',
    },
  },
  fr: {
    meta: {
      homeTitle: 'Stirr — L\'Art de la Mixologie',
      pricingTitle: 'Stirr — Offres & Tarifs',
      privacyTitle: 'Stirr — Politique de Confidentialité',
      termsTitle: 'Stirr — Conditions Générales',
      creditsTitle: 'Stirr — Crédits icônes',
      description: 'Stirr met l\'art du cocktail à portée de main.',
    },
    nav: {
      home: 'Accueil',
      pricing: 'Tarifs',
    },
    home: {
      title: 'Stirr',
      slogan: 'Le goût du détail',
      privacyButton: 'Politique de Confidentialité',
      termsButton: 'Conditions Générales',
      appStoreAlt: 'Télécharger dans l\'App Store',
      phonesAlt: 'L\'application Stirr sur trois iPhones',
      tagline: 'Ton bar à cocktails, réinventé.',
      description: 'Stirr transforme ton bar maison en véritable studio créatif. Gère tes stocks, reçois des recommandations personnalisées et laisse l\'IA créer et importer tes recettes.',
      features: [
        { title: 'Gestion des stocks', desc: 'Suis chaque bouteille et ingrédient, et vois instantanément ce que tu peux préparer.' },
        { title: 'Recommandations personnalisées', desc: 'Des suggestions sur mesure pour créer le bar parfait, bouteille après bouteille.' },
        { title: 'Recettes assistées par IA', desc: 'Crée des cocktails originaux et importe des recettes sans effort grâce à l\'IA.' },
        { title: 'Collections thématiques', desc: 'Des collections soignées pour toujours trouver le cocktail au bon moment.' },
      ],
    },
    pricing: {
      badge: 'Tarifs',
      title: 'Offres & Tarifs',
      subtitle: 'Commence gratuitement, ou débloque tout avec Stirr Gold.',
      perMonth: '/mois',
      perYear: '/an',
      mostPopular: 'Le plus populaire',
      free: {
        name: 'Gratuit',
        price: '0 €',
        period: '/mois',
        tagline: 'Tout ce qu\'il faut pour commencer à mixer.',
        cta: 'Commencer',
        features: [
          'Accès à toutes les recettes',
          'Création de cocktails limitée',
          'Ajout d\'ingrédients dans le bar limité',
          'Sauvegardes limitées (likes & signets)',
        ],
      },
      gold: {
        name: 'Stirr Gold',
        priceMonth: '4,99 €',
        priceYear: '39,99 €',
        tagline: 'Débloque toute l\'expérience Stirr.',
        cta: 'Passer à Gold',
        features: [
          'Création de cocktails illimitée',
          'Ajout d\'ingrédients illimité',
          'Sauvegardes illimitées (likes & signets)',
          'Recommandations personnalisées',
          'Accès à toutes les collections thématiques',
          'Accès aux recettes d\'ingrédients maison',
        ],
      },
    },
    common: {
      backHome: '← Retour à l\'accueil',
      effectiveDate: 'Date d\'effet : 1er janvier 2025',
      copyright: '© 2026 Stirr. Tous droits réservés.',
      creditsLink: 'Crédits icônes',
    },
    privacy: {
      title: 'Stirr — Politique de Confidentialité',
        intro: 'La protection de votre vie privée est une priorité pour Stirr. La présente Politique de Confidentialité décrit la manière dont nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez l’application mobile Stirr ("Application"). En utilisant l’Application, vous acceptez les pratiques décrites dans la présente politique. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser l’Application.',
        sections: [
          {
            title: '1. Introduction',
            content: 'La protection de votre vie privée est une priorité pour Stirr. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez l’Application. En utilisant l’Application, vous acceptez les pratiques décrites dans la présente politique.',
          },
          {
            title: '2. Données collectées',
            content: 'Nous collectons uniquement les données nécessaires à la fourniture et à l’amélioration du service, notamment : adresse email ; nom d’utilisateur ; nom complet (facultatif) ; informations renseignées lors de l’onboarding (objectifs, niveau d’expérience, découverte de l’application) ; recettes créées ; ingrédients personnalisés ; préférences, favoris et inventaire d’ingrédients.',
          },
          {
            title: '3. Finalités du traitement',
            content: 'Vos données sont utilisées pour : fournir et personnaliser les fonctionnalités de l’Application ; synchroniser vos données entre vos appareils ; gérer votre compte utilisateur ; améliorer l’expérience utilisateur ; développer de nouvelles fonctionnalités ; vous suggérer des cocktails adaptés à vos préférences ; assurer la sécurité et prévenir les fraudes ; respecter nos obligations légales. Nous ne vendons jamais vos données personnelles.',
          },
          {
            title: '4. Stockage et sécurité des données',
            content: 'Vos données sont hébergées sur les serveurs de Supabase, conformes aux standards de sécurité reconnus, notamment SOC 2 Type II et conformité au RGPD. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger vos données contre tout accès non autorisé, perte ou divulgation.',
          },
          {
            title: '5. Durée de conservation',
            content: 'Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités décrites ci-dessus. Les données liées à votre compte sont conservées tant que celui-ci est actif. En cas de suppression de votre compte, vos données personnelles sont supprimées.',
          },
          {
            title: '6. Partage des données',
            content: 'Vos données peuvent être partagées uniquement dans les cas suivants : avec nos prestataires techniques (par exemple, hébergement via Supabase) strictement pour la fourniture du service ; lorsque la loi l’exige ; en cas de demande d’une autorité administrative ou judiciaire. Nous ne partageons ni ne vendons vos données à des fins commerciales. Les recettes que vous choisissez de rendre publiques peuvent être visibles par les autres utilisateurs.',
          },
          {
            title: '7. Cookies et technologies similaires',
            content: 'Stirr utilise des technologies de stockage local et outils similaires afin de maintenir votre session active et d’améliorer les performances de l’Application, notamment via la mise en cache des images.',
          },
          {
            title: '8. Protection des mineurs',
            content: 'Stirr est une application destinée aux personnes ayant l’âge légal pour consommer de l’alcool dans leur pays. Nous ne collectons pas sciemment de données personnelles concernant des mineurs. Si vous pensez qu’un mineur nous a fourni des informations, veuillez nous contacter afin que nous puissions les supprimer.',
          },
          {
            title: '9. Liens vers des services tiers',
            content: 'L’Application peut contenir des liens vers des sites ou services tiers. Nous ne sommes pas responsables de leurs pratiques en matière de confidentialité et vous encourageons à consulter leurs politiques respectives.',
          },
          {
            title: '10. Modifications de la Politique',
            content: 'Nous pouvons mettre à jour la présente Politique de Confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons via l’Application ou par email. La date de dernière mise à jour figure en haut du document.',
          },
          {
            title: '11. Contact',
            content: 'Pour toute question relative à la protection de vos données personnelles : Email : contact@stirrbartender.com.',
          },
        ],
    },
    terms: {
        title: 'Conditions Générales d’Utilisation',
        intro: 'Les présentes Conditions Générales d’Utilisation ("Conditions") régissent votre utilisation de l’application mobile Stirr ("Application"). En téléchargeant, installant, accédant ou utilisant l’Application, vous acceptez d’être lié par ces Conditions ainsi que par toutes les lois et réglementations applicables. Si vous n’acceptez pas l’intégralité des présentes Conditions, vous ne devez pas utiliser l’Application.',
        sections: [
          {
            title: '1. Acceptation des Conditions',
            content: 'En téléchargeant, installant, accédant ou utilisant l’Application, vous acceptez d’être lié par les présentes Conditions. Si vous n’acceptez pas l’intégralité des présentes Conditions, vous ne devez pas utiliser l’Application. Vous déclarez avoir l’âge légal requis pour consommer de l’alcool dans votre pays de résidence.',
          },
          {
            title: '2. Description du service',
            content: 'Stirr est une application mobile dédiée à la gestion et à la découverte de cocktails. Elle permet notamment de : découvrir et parcourir des recettes de cocktails ; créer, modifier et sauvegarder vos propres recettes ; gérer un inventaire personnel d’ingrédients ; marquer des cocktails comme favoris ou « à essayer » ; créer des ingrédients maison (DIY) et leurs recettes associées.',
          },
          {
            title: '3. Licence d’utilisation',
            content: 'Sous réserve du respect des présentes Conditions, Stirr vous accorde une licence limitée, non exclusive, non transférable et révocable vous permettant de télécharger et d’utiliser l’Application sur vos appareils personnels, à des fins strictement privées et non commerciales. Cette licence ne constitue pas un transfert de propriété. Vous vous engagez à ne pas : copier, reproduire ou modifier l’Application ; utiliser l’Application à des fins commerciales ou publiques ; décompiler, désassembler ou tenter d’extraire le code source ; supprimer les mentions de droits d’auteur ou de propriété ; distribuer, revendre, louer ou copier l’Application sur un autre serveur. Toute violation entraîne la résiliation automatique de la licence.',
          },
          {
            title: '4. Compte utilisateur',
            content: 'Certaines fonctionnalités nécessitent la création d’un compte. Vous vous engagez à : fournir des informations exactes, complètes et à jour ; maintenir la confidentialité de vos identifiants ; informer immédiatement Stirr de toute utilisation non autorisée ; être responsable de toute activité effectuée sous votre compte. Un mode invité peut être proposé avec des fonctionnalités limitées. Stirr se réserve le droit de suspendre ou supprimer un compte en cas de violation des présentes Conditions.',
          },
          {
            title: '5. Contenu utilisateur',
            content: 'Vous conservez l’ensemble des droits sur les contenus que vous créez via l’Application (recettes, descriptions, ingrédients personnalisés). En publiant du contenu dans l’Application, vous accordez à Stirr une licence non exclusive, mondiale, gratuite et nécessaire au fonctionnement du service pour héberger, afficher et diffuser ce contenu dans l’Application. Vous vous engagez à ne pas publier de contenu : illégal, diffamatoire, haineux ou offensant ; portant atteinte aux droits de propriété intellectuelle d’autrui ; contenant des virus ou codes malveillants ; encourageant une consommation excessive ou dangereuse d’alcool. Stirr se réserve le droit de supprimer tout contenu ne respectant pas ces règles.',
          },
          {
            title: '6. Propriété intellectuelle',
            content: 'L’Application, son design, ses fonctionnalités, son code source, ses bases de données, ses logos et son contenu original sont la propriété exclusive de Stirr et sont protégés par les lois relatives à la propriété intellectuelle. Les recettes classiques de cocktails peuvent relever du domaine public. Les recettes créées par les utilisateurs demeurent leur propriété, sous réserve de la licence accordée à Stirr. Aucun droit de propriété intellectuelle ne vous est transféré au titre des présentes Conditions.',
          },
          {
            title: '7. Avertissement relatif à l’alcool',
            content: 'L’Application présente des recettes de boissons alcoolisées. L’Application est réservée aux personnes ayant l’âge légal pour consommer de l’alcool dans leur pays. Stirr ne vend ni ne distribue d’alcool. Nous encourageons une consommation responsable. Ne conduisez jamais après avoir consommé de l’alcool. L’abus d’alcool est dangereux pour la santé. Vous êtes seul responsable de votre consommation et de la vérification des allergènes ou restrictions alimentaires.',
          },
          {
            title: '8. Exactitude des informations',
            content: 'Les recettes, descriptions et informations présentes dans l’Application peuvent contenir des erreurs techniques, typographiques ou imprécisions. Stirr ne garantit pas que les contenus soient exacts, complets, fiables ou à jour. Stirr peut modifier le contenu de l’Application à tout moment sans obligation de mise à jour.',
          },
          {
            title: '9. Liens vers des sites tiers',
            content: 'L’Application peut contenir des liens vers des sites ou services tiers. Stirr n’a pas nécessairement examiné ces services et décline toute responsabilité quant à leur contenu, leur politique ou leur fonctionnement. L’accès à ces services tiers se fait à vos propres risques.',
          },
          {
            title: '10. Limitation de responsabilité',
            content: 'Dans les limites autorisées par la loi applicable : l’Application est fournie « en l’état » et sans garantie d’aucune sorte ; Stirr décline toute garantie expresse ou implicite, notamment de qualité marchande ou d’adéquation à un usage particulier ; Stirr n’est pas responsable des conséquences liées à la consommation d’alcool.',
          },
          {
            title: '11. Résiliation',
            content: 'Vous pouvez cesser d’utiliser l’Application à tout moment et supprimer votre compte depuis les paramètres. Stirr peut suspendre ou résilier votre accès en cas de violation des présentes Conditions, d’usage abusif du service ou d’obligation légale. En cas de résiliation, la licence d’utilisation prend fin immédiatement. Les données seront traitées conformément à la Politique de confidentialité.',
          },
          {
            title: '12. Modifications des Conditions',
            content: 'Stirr peut modifier les présentes Conditions à tout moment. La version en vigueur est celle publiée dans l’Application. En continuant à utiliser l’Application après modification, vous acceptez les nouvelles Conditions.',
          },
          {
            title: '13. Droit applicable et juridiction compétente',
            content: 'Les présentes Conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents français, sous réserve des dispositions impératives protégeant les consommateurs dans leur pays de résidence.',
          },
          {
            title: '14. Contact',
            content: 'Pour toute question relative aux présentes Conditions : Email : contact@stirrbartender.com.',
          },
        ],
      },
    credits: {
      title: 'Crédits icônes',
      intro: 'Certaines icônes utilisées sur ce site proviennent de The Noun Project et sont utilisées sous licence Creative Commons Attribution 3.0 (CC BY 3.0).',
      items: [
        { name: 'Martini Glass', author: 'Bohdan Burmich', url: 'https://thenounproject.com/browse/icons/term/martini-glass/', urlTitle: 'Martini Glass Icons' },
        { name: 'Available', author: 'Setyo Ari Wibowo', url: 'https://thenounproject.com/browse/icons/term/available/', urlTitle: 'available Icons' },
        { name: 'Favorite', author: 'Landan Lloyd', url: 'https://thenounproject.com/browse/icons/term/favorite/', urlTitle: 'Favorite Icons' },
        { name: 'Bartender', author: 'Kael', url: 'https://thenounproject.com/browse/icons/term/bartender/', urlTitle: 'bartender Icons' },
        { name: 'Shaker', author: 'Amethyst Studio', url: 'https://thenounproject.com/browse/icons/term/shaker/', urlTitle: 'shaker Icons' },
        { name: 'Jiggers', author: 'Kiran Shastry', url: 'https://thenounproject.com/browse/icons/term/jiggers/', urlTitle: 'jiggers Icons' },
        { name: 'Beer', author: 'Start Up Graphic Design', url: 'https://thenounproject.com/browse/icons/term/beer/', urlTitle: 'Beer Icons' },
        { name: 'Bar', author: 'Rikas Dzihab', url: 'https://thenounproject.com/browse/icons/term/bar/', urlTitle: 'Bar Icons' },
        { name: 'Home', author: 'Gregor Cresnar', url: 'https://thenounproject.com/browse/icons/term/home/', urlTitle: 'Home Icons' },
      ],
      license: 'Licence :',
      licenseLink: 'Creative Commons Attribution 3.0',
    },
  },
  es: {
    meta: {
      homeTitle: 'Stirr — El Arte de la Mixología',
      pricingTitle: 'Stirr — Planes y Precios',
      privacyTitle: 'Stirr — Política de Privacidad',
      termsTitle: 'Stirr — Términos y Condiciones',
      creditsTitle: 'Stirr — Créditos de iconos',
      description: 'Stirr pone el arte de la coctelería al alcance de tus manos.',
    },
    nav: {
      home: 'Inicio',
      pricing: 'Precios',
    },
    home: {
      title: 'Stirr',
      slogan: 'El sabor del detalle',
      privacyButton: 'Política de Privacidad',
      termsButton: 'Términos y Condiciones',
      appStoreAlt: 'Descargar en el App Store',
      phonesAlt: 'La aplicación Stirr en tres iPhones',
      tagline: 'Tu bar de cócteles, reinventado.',
      description: 'Stirr convierte tu bar en casa en un estudio creativo. Gestiona tu stock, recibe recomendaciones personalizadas y deja que la IA cree e importe tus recetas.',
      features: [
        { title: 'Gestión de stock', desc: 'Controla cada botella e ingrediente y ve al instante qué puedes preparar.' },
        { title: 'Recomendaciones personalizadas', desc: 'Sugerencias a medida para crear el bar perfecto, botella a botella.' },
        { title: 'Recetas asistidas por IA', desc: 'Crea cócteles originales e importa recetas sin esfuerzo con IA.' },
        { title: 'Colecciones temáticas', desc: 'Colecciones cuidadas para encontrar siempre el cóctel para cada momento.' },
      ],
    },
    pricing: {
      badge: 'Precios',
      title: 'Planes y Precios',
      subtitle: 'Empieza gratis o desbloquea todo con Stirr Gold.',
      perMonth: '/mes',
      perYear: '/año',
      mostPopular: 'Más popular',
      free: {
        name: 'Gratis',
        price: '0 €',
        period: '/mes',
        tagline: 'Todo lo que necesitas para empezar a mezclar.',
        cta: 'Empezar',
        features: [
          'Acceso a todas las recetas',
          'Creación de cócteles limitada',
          'Ingredientes en tu bar limitados',
          'Guardados limitados (me gusta y marcadores)',
        ],
      },
      gold: {
        name: 'Stirr Gold',
        priceMonth: '4,99 €',
        priceYear: '39,99 €',
        tagline: 'Desbloquea toda la experiencia Stirr.',
        cta: 'Hazte Gold',
        features: [
          'Creación de cócteles ilimitada',
          'Ingredientes ilimitados en tu bar',
          'Guardados ilimitados (me gusta y marcadores)',
          'Recomendaciones personalizadas',
          'Acceso a todas las colecciones temáticas',
          'Acceso a recetas de ingredientes caseros',
        ],
      },
    },
    common: {
      backHome: '← Volver al inicio',
      effectiveDate: 'Fecha de vigencia: 1 de enero de 2025',
      copyright: '© 2026 Stirr. Todos los derechos reservados.',
      creditsLink: 'Créditos de iconos',
    },
    privacy: {
        title: 'Stirr — Política de Privacidad',
        intro: 'La protección de su privacidad es una prioridad para Stirr. La presente Política de Privacidad describe la forma en que recopilamos, utilizamos, almacenamos y protegemos sus datos personales cuando utiliza la aplicación móvil Stirr ("Aplicación"). Al utilizar la Aplicación, usted acepta las prácticas descritas en la presente política. Si no acepta estas condiciones, le rogamos que no utilice la Aplicación.',
        sections: [
          {
            title: '1. Introducción',
            content: 'La protección de su privacidad es una prioridad para Stirr. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales cuando utiliza la Aplicación. Al utilizar la Aplicación, usted acepta las prácticas descritas en la presente política.',
          },
          {
            title: '2. Datos recopilados',
            content: 'Solo recopilamos los datos necesarios para prestar y mejorar el servicio, incluyendo: dirección de correo electrónico; nombre de usuario; nombre completo (opcional); información proporcionada durante el proceso de incorporación (objetivos, nivel de experiencia, descubrimiento de la aplicación); recetas creadas; ingredientes personalizados; preferencias, favoritos e inventario de ingredientes.',
          },
          {
            title: '3. Finalidades del tratamiento',
            content: 'Sus datos se utilizan para: proporcionar y personalizar las funcionalidades de la Aplicación; sincronizar sus datos entre sus dispositivos; gestionar su cuenta de usuario; mejorar la experiencia del usuario; desarrollar nuevas funcionalidades; sugerirle cócteles adaptados a sus preferencias; garantizar la seguridad y prevenir el fraude; cumplir con nuestras obligaciones legales. Nunca vendemos sus datos personales.',
          },
          {
            title: '4. Almacenamiento y seguridad de los datos',
            content: 'Sus datos se alojan en los servidores de Supabase, que cumplen con normas de seguridad reconocidas, en particular SOC 2 Tipo II y conformidad con el RGPD. Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos contra accesos no autorizados, pérdida o divulgación.',
          },
          {
            title: '5. Periodo de conservación',
            content: 'Conservamos sus datos personales únicamente durante el tiempo necesario para los fines descritos anteriormente. Los datos relacionados con su cuenta se conservan mientras esta permanezca activa. En caso de eliminación de su cuenta, sus datos personales se eliminan.',
          },
          {
            title: '6. Compartir datos',
            content: 'Sus datos solo pueden compartirse en los siguientes casos: con nuestros proveedores técnicos (por ejemplo, alojamiento a través de Supabase), estrictamente para la prestación del servicio; cuando lo exija la ley; en caso de solicitud de una autoridad administrativa o judicial. No compartimos ni vendemos sus datos con fines comerciales. Las recetas que decida hacer públicas podrán ser visibles para otros usuarios.',
          },
          {
            title: '7. Cookies y tecnologías similares',
            content: 'Stirr utiliza tecnologías de almacenamiento local y herramientas similares para mantener su sesión activa y mejorar el rendimiento de la Aplicación, en particular mediante el uso de caché de imágenes.',
          },
          {
            title: '8. Protección de menores',
            content: 'Stirr es una aplicación destinada a personas que tienen la edad legal para consumir alcohol en su país. No recopilamos deliberadamente datos personales de menores. Si cree que un menor nos ha proporcionado información, póngase en contacto con nosotros para que podamos eliminarla.',
          },
          {
            title: '9. Enlaces a servicios de terceros',
            content: 'La Aplicación puede contener enlaces a sitios o servicios de terceros. No nos hacemos responsables de sus prácticas de privacidad y le recomendamos que consulte sus respectivas políticas.',
          },
          {
            title: '10. Modificaciones de la Política',
            content: 'Podemos actualizar la presente Política de Privacidad en cualquier momento. En caso de modificaciones sustanciales, se lo comunicaremos a través de la Aplicación o por correo electrónico. La fecha de la última actualización figura en la parte superior del documento.',
          },
          {
            title: '11. Contacto',
            content: 'Para cualquier pregunta relacionada con la protección de sus datos personales: Correo electrónico: contact@stirrbartender.com.',
          },
        ],
    },
    terms: {
        title: 'Condiciones Generales de Uso',
        intro: 'Las presentes Condiciones Generales de Uso ("Condiciones") regulan el uso de la aplicación móvil Stirr ("Aplicación"). Al descargar, instalar, acceder o utilizar la Aplicación, usted acepta quedar vinculado por estas Condiciones y por todas las leyes y normativas aplicables. Si no acepta la totalidad de las presentes Condiciones, no debe utilizar la Aplicación.',
        sections: [
          {
            title: '1. Aceptación de las Condiciones',
            content: 'Al descargar, instalar, acceder o utilizar la Aplicación, usted acepta quedar vinculado por las presentes Condiciones. Si no acepta la totalidad de estas Condiciones, no debe utilizar la Aplicación. Usted declara tener la edad legal requerida para consumir alcohol en su país de residencia.',
          },
          {
            title: '2. Descripción del Servicio',
            content: 'Stirr es una aplicación móvil dedicada a la gestión y el descubrimiento de cócteles. En particular, permite: descubrir y explorar recetas de cócteles; crear, modificar y guardar sus propias recetas; gestionar un inventario personal de ingredientes; marcar cócteles como favoritos o «para probar»; crear ingredientes caseros (DIY) y sus recetas asociadas.',
          },
          {
            title: '3. Licencia de Uso',
            content: 'Sujeto al cumplimiento de las presentes Condiciones, Stirr le concede una licencia limitada, no exclusiva, intransferible y revocable que le permite descargar y utilizar la Aplicación en sus dispositivos personales, para fines estrictamente privados y no comerciales. Esta licencia no constituye una transferencia de propiedad. Usted se compromete a no: copiar, reproducir o modificar la Aplicación; utilizar la Aplicación con fines comerciales o públicos; descompilar, desensamblar o intentar extraer el código fuente; eliminar las menciones de derechos de autor o de propiedad; distribuir, revender, alquilar o copiar la Aplicación en otro servidor. Cualquier incumplimiento dará lugar a la rescisión automática de la licencia.',
          },
          {
            title: '4. Cuenta de Usuario',
            content: 'Algunas funciones requieren la creación de una cuenta. Usted se compromete a: proporcionar información exacta, completa y actualizada; mantener la confidencialidad de sus datos de identificación; informar inmediatamente a Stirr de cualquier uso no autorizado; ser responsable de cualquier actividad realizada con su cuenta. Se puede ofrecer un modo de invitado con funciones limitadas. Stirr se reserva el derecho de suspender o eliminar una cuenta en caso de incumplimiento de las presentes Condiciones.',
          },
          {
            title: '5. Contenido del Usuario',
            content: 'Usted conserva todos los derechos sobre los contenidos que crea a través de la Aplicación (recetas, descripciones, ingredientes personalizados). Al publicar contenido en la Aplicación, usted concede a Stirr una licencia no exclusiva, mundial, gratuita y necesaria para el funcionamiento del servicio para alojar, mostrar y difundir dicho contenido en la Aplicación. Usted se compromete a no publicar contenidos: ilegales, difamatorios, que inciten al odio u ofensivos; que vulneren los derechos de propiedad intelectual de terceros; que contengan virus o códigos maliciosos; que fomenten el consumo excesivo o peligroso de alcohol. Stirr se reserva el derecho de eliminar cualquier contenido que no respete estas normas.',
          },
          {
            title: '6. Propiedad Intelectual',
            content: 'La Aplicación, su diseño, sus funcionalidades, su código fuente, sus bases de datos, sus logotipos y su contenido original son propiedad exclusiva de Stirr y están protegidos por las leyes de propiedad intelectual. Las recetas clásicas de cócteles pueden ser de dominio público. Las recetas creadas por los usuarios siguen siendo de su propiedad, sin perjuicio de la licencia concedida a Stirr. No se le transfiere ningún derecho de propiedad intelectual en virtud de las presentes Condiciones.',
          },
          {
            title: '7. Advertencia Relativa al Alcohol',
            content: 'La Aplicación presenta recetas de bebidas alcohólicas. La Aplicación está reservada a personas que tengan la edad legal para consumir alcohol en su país. Stirr no vende ni distribuye alcohol. Fomentamos el consumo responsable. Nunca conduzca después de haber consumido alcohol. El abuso de alcohol es peligroso para la salud. Usted es el único responsable de su consumo y de la verificación de alérgenos o restricciones alimentarias.',
          },
          {
            title: '8. Exactitud de la Información',
            content: 'Las recetas, descripciones e información presentes en la Aplicación pueden contener errores técnicos, tipográficos o imprecisiones. Stirr no garantiza que los contenidos sean exactos, completos, fiables o estén actualizados. Stirr puede modificar el contenido de la Aplicación en cualquier momento sin obligación de actualizarlo.',
          },
          {
            title: '9. Enlaces a Sitios de Terceros',
            content: 'La Aplicación puede contener enlaces a sitios o servicios de terceros. Stirr no ha revisado necesariamente estos servicios y no se hace responsable de su contenido, política o funcionamiento. El acceso a estos servicios de terceros se realiza bajo su propia responsabilidad.',
          },
          {
            title: '10. Limitación de Responsabilidad',
            content: 'Dentro de los límites permitidos por la ley aplicable: la Aplicación se proporciona «tal cual» y sin garantía de ningún tipo; Stirr no ofrece ninguna garantía expresa o implícita, en particular de comerciabilidad o idoneidad para un uso particular; Stirr no se hace responsable de las consecuencias relacionadas con el consumo de alcohol.',
          },
          {
            title: '11. Rescisión',
            content: 'Puede dejar de utilizar la Aplicación en cualquier momento y eliminar su cuenta desde los ajustes. Stirr puede suspender o rescindir su acceso en caso de: incumplimiento de las presentes Condiciones; uso indebido del servicio; obligación legal. En caso de rescisión, la licencia de uso finalizará inmediatamente. Los datos se tratarán de conformidad con la Política de privacidad.',
          },
          {
            title: '12. Modificaciones de las Condiciones',
            content: 'Stirr puede modificar las presentes Condiciones en cualquier momento. La versión vigente es la publicada en la Aplicación. Al continuar utilizando la Aplicación después de la modificación, usted acepta las nuevas Condiciones.',
          },
          {
            title: '13. Derecho Aplicable y Jurisdicción Competente',
            content: 'Las presentes Condiciones se rigen por la legislación francesa. Cualquier litigio relativo a su interpretación o ejecución se someterá a los tribunales franceses competentes, sin perjuicio de las disposiciones imperativas que protegen a los consumidores en su país de residencia.',
          },
          {
            title: '14. Contacto',
            content: 'Para cualquier pregunta relativa a las presentes Condiciones: Correo electrónico: contact@stirrbartender.com.',
          },
        ],
      },
    credits: {
      title: 'Créditos de iconos',
      intro: 'Algunos iconos utilizados en este sitio provienen de The Noun Project y se utilizan bajo la licencia Creative Commons Attribution 3.0 (CC BY 3.0).',
      items: [
        { name: 'Martini Glass', author: 'Bohdan Burmich', url: 'https://thenounproject.com/browse/icons/term/martini-glass/', urlTitle: 'Martini Glass Icons' },
        { name: 'Available', author: 'Setyo Ari Wibowo', url: 'https://thenounproject.com/browse/icons/term/available/', urlTitle: 'available Icons' },
        { name: 'Favorite', author: 'Landan Lloyd', url: 'https://thenounproject.com/browse/icons/term/favorite/', urlTitle: 'Favorite Icons' },
        { name: 'Bartender', author: 'Kael', url: 'https://thenounproject.com/browse/icons/term/bartender/', urlTitle: 'bartender Icons' },
        { name: 'Shaker', author: 'Amethyst Studio', url: 'https://thenounproject.com/browse/icons/term/shaker/', urlTitle: 'shaker Icons' },
        { name: 'Jiggers', author: 'Kiran Shastry', url: 'https://thenounproject.com/browse/icons/term/jiggers/', urlTitle: 'jiggers Icons' },
        { name: 'Beer', author: 'Start Up Graphic Design', url: 'https://thenounproject.com/browse/icons/term/beer/', urlTitle: 'Beer Icons' },
        { name: 'Bar', author: 'Rikas Dzihab', url: 'https://thenounproject.com/browse/icons/term/bar/', urlTitle: 'Bar Icons' },
        { name: 'Home', author: 'Gregor Cresnar', url: 'https://thenounproject.com/browse/icons/term/home/', urlTitle: 'Home Icons' },
      ],
      license: 'Licencia:',
      licenseLink: 'Creative Commons Attribution 3.0',
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}

