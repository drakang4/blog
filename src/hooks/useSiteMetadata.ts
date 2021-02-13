import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetaData } from '../types/types';

interface Site {
  site: {
    siteMetadata: SiteMetaData;
  };
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<Site>(query);

  return site.siteMetadata;
};

const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        defaultTitle
        description
        siteUrl
        logo
      }
    }
  }
`;
