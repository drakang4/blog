import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';
import { SiteMetaData, MarkdownRemark } from '../types';
import Utterances from '../components/Utterances';
import Helmet from 'react-helmet';

type Props = {
  data: {
    site: {
      siteMetadata: SiteMetaData;
    };
    markdownRemark: MarkdownRemark;
  };
};

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { site, markdownRemark } = data;
  const {
    siteMetadata: { siteUrl },
  } = site;
  const {
    excerpt,
    fields,
    frontmatter: { title, thumbnail, date },
  } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`${siteUrl}${fields.slug}`} />
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}${fields.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${siteUrl}${fields.slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
        />
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
    site {
      siteMetadata {
        siteUrl
      }
    }
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
