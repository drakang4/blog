import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import { SiteMetaData, Resume as ResumeData } from '../types';
import Resume from '../components/Resume';

type Props = {
  data: {
    site: {
      siteMetadata: SiteMetaData;
    };
    resumeJson: ResumeData;
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const {
    site: { siteMetadata },
    resumeJson,
  } = data;
  const { siteUrl } = siteMetadata;

  return (
    <Layout>
      <Helmet>
        <html lang={resumeJson.lang} />
        <title>강희룡</title>
        <meta name="description" content={resumeJson.summary} />
        <link rel="canonical" href={siteUrl} />
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="강희룡" />
        <meta property="og:description" content={resumeJson.summary} />
      </Helmet>

      <div className="center mw7 ph3 mv4 mv6-ns dark-gray">
        <Resume data={resumeJson} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    resumeJson {
      lang
      name
      summary
      contacts {
        network
        icon
        url
      }
      skills {
        name
        keywords
      }
      works {
        company
        role
        website
        startDate
        endDate
        highlights
      }
      projects {
        name
        url
        startDate
        endDate
        highlights
      }
      educations {
        school
        faculty
        studyType
        startDate
        endDate
      }
    }
  }
`;
