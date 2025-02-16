import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  author?: string;
  publisher?: string;
  keywords?: string[];
  ogType?: "website" | "article" | "product" | "profile";
}

export default function SEO({
  title,
  description,
  image,
  author,
  publisher,
  keywords = [],
  ogType = "website",
}: SEOProps) {
  const location = useLocation();
  const { language } = useLanguage();

  // Temel URL ve Canonical URL
  const baseUrl = "https://karakulakgroup.com";
  const isErrorPage = location.pathname === "/404";
  const canonicalUrl = isErrorPage
    ? baseUrl
    : `${baseUrl}${location.pathname}${location.search}${location.hash}`;

  // Dinamik Dil Yönetimi
  const languages = [
    { code: "en", name: "English" },
    { code: "tr", name: "Türkçe" },
    { code: "de", name: "Deutsch" },
  ];

  const hreflangs = languages.map((lang) => ({
    lang: lang.code,
    url: `${baseUrl}/${lang.code}${location.pathname.replace(
      /^\/(en|tr|de)/,
      ""
    )}`,
  }));

  // Schema.org Markup (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: canonicalUrl,
    name: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: author || "Karakulak Group",
    },
    publisher: {
      "@type": "Organization",
      name: publisher || "Karakulak Group",
    },
  };

  return (
    <Helmet>
      {/* Sayfa Dili */}
      <html lang={language} />

      {/* Sayfa Başlığı */}
      <title>{title}</title>

      {/* Meta Açıklaması */}
      <meta name="description" content={description} />

      {/* Anahtar Kelimeler */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Arama Motoru Index ve Follow */}
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Etiketleri */}
      {hreflangs.map((langData) => (
        <link
          rel="alternate"
          href={langData.url}
          hrefLang={langData.lang}
          key={langData.lang}
        />
      ))}

      {/* Open Graph (Facebook, LinkedIn vb. için) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Karakulak Group" />
      <meta property="og:locale" content={language} />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={title} />
        </>
      )}

      {/* Twitter Cards (Twitter Paylaşımı için) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={title} />
        </>
      )}
      <meta name="twitter:site" content="@karakulakgroup" />
      <meta name="twitter:creator" content={author || "@karakulakgroup"} />

      {/* Author & Publisher Meta Etiketleri */}
      {author && <meta name="author" content={author} />}
      {publisher && <meta name="publisher" content={publisher} />}

      {/* Güvenlik ve Gizlilik Meta Etiketleri */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="theme-color" content="#ffffff" />

      {/* Schema.org Markup (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  );
}
