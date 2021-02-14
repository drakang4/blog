import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { Mdx } from '../types/types';
import PostListItem from '../components/PostListItem';
import SEO from '../components/SEO';

interface QueryResult {
  allMdx: {
    nodes: Mdx[];
  };
}

const BlogPage = ({ data }: PageProps<QueryResult>) => {
  return (
    <>
      <SEO
        title="포스트"
        pathname="/blog"
        breadcrum={[{ name: '블로그', pathname: '/blog' }]}
      />
      <Layout>
        <div className="mx-auto px-4 max-w-3xl">
          <h1>포스트</h1>
          <div className="my-8">
            {data.allMdx.nodes.map((node) => (
              <PostListItem key={node.fields.slug} data={node} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query AllPostsQuery {
    allMdx(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(pruneLength: 100, truncate: true)
        fields {
          slug
        }
        frontmatter {
          title
          date
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 128
                height: 128
                placeholder: BLURRED
                layout: FIXED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
