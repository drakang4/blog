import React from 'react';
import emailRegex from 'email-regex';
import humanizeUrl from 'humanize-url';
import Icon from './Icon';
import { formatDuration } from '../utils/i18n';
import { Resume as ResumeData, ResumeDescription } from '../types';

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
  <ul {...props} className="my-2 pl-5 list-disc">
    {children}
  </ul>
);

const Li: React.FC = ({ children, ...props }) => (
  <li {...props} className="my-1">
    {children}
  </li>
);

const DescriptionHeading: React.FC = ({ children, ...props }) => (
  <h3 className="my-1 text-xl font-bold">{children}</h3>
);

const Description: React.FC<{
  name: string;
  url: string;
  summary: string;
  startDate: string;
  endDate: string;
  descriptions: ResumeDescription[];
}> = ({ name, url, summary, startDate, endDate, descriptions, ...props }) => (
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
    <div className="mt-4 mb-10">
      {descriptions.map((description, i) => (
        <div key={i} className="mb-6">
          {description.heading && (
            <h4 className="font-medium text-gray-900">{description.heading}</h4>
          )}
          {Array.isArray(description.highlights) && (
            <Ul>
              {description.highlights.map((highlight, i) => (
                <Li key={i}>{highlight}</Li>
              ))}
            </Ul>
          )}
        </div>
      ))}
    </div>
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
        <p className="text-xl my-4 text-gray-600">{data.summary}</p>
      </Section>
      <Section>
        <SectionHeading>연락처</SectionHeading>
        <Ul>
          {data.contacts.map((contact) => (
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
        {data.skills.map((skill) => (
          <div key={skill.name} className="my-4">
            <DescriptionHeading>{skill.name}</DescriptionHeading>
            <p className="my-3">{skill.keywords.join(', ')}</p>
          </div>
        ))}
      </Section>
      <Section>
        <SectionHeading>이력</SectionHeading>
        {data.works.map((work) => (
          <Description
            key={work.company}
            name={work.company}
            url={work.website}
            summary={work.role}
            startDate={work.startDate}
            endDate={work.endDate}
            descriptions={work.descriptions}
          />
        ))}
      </Section>
      <Section>
        <SectionHeading>사이드 프로젝트</SectionHeading>
        {data.projects.map((project) => (
          <Description
            key={project.name}
            name={project.name}
            url={project.url}
            summary={project.summary}
            startDate={project.startDate}
            endDate={project.endDate}
            descriptions={project.descriptions}
          />
        ))}
      </Section>
      <Section>
        <SectionHeading>학력</SectionHeading>
        {data.educations.map((education) => (
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
      <Section className="print:mb-0">
        <SectionHeading>기타</SectionHeading>
        {data.etcs.map((etc) => (
          <div key={etc.text} className="my-4">
            <span className="mr-2">{etc.text}</span>
            <span className="text-sm text-gray-600">
              {formatDuration(etc.startDate, etc.endDate)}
            </span>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Resume;
