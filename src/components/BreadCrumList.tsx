import React from 'react';
import { Helmet } from 'react-helmet';
import urlJoin from 'url-join';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type Props = {
  data: {
    name: string;
    pathname: string;
  }[];
};
const BreadCrumList: React.FC<Props> = ({ data }) => {
  const { siteUrl } = useSiteMetadata();
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: urlJoin(siteUrl, item.pathname),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default BreadCrumList;
