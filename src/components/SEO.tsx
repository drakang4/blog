import React from 'react';
import { Helmet } from 'react-helmet';
import urlJoin from 'url-join';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

interface Breadcrum {
  name: string;
  pathname: string;
}

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  breadcrum?: Breadcrum[];
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  pathname,
  image,
  breadcrum,
  children,
}: Props) => {
  // Use siteMetadata for default
  const siteMetadata = useSiteMetadata();

  const siteTitle = title
    ? `${title} - ${siteMetadata.defaultTitle}`
    : siteMetadata.defaultTitle;
  const siteDescription = description || siteMetadata.description;
  const siteUrl = urlJoin(siteMetadata.siteUrl, pathname ?? '');
  const siteLogo = urlJoin(siteMetadata.siteUrl, siteMetadata.logo);
  const siteImage = urlJoin(siteMetadata.siteUrl, image ?? siteMetadata.logo);

  const websiteSchema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: siteTitle,
    logo: siteLogo,
  };

  const breadcrumSchema = breadcrum
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrum.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: urlJoin(siteMetadata.siteUrl, item.pathname),
        })),
      }
    : undefined;

  return (
    <Helmet>
      {/* General */}
      <html lang="ko" />
      <title>{siteTitle}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={siteDescription} />
      {/* Facebook Open Graph */}
      <meta property="fb:app_id" content="191342008318335" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteUrl} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumSchema)}
        </script>
      )}
      {/* More tags */}
      {children}
    </Helmet>
  );
};

export default SEO;
