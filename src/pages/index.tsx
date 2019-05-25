import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import humanizeUrl from 'humanize-url';
import Layout from '../components/Layout';
import { SiteMetaData, Resume } from '../types';
import { formatDuration } from '../utils/i18n';
import Icon from '../components/Icon';

const Section: React.FC = ({ children, ...props }) => (
  <section {...props} className="mb5">
    {children}
  </section>
);

const SectionHeading: React.FC = ({ children, ...props }) => (
  <h2 {...props} className="f2 fw7 mv3">
    {children}
  </h2>
);

const Ul: React.FC = ({ children, ...props }) => (
  <ul {...props} className="pl4 mt3 mb4">
    {children}
  </ul>
);

const Li: React.FC = ({ children, ...props }) => (
  <li {...props} className="mv2">
    {children}
  </li>
);

type Props = {
  data: {
    site: {
      siteMetadata: SiteMetaData;
    };
    resumeJson: Resume;
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
        <Section>
          <h1 className="f-headline lh-solid fw9 mv3 near-black">
            {resumeJson.name}
          </h1>
          <p className="f4 fw3 lh-copy mv3">{resumeJson.summary}</p>
        </Section>
        <Section>
          <SectionHeading>연락처</SectionHeading>
          <Ul>
            {resumeJson.contacts.map(contact => (
              <Li key={contact.network}>
                <Icon name={contact.icon} className="mr2 f4" />
                <a
                  href={contact.url}
                  className="link dim blue v-mid no-reformat"
                >
                  {humanizeUrl(contact.url)}
                </a>
              </Li>
            ))}
          </Ul>
        </Section>
        <Section>
          <SectionHeading>테크 스택</SectionHeading>
          {resumeJson.skills.map(skill => (
            <div key={skill.name} className="mv3">
              <h3 className="mv3 f4 fw5">{skill.name}</h3>
              <p className="mv2">{skill.keywords.join(', ')}</p>
            </div>
          ))}
        </Section>
        <Section>
          <SectionHeading>이력</SectionHeading>
          {resumeJson.works.map(work => (
            <div key={work.company} className="mv3">
              <h3 className="mv1 f4 fw5">
                <a
                  href={work.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link dim dark-gray"
                >
                  {work.company}
                  <Icon name="open-in-new" className="ml2 blue no-print" />
                </a>
              </h3>
              <span className="f5 mr2">{work.role}</span>
              <span className="f6">
                {formatDuration(work.startDate, work.endDate)}
              </span>
              <Ul>
                {work.highlights.map(highlight => (
                  <Li key={highlight}>{highlight}</Li>
                ))}
              </Ul>
            </div>
          ))}
        </Section>
        <Section>
          <SectionHeading>사이드 프로젝트</SectionHeading>
          {resumeJson.projects.map(project => (
            <div key={project.name}>
              <h3 className="mv1 f4 fw5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link dim dark-gray"
                >
                  {project.name}
                  <Icon name="open-in-new" className="ml2 blue no-print" />
                </a>
              </h3>
              <span className="font-weight-light font-size-1 ml-2">
                {formatDuration(project.startDate, project.endDate)}
              </span>
              <Ul>
                {project.highlights.map(highlight => (
                  <Li key={highlight}>{highlight}</Li>
                ))}
              </Ul>
            </div>
          ))}
        </Section>
        <Section>
          <SectionHeading>학력</SectionHeading>
          {resumeJson.educations.map(education => (
            <div key={education.school} className="mv3">
              <h3 className="mv1 f4 fw5">{education.school}</h3>
              <span className="f5 mr2">
                {education.faculty} {education.studyType}
              </span>
              <span className="f6">
                {formatDuration(education.startDate, education.endDate)}
              </span>
            </div>
          ))}
        </Section>
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
