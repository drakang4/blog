import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Resume as ResumeData } from '../types';
import Resume from '../components/Resume';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';

type Props = {
  data: {
    resumeJson: ResumeData;
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const { resumeJson } = data;

  return (
    <Layout>
      <SEO title={resumeJson.name} description={resumeJson.summary} />
      <Helmet>
        <html lang={resumeJson.lang} />
      </Helmet>
      <div className="max-w-3xl mx-auto my-8 print:my-0 px-4 lg:px-0 text-gray-800">
        <Resume data={resumeJson} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
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
        descriptions {
          heading
          highlights
        }
      }
      projects {
        name
        url
        startDate
        endDate
        summary
        descriptions {
          highlights
        }
      }
      educations {
        school
        faculty
        studyType
        startDate
        endDate
      }
      etcs {
        text
        startDate
        endDate
      }
    }
  }
`;
