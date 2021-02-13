import React, { Suspense } from 'react';
import { graphql, PageProps } from 'gatsby';
import urlJoin from 'url-join';
import Post from '../components/Post';
import Layout from '../components/Layout';
import { Mdx } from '../types/types';
import SEO from '../components/SEO';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Utterances = React.lazy(() => import('../components/Utterances'));
interface QueryResult {
  mdx: Mdx;
}

const PostTemplate = ({ data }: PageProps<QueryResult>) => {
  const siteMetadata = useSiteMetadata();
  const { mdx } = data;
  const {
    body,
    excerpt,
    fields,
    frontmatter: { title, thumbnail, date },
  } = mdx;

  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: [
      urlJoin(siteMetadata.siteUrl, thumbnail.childImageSharp.resize.src),
    ],
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: '강희룡',
    },
    publisher: {
      '@type': 'Person',
      name: '강희룡',
    },
    description: excerpt,
  };

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        pathname={fields.slug}
        breadcrum={[
          { name: '블로그', pathname: '/blog' },
          { name: title, pathname: fields.slug },
        ]}
        image={thumbnail.childImageSharp.resize.src}
      >
        {/* Append Facebook Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </SEO>

      <Layout>
        <Post title={title} body={body} date={date} />
        <Suspense fallback={null}>
          <Utterances />
        </Suspense>
      </Layout>
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
