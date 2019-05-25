import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetaData } from '../types';

interface Site {
  site: {
    siteMetadata: SiteMetaData;
  };
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            logo
            image
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};
