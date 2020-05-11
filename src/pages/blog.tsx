import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MarkdownRemark } from '../types';
import PostListItem from '../components/PostListItem';
import SEO from '../components/SEO';
import BreadCrumList from '../components/BreadCrumList';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: MarkdownRemark;
        },
      ];
    };
  };
};

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="포스트" pathname="/blog" />
      <BreadCrumList data={[{ name: '블로그', pathname: '/blog' }]} />
      <div className="mx-auto px-4 max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 my-8">포스트</h1>
        <div className="my-8">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListItem key={node.fields.slug} data={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       limit: 100
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 100, truncate: true)
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//             thumbnail {
//               childImageSharp {
//                 fixed(width: 128, height: 128, quality: 80) {
//                   ...GatsbyImageSharpFixed_withWebp
//                 }
//               }
//             }
//             tags
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogPage;
