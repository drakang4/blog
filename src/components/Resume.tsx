import React from 'react';
import emailRegex from 'email-regex';
import humanizeUrl from 'humanize-url';
import Icon from './Icon';
import { formatDuration } from '../utils/i18n';
import { Resume as ResumeData } from '../types';

const Section: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => (
  <section {...props} className={`my-20 ${className}`}>
    {children}
  </section>
);

const SectionHeading: React.FC = ({ children, ...props }) => (
  <h2
    {...props}
    className="text-4xl font-bold leading-tight my-4 text-gray-900"
  >
    {children}
  </h2>
);

const Ul: React.FC = ({ children, ...props }) => (
  <ul {...props} className="my-4">
    {children}
  </ul>
);

const Li: React.FC = ({ children, ...props }) => (
  <li {...props} className="my-1 list-disc list-inside">
    {children}
  </li>
);

const DescriptionHeading: React.FC = ({ children, ...props }) => (
  <h3 className="my-1 text-xl font-medium">{children}</h3>
);

const Description: React.FC<{
  name: string;
  url: string;
  summary: string;
  startDate: string;
  endDate: string;
  highlights: any[];
}> = ({ name, url, summary, startDate, endDate, highlights, ...props }) => (
  <div {...props} className="my-4">
    <DescriptionHeading>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link dim dark-gray"
      >
        {name}
        <Icon name="open-in-new" className="ml-2 text-blue-500 no-print" />
      </a>
    </DescriptionHeading>
    <span className="mr-2">{summary}</span>
    <span className="text-sm text-gray-600">
      {formatDuration(startDate, endDate)}
    </span>
    <Ul>
      {highlights.map(highlight => (
        <Li key={highlight}>{highlight}</Li>
      ))}
    </Ul>
  </div>
);

type Props = {
  data: ResumeData;
};

const Resume: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Section className="print:mt-0">
        <h1 className="text-6xl font-extrabold my-4 text-gray-900">
          {data.name}
        </h1>
        <p className="text-xl font-light my-4">{data.summary}</p>
      </Section>
      <Section>
        <SectionHeading>연락처</SectionHeading>
        <Ul>
          {data.contacts.map(contact => (
            <Li key={contact.network}>
              <Icon name={contact.icon} className="mr-2 text-lg" />
              <a
                href={
                  emailRegex().test(contact.url)
                    ? `mailto:${contact.url}`
                    : contact.url
                }
                className="text-blue-500"
              >
                {emailRegex().test(contact.url)
                  ? contact.url
                  : humanizeUrl(contact.url)}
              </a>
            </Li>
          ))}
        </Ul>
      </Section>
      <Section>
        <SectionHeading>테크 스택</SectionHeading>
        {data.skills.map(skill => (
          <div key={skill.name} className="my-4">
            <DescriptionHeading>{skill.name}</DescriptionHeading>
            <p className="my-3">{skill.keywords.join(', ')}</p>
          </div>
        ))}
      </Section>
      <Section>
        <SectionHeading>이력</SectionHeading>
        {data.works.map(work => (
          <Description
            key={work.company}
            name={work.company}
            url={work.website}
            summary={work.role}
            startDate={work.startDate}
            endDate={work.endDate}
            highlights={work.highlights}
          />
        ))}
      </Section>
      <Section>
        <SectionHeading>사이드 프로젝트</SectionHeading>
        {data.projects.map(project => (
          <Description
            key={project.name}
            name={project.name}
            url={project.url}
            summary={project.summary}
            startDate={project.startDate}
            endDate={project.endDate}
            highlights={project.highlights}
          />
        ))}
      </Section>
      <Section className="print:mb-0">
        <SectionHeading>학력</SectionHeading>
        {data.educations.map(education => (
          <div key={education.school} className="my-4">
            <DescriptionHeading>{education.school}</DescriptionHeading>
            <span className="text-lg mr-2">
              {education.faculty} {education.studyType}
            </span>
            <span className="text-sm text-gray-600">
              {formatDuration(education.startDate, education.endDate)}
            </span>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Resume;
