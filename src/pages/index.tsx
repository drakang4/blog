import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Duration from '../components/Duration';
import ExternalLink from '../components/ExternalLink';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface QueryResult {
  mdx: {
    body: string;
  };
}

const shortcodes = {
  Duration,
  ExternalLink,
  Icon,
};

const IndexPage = ({ data }: PageProps<QueryResult>) => {
  return (
    <>
      <SEO title="이력서" />
      <Layout>
        <article className="max-w-3xl mx-auto my-8 print:my-0 px-4 lg:px-0 print:px-0">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ResumeQuery {
    mdx(frontmatter: { templateKey: { eq: "resume" } }) {
      body
    }
  }
`;
