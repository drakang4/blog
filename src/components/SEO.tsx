import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

const SEO: React.FC<Props> = ({ title, description, pathname, image }) => {
  // Use siteMetadata for default
  const siteMetadata = useSiteMetadata();

  const url = pathname
    ? new URL(pathname, siteMetadata.siteUrl).toString()
    : siteMetadata.siteUrl;
  const thumbnail = new URL(
    image ? image : siteMetadata.image,
    siteMetadata.siteUrl,
  ).toString();

  const schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: siteMetadata.siteUrl,
    name: siteMetadata.title,
    logo: `${siteMetadata.siteUrl}${siteMetadata.logo}`,
  };

  return (
    <Helmet>
      {/* General */}
      <html lang="ko" />
      <title>{title || siteMetadata.title}</title>
      <link rel="canonical" href={url} />
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
      {/* Facebook Open Graph */}
      <meta property="fb:app_id" content="191342008318335" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description}
      />
      <meta name="twitter:image" content={thumbnail} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;
