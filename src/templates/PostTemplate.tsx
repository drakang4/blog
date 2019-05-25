import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';
import { MarkdownRemark } from '../types';
import Utterances from '../components/Utterances';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';

type Props = {
  data: {
    markdownRemark: MarkdownRemark;
  };
};

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data;
  const {
    excerpt,
    fields,
    frontmatter: { title, thumbnail, date },
  } = markdownRemark;

  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    image: [thumbnail.childImageSharp.fluid.src],
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
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        pathname={fields.slug}
        image={thumbnail.childImageSharp.fluid.src}
      />
      <Helmet>
        {/* Append Facebook Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <div className="center mv4 mw7 ph3 ph0-l">
        <Post data={markdownRemark} />
      </div>
      <Utterances />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
            }
          }
        }
        tags
      }
      timeToRead
    }
  }
`;
