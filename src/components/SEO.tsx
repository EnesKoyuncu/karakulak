import { Helmet } from "react-helmet-async";
import { siteMetadata } from "../config/siteMetadata";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  image = "/images/ayalka-og-image.jpg",
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const { baseUrl, companyName, social } = siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta
        name="robots"
        content={`${noindex ? "noindex" : "index"}, ${
          nofollow ? "nofollow" : "follow"
        }`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org yapısal veri */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: companyName,
          url: baseUrl,
          logo: siteMetadata.logo,
          sameAs: Object.values(social),
        })}
      </script>
    </Helmet>
  );
}
