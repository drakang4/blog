import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MarkdownRemark, SiteMetaData } from '../types';
import PostListItem from '../components/PostListItem';
import SEO from '../components/SEO';
import Helmet from 'react-helmet';

type Props = {
  data: {
    site: {
      siteMetadata: SiteMetaData;
    };
    allMarkdownRemark: {
      edges: [
        {
          node: MarkdownRemark;
        }
      ];
    };
  };
};

const BlogPage: React.FC<Props> = ({ data }) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '블로그',
          item: '/blog',
        },
      ],
    },
  ];

  return (
    <Layout>
      <SEO title="포스트" pathname="/blog" />
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <div className="center ph3 mw7">
        <h1 className="f1 mv4 near-black">포스트</h1>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListItem key={node.fields.slug} data={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100, truncate: true)
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fixed(width: 128, height: 128, quality: 80) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
